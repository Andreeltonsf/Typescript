import { BankAccount } from "./BankAccount";
import type { Person } from "./Person";

export class CurrentAccount extends BankAccount {
	private overdraftLimit: number;

	constructor(
		person: Person,
		initialBalance: number,
		accountNumber: string,
		overdraftLimit: number,
	) {
		super(person, initialBalance, accountNumber);
		this.overdraftLimit = overdraftLimit;
	}
	
	pay(amount: number): void {
		if (amount > this.balance) {
			console.log("❌ Insufficient balance for transaction");
		} else {
			this._balance -= amount;

			console.log(`✅ Payment of $${amount} made successfully.`);
		}
	}

	getBalance(): number {
		return this._balance;
	}

	override withdraw(amount: number): void {
		const totalLimit = this._balance + this.overdraftLimit;
		if (amount > 0 && amount <= totalLimit) {
			this._balance -= amount;
			this.logSucessWithDraw(amount);
		} else {
			this.logFailWithDraw(amount);
		}
	}
}
