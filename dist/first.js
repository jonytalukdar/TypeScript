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
// type of empty function
function doubleIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleIt(12);
console.log(output);
// typeof array function
let multiplyTwo;
multiplyTwo = (x, y) => x * y;
console.log(multiplyTwo(12, 12));
const multiply = (x, y) => x * y;
console.log(multiply(12, 12));
// set type of array and object and see the structure
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
numbers.push(15);
const friends = ['joney', 'jerry', 'jubayer', 'roney'];
let megaFriend = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaFriend.length) {
        megaFriend = friend;
    }
}
console.log('friends with largest name :', megaFriend);
// object
let player;
player = {
    club: 'Real Madrid',
    salary: 321412432,
};
console.log(player);
const objFriend = {
    name: 'joney talukdar',
    age: 21,
};
objFriend.age = 62;
objFriend.name = 'jerry talukdar';
