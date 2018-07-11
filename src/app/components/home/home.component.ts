import { Component, OnInit, ViewChild } from '@angular/core';
import { IfscCodeService } from '../../shared/services/ifsccode.service';
import { BankData } from '../../shared/interface/bank-data.interface';
import { BanksData } from '../../shared/model/banks-data.model';
import { Table } from 'primeng/table';

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

    constructor(private ifscCodeService: IfscCodeService) {
        this.ifscCode = 'ANDB0001154';
        this.message = '';
        this.getFromAPI = false;
    }

    ngOnInit() {

        this.cols = [
            { field: 'BANK', header: 'BANK', width: '10%' },
            { field: 'BRANCH', header: 'BRANCH', width: '10%' },
            { field: 'IFSC', header: 'IFSC', width: '10%' },
            { field: 'MICRCODE', header: 'MICRCODE', width: '7%' },
            { field: 'CITY', header: 'CITY', width: '10%' },
            { field: 'DISTRICT', header: 'DISTRICT', width: '10%' },
            { field: 'STATE', header: 'STATE', width: '10%' },
            { field: 'ADDRESS', header: 'ADDRESS', width: '26%' },
            { field: 'CONTACT', header: 'CONTACT', width: '8%' }
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
                },
                error => {
                    this.message = error;
                }
            );
        }
    }

    filter(event) {
        if (event.filteredValue.length === 0) {
            this.getFromAPI = true;
        } else {
            this.getFromAPI = false;
        }
    }
}
