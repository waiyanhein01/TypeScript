// Array
const arr: string[] = ["apple", "mango"];
// console.log(arr[0])
// ================================================

// Array with Aliases

type Person = {
  name: string;
  age: number;
  gender?: "male" | "female";
};

const myInfo: Person[] = [
  {
    name: "Yan",
    age: 20,
    gender: "male",
  },
];

// console.log(myInfo[0].name)
// ==================================================

// Tuple(exactly index type and length)
const tupleArr: [string, string] = ["hello", "Yan"];
const tupleArr2: [string, string, number, boolean] = ["hello", "Yan", 1, true];

// console.log(tupleArr2[1])
// ==================================================================================

// Special Type(Handle unknown data type)
// -Any
// -Unknown
// -Never

// Any(can't use prototype)
// const coffee: string = 1 //Error
const coffee: any = 1; //noError

// Unknown(Same usage with Any but unknown is more safety)

// Never(This is function type same "Break")
const printer = (): never => {
  throw new Error("error");
};

// printer()
// ======================================================================

// enum

// enum Gender {
//   male = 2,
//   female,
//   other,
// }

// type Person2 = {
//   name: string;
//   age: number;
//   gender: Gender;
// };

// const info: Person2 = {
//   name: "Yann",
//   age: 20,
//   gender: Gender.male,
// };

// if (info.gender === Gender.male) {
//   console.log("I'm Male");
// } else {
//   console.log("I'm Female");
// }
// =========================================
// Union

// const info:(string|number) = 2;
// const info2:(string|number) = "Yan";

// let arr2: number[] | string;

// arr2 = "Yan"

// arr2 = [1,2,3]

// console.log(arr2)

// arr2.push(4)

// console.log(arr2)
// ============================================

// Casting

// let x : unknown = []
// console.log(x) // no support prototype

// let x : unknown = []
// let y = (x as [])
// console.log(y.push()) // support prototype

// ===================================================

// Function

// type fanner = (x: number, y: number) => void;

// let sum = (x: number, y: number): number => {
//   return x + y;
// };

// let calc: fanner = sum;

// console.log(calc(2, 1));

// =============================================================

// Utility Type

// Partial(Like that optional)

// type Person3 = {
//   name: string
//   age: number
//   gender?: string
// }

// const info3: Partial<Person3> = {}

// Required
// const info4: Required<Person3> = {
//   name: "Yan",
//   age: 24,
//   gender: "male"
// }

// Record
// const studentsMark: Record<string | number,number | string> = {
//   "Mya": 64,
//   "Eng": 46,
//   "Math": 67,
//   "Phy": 73,
//   "Chem": 74,
//   "Eco": 78,
// }

// studentsMark.Mya = 67;

// console.log(studentsMark)

// Omit

type Person4 = {
  name: string;
  age: number;
  gender: string;
};

// const Wai: Omit<Person4, "age"> = {
//   name: "Wai",
//   gender: "male"
// }

// Pick

const Yan: Pick<Person4, "name"> = {
  name: "Yan"
}

// Readonly

const Hein: Readonly<Person4> = {
  name: "Wai",
  age: 24,
  gender: "male"
}

/*
Partial = Optional
Required = Required
Record = specific key type and value type.
Omit = removes keys from an object type.
Pick = specified keys from an object type.
Readonly = to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
*/

