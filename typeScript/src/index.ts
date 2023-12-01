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

// OBJECTS

interface Employee {
  readonly id: number;
  name: string;
  retire: (date: Date) => void
} 

type Employee2 = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
}

let employee: Employee = { 
  id: 1, 
  name: "Joey",
  retire: (date: Date) => {
    console.log(date);
  }
}

// UNION TYPES
function kgToLbs(weight: number | string): number {
  if (typeof weight === 'number') {
    return weight * 2.2;
  }
  else {
    return parseInt(weight) * 2.2;
  }
}

kgToLbs(10);
kgToLbs('10');

// INTERSECTION
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {}
}

// LITERAL TYPES
const variable = "literal";

type Quantity = 50 | 100;
let quantity: Quantity;

type Metric = 'cm' | 'inch';
let measure: Metric;

// NULLABLE TYPES
function greeted(name: string | null | undefined) {
  if (name)
    console.log(name.toLowerCase());
  else
    console.log('Hola!');
}

greeted(null);

// OPTIONAL CHAINING

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional Call
let log: any = null;
log?.('a');