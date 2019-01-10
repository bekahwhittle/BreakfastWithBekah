interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {

    return "Hello, " + person.firstName + " " + person.lastName;

}

var user = { firstName: "Bekah", lastName: "Whittle"};

document.body.innerHTML = greeter(user);