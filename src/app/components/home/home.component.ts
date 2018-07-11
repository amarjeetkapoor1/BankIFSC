import { Component, OnInit, ViewChild } from '@angular/core';
import { IfscCodeService } from '../../shared/services/ifsccode.service';
import { BankData } from '../../shared/interface/bank-data.interface';
import { DATAEXIT, SERVERERROR } from 'src/app/shared/app.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    ifscCode: string;
    bankInfo: BankData[];
    message: string;
    error: boolean;
    filterData: string;

    constructor(private ifscCodeService: IfscCodeService) {
        this.ifscCode = '';
        this.message = '';
        this.error = false;
        this.filterData = '';
    }

    ngOnInit() {
        this.ifscCodeService.get.subscribe(
            bankInfo => {
                this.bankInfo = bankInfo;
            }
        );
    }

    getBankInfo() {
        if (this.getFromAPI()) {
            this.ifscCodeService.update(this.ifscCode).subscribe(
                (msg) => {
                    this.filterData = this.ifscCode;
                    this.ifscCode = '';
                    this.message = msg;
                    this.error = false;
                },
                error => {
                    if ( typeof error === 'string') {
                        this.message = error;
                    } else {
                        this.message = SERVERERROR;
                    }
                    this.error = true;
                }
            );
        } else {
            this.filterData = this.ifscCode;
            this.message = DATAEXIT;
            this.ifscCode = '';
        }
    }

    getFromAPI() {
        return !this.bankInfo.filter(
            item => {
                return this.ifscCode === '' ||
                    item.IFSC === this.ifscCode;
            }
        ).length;
    }
}
