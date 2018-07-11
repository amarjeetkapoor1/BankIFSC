import { BankData } from 'src/app/shared/interface/bank-data.interface';
import { ReplaySubject } from 'rxjs';
import { STORAGEKEY } from 'src/app/shared/app.constants';

export class BanksData {


    private listOfBanksData = new ReplaySubject<BankData[]>(1);
    public get = this.listOfBanksData.asObservable();

    constructor() {
        this.listOfBanksData.next(this.getData());
    }

    public update(bankInfo: BankData) {
        const data = this.getData();
        data.push(bankInfo);
        sessionStorage.setItem(STORAGEKEY, JSON.stringify(data));
        this.listOfBanksData.next(data);
    }

    private getData(): BankData[] {
        let data = JSON.parse(sessionStorage.getItem(STORAGEKEY));
        console.log(data);
        if (data === null) {
            data = [];
        }
        return data;
    }
}
