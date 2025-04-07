import {
	type Person,
	getAge,
	getFullName,
	updateFirstName,
} from "./banking/person";

function Main() {
	const Maria: Person = {
		firstName: "Maria",
		lastName: "Rodriguez",
		birthDate: new Date(1985, 1, 1),
	};

	console.log(getFullName(Maria));
	console.log(getAge(Maria));

	const updateMariA = updateFirstName(Maria, "Maria A");
	console.log(getFullName(updateMariA));
	console.log(getAge(updateMariA));
}
