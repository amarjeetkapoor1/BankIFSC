import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BankData } from '../interface/bank-data.interface';
import { BanksData } from 'src/app/shared/model/banks-data.model';

@Injectable({
    providedIn: 'root'
})
export class IfscCodeService {

    public get: Observable<BankData[]>;

    constructor(private http: HttpClient, private banksData: BanksData) {
        this.get = this.banksData.get;
    }

    public update(ifscCode: string): Observable<string> {
        return this.http.get<string>(environment.url + ifscCode)
            .pipe(
                map(
                    (info: API) => {
                        if (info.status === 'failed') {
                            throw info.message;
                        } else {
                            this.banksData.update(info.data);
                            return info.status;
                        }
                    },
                    err => {
                        return 'Server Error due to' + err.code;
                    }
                )
            );
    }
}

interface API {
    message: string;
    data?: BankData;
    status: string;
}
