import { Component, OnInit, ViewChild } from '@angular/core';
import { IfscCodeService } from '../../shared/services/ifsccode.service';
import { BankData } from '../../shared/interface/bank-data.interface';
import { Table } from 'primeng/table';
import { NORECORD } from 'src/app/shared/app.constants';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    cols: { field: string; header: string; width: string; }[];
    ifscCode: string;
    bankInfo: BankData[];
    message: string;
    @ViewChild('dt') dt: Table;
    getFromAPI: boolean;
    error: boolean;

    constructor(private ifscCodeService: IfscCodeService) {
        this.ifscCode = '';
        this.message = '';
        this.getFromAPI = false;
        this.error = false;
    }

    ngOnInit() {

        this.cols = [
            { field: 'BANK', header: 'Bank', width: '10%' },
            { field: 'BRANCH', header: 'Branch', width: '10%' },
            { field: 'IFSC', header: 'IFSC', width: '10%' },
            { field: 'MICRCODE', header: 'MICRCODE', width: '7%' },
            { field: 'CITY', header: 'City', width: '10%' },
            { field: 'DISTRICT', header: 'District', width: '10%' },
            { field: 'STATE', header: 'State', width: '10%' },
            { field: 'ADDRESS', header: 'Address', width: '26%' },
            { field: 'CONTACT', header: 'Contact', width: '8%' }
        ];
        this.ifscCodeService.get.subscribe(
            bankInfo => {
                this.bankInfo = bankInfo;
            }
        );
    }

    getBankInfo() {
        if (this.getFromAPI) {
            this.ifscCodeService.update(this.ifscCode).subscribe(
                (msg) => {
                    this.ifscCode = '';
                    this.dt.reset();
                    this.message = msg;
                    this.error = false;
                },
                error => {
                    console.log(error);
                    this.message = error;
                    this.error = true;
                }
            );
        }
    }

    filter(event) {
        this.message = '';
        if (event.filteredValue.length === 0) {
            this.getFromAPI = true;
            this.message = NORECORD;
        } else {
            this.getFromAPI = false;
        }
    }
}
