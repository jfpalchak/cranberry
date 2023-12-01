"use strict";
class Student {
    constructor(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}.`);
}
let user = new Student("Jane", "M", "User");
let msg = "A string!";
greet("Madison", new Date());
let sales = 123456789;
let course = 'TypeScript';
let is_published = true;
let numbers = [1, 2, 3];
let strings = ["1", "2"];
let stringAndNum = [1, "2", 3];
let tester = [1, 'Test'];
let mySize = 2;
console.log(mySize);
//# sourceMappingURL=index.js.map