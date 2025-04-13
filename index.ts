import type { BankAccount } from "./banking/BankAccount";

import { CurrentAccount } from "./banking/CurrentAccount";

import { Person } from "./banking/Person";

import { SavingsAccount } from "./banking/SavingsAccount";

const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));

const mariaSavingsAccount = new SavingsAccount(maria, 100, "123", 2);

// const mariaAccount = new BankAccount(maria, 100, "123");

const mariaAccount = new SavingsAccount(maria, 100, "123", 2);

// mariaSavingsAccount.addInterest();

mariaAccount.deposit(200);

const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));

const lucasCurrentAccount = new CurrentAccount(lucas, 100, "1111", 100);

mariaAccount.withdraw(200);

mariaSavingsAccount.withdraw(150);

console.log(mariaAccount.accountDetails);

// /**

//  *

//  * @param sender envia

//  * @param receiver recebe

//  * @param amount quantidade

//  */

// function transaction(

//   sender: BankAccount,

//   receiver: BankAccount,

//   amount: number

// ) {

//   if (amount > 0 && amount <= sender.balance) {

//     sender.withdraw(amount);

//     receiver.deposit(amount);

//     console.log("Transaction successful");

//   } else {

//     console.log("Transaction failed: insufficient funds or invalid amount.");

//   }

// }

function transaction(account: BankAccount) {
	// exemplo
}

transaction(mariaAccount);

// // enviar 50 do Lucas para a Maria

// transaction(lucasCurrentAccount, mariaSavingsAccount, 50);

const lucasCreditCard = new CreditCard("555 555", 200);

// enviar 50 do Lucas para a Maria

transaction(lucasCurrentAccount, mariaSavingsAccount, 200);

const payment = new ProcessPayment(lucasCreditCard, 100);

payment.execute();
