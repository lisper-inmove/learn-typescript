"use strict";
const person = {
    name: "inmove",
};
console.log(person.name);
const multi = (x, y) => x * y;
console.log(multi);
// 默认参数
const multi2 = (x, y = 10) => x * y;
console.log(multi2(10));
// 返回值类型
const double = (x, y) => x * y;
function double1(x, y) {
    return x * y;
}
console.log(double(9, 10));
function printMessage(message) { }
printMessage("Hello");
// never
// 1. A function that always throws an error
function throwError(msg) {
    throw new Error(msg);
}
// 2. A function that has an infinite loop
function neverReturn() {
    while (true) { }
}
// 3. A variable that can never have a value
let x;
// x = throwError("Hello");
// Array
const numbers = [1, 2, 3];
const names = ["1", "2", "3"];
names.push("4");
// Multi Dimensional
const matrix = [
    [1, 2],
    [3, 4],
];
// Objects
const obj1 = {
    name: "inmove",
    age: 34,
};
function printUser() {
    return {
        name: "inmove",
        age: 34,
    };
}
const obj2 = {
    name: "inmove",
    age: 34,
};
const obj3 = {
    name: "inmove",
    age: 34,
};
const obj4 = {
    name: "inmove",
    age: 34,
    email: "aaa@bbb.com",
};
console.log(obj4);
const obj5 = {
    name: "inmove",
    age: 33,
    email: "ccc@ddd.com",
};
console.log(obj5);
const obj6 = {
    name: "inmove",
    age: 34,
    email: "eeff@gg.com",
};
console.log(typeof obj6);
let password = 13;
let items = [1, 2, 3, "4"];
let value;
value = 3;
// value = 4; // error
// Tuples
// A type that represents an array with a fixed number of elements where each element can have a different type.
// The order of the types in the tuple definition corresponds to the order of the values in the actual array.
let mytuple = ["Hello", 42];
let [f, s] = mytuple;
// enum
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
    WeatherConditions[WeatherConditions["Snowy"] = 3] = "Snowy";
})(WeatherConditions || (WeatherConditions = {}));
const currentWeather = WeatherConditions.Cloudy; // 1
// class
class CPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.salary = 10;
        this.job = "programmer";
    }
    getSalary() {
        return this.salary * 100;
    }
}
let cperson = new CPerson("inmove", 34);
console.log(cperson);
class CTeather extends CPerson {
    printTeacher() {
        console.log(`${this.name} - ${this.age} - ${this.job} - ${this.getSalary()}`);
    }
}
let cteather = new CTeather("inmove", 34);
cteather.printTeacher();
class CStudent extends CPerson {
    constructor(name, age, cardNumber) {
        super(name, age);
        this.cardNumber = cardNumber;
    }
}
let cstudent = new CStudent("inmove", 34, 33);
console.log(cstudent);
class MyClass {
    constructor() {
        this._MyProperty = 0;
    }
    get MyProperty() {
        return this._MyProperty;
    }
    set MyProperty(value) {
        this._MyProperty = value;
    }
}
let myObj = new MyClass();
console.log(myObj.MyProperty);
myObj.MyProperty = 10;
console.log(myObj.MyProperty);
const ePerson = {
    firstName: "inmove",
    lastName: "shawn",
    age: 34,
    sayHello() {
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    },
};
ePerson.sayHello();
const add = (a, b) => a + b;
class Car {
    start() {
        console.log("Car Started");
    }
    stop() {
        console.log("Car stopped");
    }
}
class D {
    start() {
        console.log("Started");
    }
    stop() {
        console.log("Stopped");
    }
}
console.log(D);
const myCar = {
    brand: "Toyota",
    model: "Carmy",
    start() {
        console.log("Started");
    },
    stop() {
        console.log("Stopped");
    },
};
console.log(myCar);
// Generics
function printInfo(x, y) {
    console.log(`Value of x is ${x} its types is ${typeof x}, ${y} and typeof y is ${typeof y}`);
}
printInfo("Hello", true);
class MyCatC {
    constructor(name) {
        this.name = name;
    }
}
let mycatc = new MyCatC(123);
console.log(mycatc);
// 对于obj的这个写法: 这个对象的“形状”不确定，但所有键都是字符串，值都是统一的类型 T。
function getRandomKeyValuePair(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
const stringObject = { a: "apple", b: "banana", c: "cherry" };
const res = getRandomKeyValuePair(stringObject);
console.log(res);
function filterArray(array, condition) {
    return array.filter((item) => condition(item));
}
const numberArray = [1, 2, 3, 4];
console.log(filterArray(numberArray, (item) => item % 2 == 0));
// Type narrowing
// the process of refining a variable's type within a coditional block of code
// 1. typeof
// 2. obj instanceof class
