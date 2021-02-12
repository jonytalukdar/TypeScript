let age: number;
let club: string = 'real madrid';
const isFamous: boolean = false;

age = 23;

console.log(age);
console.log(club);

// function add(x: number | string, y: number | string): string {
//   return x + y;
// }

// add(12, 12);
// add('joney', 'talukdar');

function fullName(firstName: string, lastName: string) {
  return firstName + ' ' + lastName;
}

const user: string = fullName('Martin ', 'keleabba');
console.log(user);

// type of empty function

function doubleIt(num: number): void {
  const result = num * 2;
  console.log(result);
}
const output = doubleIt(12);
console.log(output);

// typeof array function

let multiplyTwo: (x: number, y: number) => number;
multiplyTwo = (x, y) => x * y;
console.log(multiplyTwo(12, 12));

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(12, 12));

// set type of array and object and see the structure

const numbers: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14];
numbers.push(15);

const friends: string[] = ['joney', 'jerry', 'jubayer', 'roney'];
let megaFriend: string = '';
for (let i = 0; i < friends.length; i++) {
  const friend: string = friends[i];
  if (friend.length > megaFriend.length) {
    megaFriend = friend;
  }
}
console.log('friends with largest name :', megaFriend);

// object

let player: {
  club: string;
  salary: number;
};

player = {
  club: 'Real Madrid',
  salary: 321412432,
};
console.log(player);

const objFriend: { name: string; age: number } = {
  name: 'joney talukdar',
  age: 21,
};

objFriend.age = 62;
objFriend.name = 'jerry talukdar';
