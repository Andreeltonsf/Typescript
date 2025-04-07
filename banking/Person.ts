export class Person{
  firstName: string;
  lastName: string;
  birthDate: Date;

  constructor(firstName: string, lastName: string, birthDate: Date) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }
  //Só posso ter um constructor - não pode haver mais de um
  //Constructor seria um método e não uma função


  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge(): number {
    const today = new Date();
    const birthDate = this.birthDate;
    const age = today.getFullYear() - birthDate.getFullYear();
    const isBirthdayPassed =
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() &&
        today.getDate() >= this.birthDate.getDate());
    return isBirthdayPassed ? age : age - 1;
  }

  updateFirstName(firstName: string): void {
    this.firstName = firstName;
  }
}
