// Primitive types
let male: boolean = true;
let str: string = "Hello World";
let num: number = 1;

let num2: number;
num2 = 3;

// U can reassign in same datatype(called Type Assignment and Type inference)
let hello = "hello";
hello = "wai";

// ======================================================

// Object Type

// using object generic
// const person: {
//   name: string;
//   age: number;
//   gender: string;
// //   hello?: "Hello"
// } = {
//   name: "Yan",
//   age: 24,
//   gender: "male",
// };
// console.log(person.name);
// --------------------------------------------------

// object Interface(Mostly use in OOP)
// interface personDT {
//     name: string;
//     age: number;
//     gender: string;
//   // hello?: "Hello"
// }

// const person: personDT = {
//   name: "Yan",
//   age: 24,
//   gender: "male",
// };
// console.log(person.name);
// -----------------------------------------------

// object Aliases(Mostly use in FP)
// type personDT = {
//     name: string;
//     age: number;
//     gender: string;
//   // hello?: "Hello"
// }

// type NRC = {
//     nationality: string;
// }

// const person: personDT & NRC = {
//   name: "Yan",
//   age: 24,
//   gender: "male",
//   nationality: "Myanmar"
// };

// console.log(person.name, person.nationality);

// ===========================================================

// Parameter

let sum = (x: number, y: number) : void => {
  console.log(x + y);
};

sum(1,6);
