"use strict";
let age;
let club = 'real madrid';
const isFamous = false;
age = 23;
console.log(age);
console.log(club);
// function add(x: number | string, y: number | string): string {
//   return x + y;
// }
// add(12, 12);
// add('joney', 'talukdar');
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Martin ', 'keleabba');
console.log(user);
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(12);
console.log(output);
let multiplyTwo;
multiplyTwo = (x, y) => x * y;
console.log(multiplyTwo(12, 12));
const multiply = (x, y) => x * y;
console.log(multiply(12, 12));
