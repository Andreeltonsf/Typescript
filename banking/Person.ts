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
}
