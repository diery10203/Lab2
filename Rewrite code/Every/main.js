Array.prototype.myEvery = function(callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// Test cases
const numbers1 = [2, 4, 6, 8, 10];
const numbers2 = [1, 3, 5, 7, 9];
const mixedNumbers = [2, 4, 5, 8, 10];

console.log(numbers1.myEvery(num => num % 2 === 0));  // true
console.log(numbers2.myEvery(num => num % 2 !== 0));  // true
console.log(mixedNumbers.myEvery(num => num % 2 === 0));  // false

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];

console.log(people.myEvery(person => person.age >= 18));  // true
console.log(people.myEvery(person => person.age > 30));  // false

const emptyArray = [];
console.log(emptyArray.myEvery(item => item > 0));  // true (vacuously true)