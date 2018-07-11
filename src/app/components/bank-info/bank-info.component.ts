import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BankData } from 'src/app/shared/interface/bank-data.interface';
import { NORECORD } from 'src/app/shared/app.constants';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-bank-info',
    templateUrl: './bank-info.component.html',
    styleUrls: ['./bank-info.component.css']
})
export class BankInfoComponent implements OnInit {

    _filter: string;
    @ViewChild('dt') td: Table;
    @Input('bankInfo') bankInfo: BankData[];
    @Input('filterData') get filterData(): string {
        return this._filter ;
    }
    set filterData(data: string) {
        this._filter = data;
        if (this.td !== undefined) {
            this.td.filterGlobal(this._filter, 'contains');
        }
    }

    cols: { field: string; header: string; width: string; }[];
    message: string;
    constructor() {
        this.message = '';
        this._filter = '';
    }

    ngOnInit() {
        this.cols = [
            { field: 'BANK', header: 'Bank', width: '10%' },
            { field: 'BRANCH', header: 'Branch', width: '10%' },
            { field: 'IFSC', header: 'IFSC', width: '10%' },
            { field: 'MICRCODE', header: 'MICRCODE', width: '10%' },
            { field: 'CITY', header: 'City', width: '10%' },
            { field: 'DISTRICT', header: 'District', width: '10%' },
            { field: 'STATE', header: 'State', width: '10%' },
            { field: 'ADDRESS', header: 'Address', width: '23%' },
            { field: 'CONTACT', header: 'Contact', width: '8%' }
        ];
    }

    filter(event) {
        if (event.filteredValue.length === 0) {
            this.message = NORECORD;
        } else {
            this.message = '';
        }
    }

}
