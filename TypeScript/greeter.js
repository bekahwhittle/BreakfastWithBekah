function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Bekah", lastName: "Whittle" };
document.body.innerHTML = greeter(user);
