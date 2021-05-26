console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  // return "Hello, " + name + '!';
  return `Hello, ${name}!`
} //end helloName
// Remember to call the function to test
console.log(helloName('Tim Dugan'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
} // end addNumbers
console.log('2 + 2 =', addNumbers(2, 2));
console.log('37 + 29 =', addNumbers(37, 29));
console.log('123456 + 654321 =', addNumbers(123456, 654321));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
  console.log('in multiplyThree');
  let totalNumber = num0 * num1 * num2;
  return totalNumber;
} //end multiplyThree
console.log("3 x 3 x 3 =", multiplyThree(3, 3, 3));
console.log("10 x 11 x 12 =", multiplyThree(10, 11, 12));
console.log("1,000,000 x 1,000,000 x 0 =", multiplyThree(1000000, 1000000, 0));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } // is positive
  else {
    return false;
  } // is not positive
} // end isPositive

// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive(3) - should say true', isPositive(3) );
console.log( 'isPositive(0) - should say false', isPositive(0) );
console.log( 'isPositive(-3) - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log('in getLast');
  if (array.length > 0) {
  // alternate if statement, an empty array will return 0 (falsey), so correct code would still return
  //if (array.length) {
    return array[array.length - 1];
  } //array has contents, returns last item
  else {
    return 'undefined';
  } // array is empty, returns undefined
} // end getLast

let starWarsArray = ['Skywalker', 'Baron Papanoida', 'Yoda', 'Jango Fett', 'Kitster', 'Yoda'];
let emptyArray = [];

console.log('This array should return "Yoda":', getLast(starWarsArray));
console.log('This array is empty, and should return "undefined":', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  for (let eachItem of array) {
    if (eachItem === value) {
      console.log(`Hooray, we found ${value}!!`);
      return true;
    } // returns true if this array item matches value
    else {
      console.log(`${value} does not match ${eachItem}`);
    }
  } // end for loop
  return false;
} //end function find

let starTrekArray = ['Kirk', 'Picard', 'Riker', 'Spock'];
let primeNumberArray = [2, 3, 5, 7, 11, 13, 17];

console.log("Yoda is a Star Wars character:", find('Yoda', starWarsArray));
console.log("Yoda is a Star Trek character:", find('Yoda', starTrekArray));
console.log("Is the number 7 included in this array:", find(7, primeNumberArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string[0] === letter) {
    return true;
  } // returns true if letter matches the first letter of string
  else {
    return false;
  } // returns false if letter does not match the first letter of string
} // end isFirstLetter

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say true', isFirstLetter('Y', 'Yoda') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let eachNumber of array) {
    sum += eachNumber;
  } // end of for loop
  return sum;
} // end of sumAll function

let simpleNumberArray = [1, 2, 3, 4];

console.log('The sum of 1, 2, 3, and 4 is:', sumAll(simpleNumberArray));
console.log('The sum of 2, 3, 5, 7, 11, 13, 17 is:', sumAll(primeNumberArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let positiveNumberArray = [];

function allPositiveNumbers(inputArray) {
  positiveNumberArray = [];
  for (let i=0; i<inputArray.length; i++) {
    if (inputArray[i] > 0) {
      positiveNumberArray.push(inputArray[i]);
    } // adds positive number to new array
    else {
      console.log('This number was not positive:', inputArray[i]);
    } // logs non-positive numbers
  } // end of for loop
  return positiveNumberArray;
} // end of allPositiveNumbers

let mixedNumberArray = [1, 7, 0, -8, -1, 10];
let allNegativeArray = [-8, -6, -4, -2];

console.log('These are all the positive numbers from mixedNumberArray:', allPositiveNumbers(mixedNumberArray));
console.log('These are all the positive numbers from allNegativeArray:', allPositiveNumbers(allNegativeArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// challenge from edabit.com: (https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw)
// create a function that converts Age in years and returns age in days
// Note: use 365 day year (ignore leap years), ignore days between last birthday and now, expect only positive integer inputs,

function ageIntoDays(ageInYears) {
  let ageInDays = ageInYears * 365;
  return ageInDays
} // end of ageIntoDays

console.log(`Brett is 36 years old, or ${ageIntoDays(36)} days old!`);
console.log(`Julie is 10 years old, or ${ageIntoDays(10)} days old!`);
console.log(`Yoda is 900 years old, or ${ageIntoDays(900)} days old!`);
