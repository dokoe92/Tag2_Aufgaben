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
    updateTable();
}

let listBody = document.getElementById("listBody"); 

function updateTable() {
    listBody.innerHTML = "";
    personen.forEach(element => {
        let row = document.createElement("tr");
        let  firstNameCol= document.createElement("td");
        let lastNameCol = document.createElement("td");
        let birthYearCol = document.createElement("td");
        let firstName = document.createTextNode(element.getFirstName());
        let lastName = document.createTextNode(element.getLastName());
        let birthYear = document.createTextNode(element.getAge());
        firstNameCol.appendChild(firstName);
        lastNameCol.appendChild(lastName);
        birthYearCol.appendChild(birthYear);
        row.appendChild(firstNameCol);
        row.appendChild(lastNameCol);
        row.appendChild(birthYearCol);

        listBody.appendChild(row);
    });
}

function removeAll() {
    while (personen.length > 0) {
        personen.pop(); 
    }
    updateTable();
}

function removeLast() {
    personen.pop();
    updateTable();
}

function sortByLastName() {
    personen.sort(
        (p1, p2) => {

            if (p1.lastName < p2.lastName) {
                return -1;
    }
            if (p1.lastName > p2.lastName) {
                return 1;
            }
            return 0;
        }

    )
    updateTable();
}

function sortByAge() {
    personen.sort(
        (p1,p2) => {
            if (p1.birthYear < p2.birthYear) {
                return -1;
            }
            if (p1.birthYear > p2.birthYear) {
                return 1;
            }
            return 0;
        }
    )
    updateTable();
}









