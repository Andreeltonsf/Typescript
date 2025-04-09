import { BankAccount } from "./banking/BankAccount";

import { Person } from "./banking/Person";


const maria = new Person("Maria", "da Silva", new Date("1999-01-15"));


const lucas = new Person("Lucas", "Garcez", new Date("1996-02-16"));


// console.log(mariaSavingsAccount.accountDetails);
// console.log(lucasCurrentAccount.accountDetails);

// form
const accountNumber = "1234567";

console.log(BankAccount.validateAccountNumber(accountNumber));
