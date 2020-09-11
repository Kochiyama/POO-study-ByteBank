import { Client } from "./Client.js";

export class CurrentAccount {
    static totalAccNumber = 0;
    agency;
    _client;
    _balance = 0;

    set client(newClient) {
        if (newClient instanceof Client) {
            this._client = newClient;
        }
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }

    constructor(agency, client) {
        this.agency = agency;
        this.client = client;
        CurrentAccount.totalAccNumber++;
    }


    withdraw(amount) {
        if (this._balance >= amount) {
            this._balance -= amount;
            return amount;
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
    }

    tranferir(amount, account) {

        const withdrawalAmount = this.withdraw(amount);
        account.deposit(withdrawalAmount);

    }
}
