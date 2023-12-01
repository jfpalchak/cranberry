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
function calculateTax(income, taxYear) {
    if (taxYear < 2023)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
let employee = {
    id: 1,
    name: "Joey",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
const variable = "literal";
let quantity;
let measure;
function greeted(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log('Hola!');
}
greeted(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map