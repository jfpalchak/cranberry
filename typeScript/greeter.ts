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

document.body.textContent = greeter(user);

// TypeScript can infer the types, in many cases
// If the type will end up being inferred, it's best to NOT add annotations!
let msg = "A string!";

greet("Madison", new Date());