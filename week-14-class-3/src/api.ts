// // Pick api in typescript works with type and interface
// interface person {
//     name: string,
//     age: number,
//     address: string,
//     phone: number
// }

// type selectedPerson = Pick<person, 'name' | 'age' | 'address'>;

// type optinalPerson = Partial<selectedPerson>

// const printInfo = (person: optinalPerson) => {
//     console.log(`${person.name} is ${person.age} years old and lives in ${person.address}`);
// }

// printInfo({
//     address: "new york"
// });

// // ----------------------------------------------------
// // read only

// type User = {
//      name: string,
//      age: number,
//      address: string
// }

// const user: Readonly<User> = {
//     name: "Vishal",
//     age: 21,
//     address: "new york"
// }

// user.name = "Vinay";

// console.log(user);

// // ---------------------------------------------------------------
// // record 

// // type user = { 
// //     [key: string]: string 
// // }

// type users = Record<string, string>

// const users: users = {
//     "kjef": "vishal",
//     "jfkdf": "Nayan"
// }

// //---------------------------------------------------------------
// // Map

// type userObj = {
//     name: string,
//     age: number
// }

// const user = new Map<number, userObj>();
// user.set(1, {name: "vishal", age: 21});
// user.set(2, {name: "nayan", age: 24});
// user.set(3, {name: "pushkar", age: 23});

// console.log(user.get(1));

//---------------------------------------------------------------------
// Exclude

type eventTypes = 'click' | 'scroll' | 'mousemove';

type excludeTypes = Exclude<eventTypes, 'mousemove'>;

const handleEvent = (event: excludeTypes) => {
    console.log("handling event->" + event);
}

handleEvent('click');