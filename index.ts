import { Person } from "./banking/Person";
function Main() {
	
  const maria = new Person("Maria", "Fernandes", new Date(1990, 1, 1));
  
  console.log(maria.firstName);
  console.log(maria.lastName);
  console.log(maria.birthDate);
}
