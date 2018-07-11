export class BanksData {

    update() {

    }

    get() {
        return JSON.parse(sessionStorage.getItem('BankData'));
    }
}
