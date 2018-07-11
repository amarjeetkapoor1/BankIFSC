import { Component, OnInit, Input } from '@angular/core';
import { BankData } from 'src/app/shared/interface/bank-data.interface';
import { NORECORD } from 'src/app/shared/app.constants';

@Component({
    selector: 'app-bank-info',
    templateUrl: './bank-info.component.html',
    styleUrls: ['./bank-info.component.css']
})
export class BankInfoComponent implements OnInit {

    @Input('bankInfo') bankInfo: BankData[];
    
    cols: { field: string; header: string; width: string; }[];
    message: string;
    constructor() {
        this.message = '';
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
