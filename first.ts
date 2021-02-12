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
