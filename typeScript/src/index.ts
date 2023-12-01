class Student {
  // declare the type for our fullName property
  fullName: string;

  // the use of 'public' on arguments to the constructor
  // is a shorthand that allows us to automatically create properties with that name
  constructor(
    public firstName: string,
    public middleName: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}.`);
}

let user = new Student("Jane", "M", "User" );

// document.body.textContent = greeter(user);

// TypeScript can infer the types, in many cases
// If the type will end up being inferred, it's best to NOT add annotations!
let msg = "A string!";

greet("Madison", new Date());

// ##########################################
let sales = 123_456_789;
let course= 'TypeScript';
let is_published = true;

// ARRAYS
let numbers: number[] = [1, 2, 3];
let strings: string[] = ["1", "2"];
let stringAndNum: (string | number)[] = [1, "2", 3];

// TUPLES 
let tester: [number, string] = [1, 'Test'];

// ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1, // by default, compiler sets values from 0 and increments
  Medium,
  Large
}

let mySize: Size = Size.Medium;
console.log(mySize);

// FUNCTIONS
// best practice to annotate functions
function calculateTax(income: number, taxYear: number): number {
  if (taxYear < 2023)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2023);