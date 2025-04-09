import { BankAccount } from "./BankAccount";
import type { Person } from "./Person";

export class SavingsAccount extends BankAccount {
	private interestRate: number;

	constructor(
		person: Person,
		initialBalance: number,
		accountNumber: string,
		interestRate: number,
	) {
		super(person, initialBalance, accountNumber);
		this.interestRate = interestRate;
	}
}


export class CurrentAccount extends BankAccount {
  
}
