import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BankData } from '../interface/bank-data.interface';

@Injectable({
  providedIn: 'root'
})
export class BankDataService {

  private updateSubject = new ReplaySubject<BankData[]>(1);
  public bankInfo = this.updateSubject.asObservable();
  constructor(private http: HttpClient) { }


  load() {
    return new Promise<boolean>((resolve, reject) => {
      let data = JSON.parse(sessionStorage.getItem('BankData'));
      console.log(data);
      if (data === null ) {
        data = [];
      }
      this.updateSubject.next(data);
      resolve(true);
    });
  }
}
