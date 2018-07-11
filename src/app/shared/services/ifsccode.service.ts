import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { BankData} from '../interface/bank-data.interface';

@Injectable({
  providedIn: 'root'
})
export class IfscCodeService {

  private updateSubject = new ReplaySubject<BankData[]>(1);
  public bankInfo = this.updateSubject.asObservable();
  constructor(private http: HttpClient) { }

  get (ifscCode: string) {
    return this.http.get(environment.url + ifscCode).pipe(
      map( (info: API) => {
          if (info.status === 'failed') {
            throw info.message;
          } else {
            this.update(info.data);
            return info.status;
          }
        },
        err => {
          return 'Server Error due to' + err.code;
        }
      )
    );
  }

  load() {
    return new Promise<boolean>((resolve, reject) => {
      const data = this.getData();
      this.updateSubject.next(data);
      resolve(true);
    });
  }

  getData(): BankData[] {
    let data = JSON.parse(sessionStorage.getItem('BankData'));
    console.log(data);
    if (data === null ) {
      data = [];
    }
    return data;
  }

  update(bankInfo: BankData ) {
    const data = this.getData();
    data.push(bankInfo);
    sessionStorage.setItem('BankData', JSON.stringify(data));
  }
}

export interface API {
  message: string;
  data?: BankData;
  status: string;
}
