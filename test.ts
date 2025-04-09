type Person = {
  name: string;
};

const person: Person = {
  name: "inmove",
};

console.log(person.name);

const multi = (x: number, y: number) => x * y;
console.log(multi);

// 默认参数
const multi2 = (x: number, y: number = 10) => x * y;
console.log(multi2(10));

// 返回值类型
const double = (x: number, y: number): number => x * y;
function double1(x: number, y: number): number {
  return x * y;
}
console.log(double(9, 10));
function printMessage(message: string): void {}

printMessage("Hello");

// never
// 1. A function that always throws an error
function throwError(msg: string): never {
  throw new Error(msg);
}
// 2. A function that has an infinite loop
function neverReturn(): never {
  while (true) {}
}
// 3. A variable that can never have a value
let x: never;
// x = throwError("Hello");

// Array
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["1", "2", "3"];
names.push("4");

// Multi Dimensional
const matrix: number[][] = [
  [1, 2],
  [3, 4],
];

// Objects
const obj1: { name: string; age: number } = {
  name: "inmove",
  age: 34,
};

function printUser(): { name: string; age: number } {
  return {
    name: "inmove",
    age: 34,
  };
}

// type aliases ---------------------------------------------------------
// A type alias is a way to create a new name for an existing type.
type Teacher = {
  name: string;
  age: number;
};
const obj2: Teacher = {
  name: "inmove",
  age: 34,
};

type Student = {
  readonly name: string;
  age: number;
  email?: string;
};
const obj3: Student = {
  name: "inmove",
  age: 34,
};
const obj4: Student = {
  name: "inmove",
  age: 34,
  email: "aaa@bbb.com",
};
console.log(obj4);
// obj4.name = "xzp"; // error

// intersection types
// combine multiple types into a single type
type User = Teacher & Student;
const obj5: User = {
  name: "inmove",
  age: 33,
  email: "ccc@ddd.com",
};
console.log(obj5);

// Union types
type User2 = Teacher | Student;
const obj6: User2 = {
  name: "inmove",
  age: 34,
  email: "eeff@gg.com",
};
console.log(typeof obj6);

let password: string | number = 13;
let items: (string | number)[] = [1, 2, 3, "4"];

let value: 1 | 2 | 3;
value = 3;
// value = 4; // error

// Tuples
// A type that represents an array with a fixed number of elements where each element can have a different type.
// The order of the types in the tuple definition corresponds to the order of the values in the actual array.
let mytuple: [string, number] = ["Hello", 42];
let [f, s] = mytuple;

// enum
enum WeatherConditions {
  Sunny,
  Cloudy,
  Rainy,
  Snowy, // Snowy = "Snowy"
}
const currentWeather = WeatherConditions.Cloudy; // 1

// class
class CPerson {
  public name: string;
  public age: number;
  private salary: number;
  protected job: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.salary = 10;
    this.job = "programmer";
  }

  getSalary(): number {
    return this.salary * 100;
  }

  // Public, Private, Protected
}

let cperson = new CPerson("inmove", 34);
console.log(cperson);

class CTeather extends CPerson {
  printTeacher() {
    console.log(
      `${this.name} - ${this.age} - ${this.job} - ${this.getSalary()}`,
    );
  }
}
let cteather = new CTeather("inmove", 34);
cteather.printTeacher();

class CStudent extends CPerson {
  public cardNumber: number;
  constructor(name: string, age: number, cardNumber: number) {
    super(name, age);
    this.cardNumber = cardNumber;
  }
}
let cstudent = new CStudent("inmove", 34, 33);
console.log(cstudent);

class MyClass {
  private _MyProperty: number = 0;

  get MyProperty(): number {
    return this._MyProperty;
  }

  set MyProperty(value: number) {
    this._MyProperty = value;
  }
}
let myObj = new MyClass();
console.log(myObj.MyProperty);
myObj.MyProperty = 10;
console.log(myObj.MyProperty);

// interface for type
interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}
const ePerson: IPerson = {
  firstName: "inmove",
  lastName: "shawn",
  age: 34,
  sayHello(): void {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
  },
};
ePerson.sayHello();

// interface for functions
interface MathOperation {
  (x: number, y: number): number;
}
const add: MathOperation = (a, b) => a + b;

// interface for class
interface Vehicle {
  start(): void;
  stop(): void;
}
class Car implements Vehicle {
  start() {
    console.log("Car Started");
  }
  stop() {
    console.log("Car stopped");
  }
}

interface A {
  start(): void;
}
interface B {
  stop(): void;
}
interface C extends A, B {}

class D implements A, B {
  start(): void {
    console.log("Started");
  }
  stop(): void {
    console.log("Stopped");
  }
}
console.log(D);

// interface merging
interface MyCar {
  brand: string;
  start(): void;
}
interface MyCar {
  model: string;
  stop(): void;
}
const myCar: MyCar = {
  brand: "Toyota",
  model: "Carmy",
  start(): void {
    console.log("Started");
  },
  stop(): void {
    console.log("Stopped");
  },
};
console.log(myCar);

// Generics
function printInfo<T, V>(x: T, y: V): void {
  console.log(
    `Value of x is ${x} its types is ${typeof x}, ${y} and typeof y is ${typeof y}`,
  );
}
printInfo<string, boolean>("Hello", true);

interface MyCatI<T> {}

class MyCatC<T extends Number> {
  name: T;
  constructor(name: T) {
    this.name = name;
  }
}

let mycatc = new MyCatC(123);
console.log(mycatc);

// 对于obj的这个写法: 这个对象的“形状”不确定，但所有键都是字符串，值都是统一的类型 T。
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const res = getRandomKeyValuePair(stringObject);
console.log(res);

function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}

const numberArray = [1, 2, 3, 4];
console.log(filterArray<number>(numberArray, (item: number) => item % 2 == 0));

// Type narrowing
// the process of refining a variable's type within a coditional block of code
// 1. typeof
// 2. obj instanceof class
