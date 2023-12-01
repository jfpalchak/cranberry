var Student = /** @class */ (function () {
    // the use of 'public' on arguments to the constructor
    // is a shorthand that allows us to automatically create properties with that name
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "."));
}
var user = new Student("Jane", "M", "User");
document.body.textContent = greeter(user);
// TypeScript can infer the types, in many cases
// If the type will end up being inferred, it's best to NOT add annotations!
var msg = "A string!";
greet("Madison", new Date());
