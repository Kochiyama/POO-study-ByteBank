import { Client } from "./Client.js"
import { CurrentAccount } from "./CurrentAccount.js"

const clientOne = new Client("Marcelo", 12123412351);
const accountOne = new CurrentAccount(1324, clientOne);

accountOne.deposit(500);
accountOne.withdraw(100);

console.log(accountOne);