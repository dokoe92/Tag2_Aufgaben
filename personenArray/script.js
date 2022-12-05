class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.birthYear;
    }
}

let personen = [];
let firstNameField = document.getElementById("firstName");
let lastNameField = document.getElementById("lastName");
let birthYearField = document.getElementById("birthYear");


function addPerson() {
    console.log("test");
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let birthYear = birthYearField.value;
    personen.push(new Person(firstName, lastName, birthYear));
    firstNameField.value = "";
    lastNameField.value = "";
    birthYearField.value = "";
    console.log(personen);

}

let listBody = document.getElementById("listBody"); 

function updateTable() {
    personen.forEach(element => {
        let  = document.createElement("p");
        let firstName = element.getFirstName();
        let lastName = element.getLastName();
        let birthYear = element.getAge();
        e.appendChild(eContent);
        listBody.appendChild(e);
    });
}