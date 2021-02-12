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

function doubleIt(num: number): void {
  const result = num * 2;
  console.log(result);
}
const output = doubleIt(12);
console.log(output);

let multiplyTwo: (x: number, y: number) => number;
multiplyTwo = (x, y) => x * y;
console.log(multiplyTwo(12, 12));

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(12, 12));
