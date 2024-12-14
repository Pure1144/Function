// function sumOfTwoNumbers(number1, number2) {
//   return number1 + number2;
// }

// console.log(sumOfTwoNumbers(4, 6));

// // Create a function that takes two numbers as arguments and returns their sum.
// // console.log(Somme(7,15))

// function sumOfTwoNumbers(number1, number2) {
//   return number1 + number2;
// }
// console.log(sumOfTwoNumbers(7, 15));

// // Write a function that takes the base and height of a triangle as arguments and returns its area.
// // console.log(TriangleArea(10,12))

// function retangleArea(base, height) {
//   return (base * height) / 2;
// }
// console.log(retangleArea(10, 12));

// // Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// // console.log(RectanglePerimetre(6,6))
// function retanglperimeter(width, height) {
//   return Math.sqrt(width * width + height * height) + width + height;
// }
// console.log(retanglperimeter(10, 12));

// // Write a function that takes a number as argument and returns it square.
// // console.log(SquareNumber(9))

// function squareNumber(sqrt) {
//   return Math.sqrt(sqrt);
// }
// console.log(squareNumber(16));

// // Write a function that takes hours as argument  and converts its into seconds.
// // console.log(HourToSecond(24))

// function HourToSecond(Hour) {
//   return Hour * 60;
// }
// console.log(HourToSecond(1.5));

// // Create a function that  takes a string as argument and returns the length of this string.
// function lengthOfString(p) {
//   return p.length;
// }
// console.log(lengthOfString("Purevdorjss"));

// // write a function that takes a string as argument and returns it to number

// function StringToNumber(p) {
//   return Number(p);
// }
// console.log(StringToNumber("4455"));

// // write a function that takes a number as argument and returns it to string

// function NumberToString(s) {
//   return String(s);
// }
// console.log(NumberToString(5566));
// // Exercise 1
// // <h3>Write a function which checks given input/parameter:</h3>
// // <ul>
// //   <li>If input/parameter is divisible by 3 print => Fizz</li>

// function Fizz(Too1) {
//   if (Too1 % 3 == 0) {
//     return "Fizz";
//   }
// }
// console.log(Fizz(30));

// //   <li>If input/parameter is divisible by 5 print => Buzz</li>
// function Buzz(Too1) {
//   if (Too1 % 5 == 0) {
//     return "Buzz";
//   }
// }
// console.log(Buzz(60));

// //   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
// function FizzBuzz(Too1) {
//   if (Too1 % 3 == 0 || Too1 % 5 == 0) {
//     return "FizzBuzz";
//   } else if (Too1 % 3 == 0) {                    //   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//     return "fizz"
//   } else if (Too1 % 5 == 0) {
//     return "buzz";
//   }else{
//     return "invalid input"                        //   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
//   }
// }
// console.log(FizzBuzz(13));

// Exercise 2

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040

// Example:
// > console.log(factorializer(7));
// > 5040

// function factorial(Too1) {
//     let factorial=1
//     for ( let i=1; i<=Too1; i++) {
//         factorial=factorial*i
//     }
//     return factorial;
//   }
//   console.log(factorial(7));

// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd

// Example:
// > console.log(oddOrEven(7));
// > "Odd"

// function OddOrEven(Too1){
//      if (Too1%2 == 0){
//       return "Even";
//      } else {
//         return "Odd";
//       }
// }
// console.log(OddOrEven(7));

// Exercise 4

// Return the sum of a number going back to it's root. In other words, the function will work like this:

// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

// function addUp(Too1){

// for( i=1;i<=Too1;i++){
//      Too1=Too1+i
// }
// return addUp;
// }
// console.log(addUp(5));

// Exercise 5

// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

function isEmpty(Str) {
  let counter = 0;
  for (let i = 0; i < Str.length; i++) {
    if (Str.charAt(i) === " ") {
      counter++;
    }
  }
  if (counter === Str.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isEmpty("    a "));

// Exercise 6

// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.

// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true

function isEqualStr(Str1, Str2) {
  if (Str1.length == Str2.length) {
    return true;
  } else {
    return false;
  }
}
console.log(isEqualStr("Simpl", "tunis"));

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

function numbers(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(numbers(10, 3));

// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

function mood(str) {
  if (str === undefined) {
    return "Today, I am feeling neuter";
  } else {
    return `Today, I am feeling ${str}`;
  }
}

console.log(mood("happy"));

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
// h == H false
// .toUpperCase()       үсэгнүүдийг том болгоно
// .toLowerCase()        үсэгнүүдийг жижиг болгоно
function identical(str1, str2) {
  if (str1.length == str2.length) {
    if (str1.toLowerCase() == str2.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}
console.log(identical("HELLO WORLD", "hello world"));
// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

function upperLower(str) {
  // if(){}  nemeed nuhtsul bol   else if(){}   else if(){}   else ===> hamgiin suulid bichij bolno gantshan
  if (str == str.toLowerCase()) {
    // if(){}  nemeed nuhtsul bol   else if(){}   else if(){}   else ===> hamgiin suulid bichij bolno gantshan
    return "Lower";
  } else if (str == str.toUpperCase()) {
    return "Upper";
  } else return "Mixed";
}

console.log(upperLower("ddDDd"));

// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”

function swap(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(swap("Ada Lovelace"));

//  split-таслана   split(" ")-зайтай хэсгээр таслана.
// reverse-эсрэгээр
//  join- нийлүүлнэ.

// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”

function alpha(str) {
  return str.split("").sort().join(""); // sort-цагаантолгойн дараалалд оруулна.
}
console.log(alpha("javascript"));
// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3

function incrementOrDecrement(number) {
  if (number % 2 == 0) {
    return number + 1;
  } else {
    return number - 1;
  }
}
console.log(incrementOrDecrement(6));

// Exercise 1

// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.

// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%

// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(number, str) {
  if (str == "good") {
    number = (number * 20) / 100;
    return number, str;
  } else if (str == "fair") {
    number = (number * 15) / 100;
    return number, str;
  } else str == "poor";
  number = (number * 10) / 100;
  return number;
}
console.log(tipAmount(1000, "good"));

// Exercise 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally

// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount(str) {
  if (str == "good") {
    return "tipAmount(100,good)-->120";
  } else if (str == "fair") {
    return "tipAmount(40,fair)-->46";
  } else str == "poor";
  return "tipAmount(10,poor)-->11";
}
console.log(totalAmount("good"));

// Exercise 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.

// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount(str) {
  let huniiToo = 5;
  let Amount = 100;
  let Number = 0;

  if (str == "good") {
    Number = ((Amount * 20) / 100 + Amount) / huniiToo;
    return str;
    //}
    //else if (str== "fair"){
    // return (splitAmount,'fair',huniiToo-->46/huniiToo)
    //}
    //else (str== "poor")
    // return (splitAmount,'poor',huniiToo-->11/huniiToo)
  }
}
console.log(splitAmount(100, "good", 5));

//return (Amount,str,huniiToo,Number)

// Exercise 4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

function isVowel(str) {
  str.toLowerCase;
  if ((str = "a" || "e" || "u" || "o"));
  return true;
  false;
}
console.log(isVowel("a"));

// Exercise 5

// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

// Exercise 6

// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinWhile(start, end) {
  let result = "";
  while (start <= end) {
    result += start; //result=result +1;
    console.log("result first ", result);
    result += "_"; //result+_  10_
    start++;

    console.log("result ", result);
    console.log("start ", start);
  }
  return result;
}
console.log(numberJoinWhile(10, 15));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

// Exercise 7

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

// Exercise 8

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

// Exercise 9

// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?

//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

//Exercise

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//Exercise

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

//Exercise

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

//Exercise

// write a JavaScript function that checks if the string is palindrome or not.

// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.

// Input: s = "dad"
// Output: true
// Example 2:

// Input: s = "civic"
// Output: true

// Input: s = "race"
// Output: false

//Array exercises 1
// 1) Make an array of numbers that are doubles of the first array
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function doubleNumbers(arr) {
  //arr-йиг 2-оор үржих
  let newArray = []; //arr- зааж өгч байна.
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2); //newArray.push  -утгыг шинэ arr-d өгч байна.
  }
  return newArray; //newArray-ийг хэвлэх
}
console.log(doubleNumbers([2, 5, 100]));

// Take an array of numbers and make them strings
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function stringItUp(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].toString());
  }
  return newArray;
}

console.log(stringItUp([2, 5, 100]));

// 3) Capitalize each of an array of names
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function capitalizeNames(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);                                                                //console.log(arr[i]);  arr-ийн элементүүдийг жагсаана.

    newArray.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()); //arr[i].slice(1).toLowerCase()   -slice(1) үлдсэн элементүүдээ нэмж байна.

    //arr[i][0].toUpperCase(); //console.log(arr[i][0]);
    //arr[i][1].toLowerCase(); //console.log(arr[i].slice(1));
  }
  return newArray;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

// 4) Make an array of strings of the names
//function namesOnly(arr) {
// your code here
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function namesOnly(arr) {
  let names = [];
  for (let i = 0; i < arr.length; i++) {
    names.push(arr[i].name); // names-рүү утгыг хийж байна. Array i-ийн name-ийг.
  }
  return names;
}

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"];

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr) {
  // your code here
}

// console.log(makeStrings([

//     {

//         name: "Angelina Jolie",

//         age: 80

//     },

//     {

//         name: "Eric Jones",

//         age: 2

//     },

//     {

//         name: "Paris Hilton",

//         age: 5

//     },

//     {

//         name: "Kayne West",

//         age: 16

//     },

//     {

//         name: "Bob Ziroll",

//         age: 100

//     }

// ]));

function makeStrings(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age >= 18) {
      newArray.push(`${arr[i].name} can go to The Matrix`);
    } else {
      newArray.push(`${arr[i].name} is under age`);
    }
  } // name +is underAge
  //`${i} canGo`

  return newArray;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",

      age: 80,
    },

    {
      name: "Eric Jones",

      age: 2,
    },

    {
      name: "Paris Hilton",

      age: 5,
    },

    {
      name: "Kayne West",

      age: 16,
    },

    {
      name: "Bob Ziroll",

      age: 100,
    },
  ])
);

// ["Angelina Jolie can go to The Matrix",

// "Eric Jones is under age!!",

// "Paris Hilton is under age!!",

// "Kayne West is under age!!",

// "Bob Ziroll can go to The Matrix"]

/*

Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

 

Examples:

    doubleValues([1,2,3]) // [2,4,6]

    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

 

*/

function doubleValues(arr) {
  let dd = [];
  for (let i = 0; i < arr.length; i++) {
    dd.push(arr[i] * 2);
  }
  return dd;
}

console.log(doubleValues([1, 2, 3]));

//Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

//Examples:

//onlyEvenValues([1,2,3]) // [2]

//onlyEvenValues([5,1,2,3,10]) // [2,10]

function evenOddValue(arr) {
  let dd = [];
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      dd.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return { even: dd, odd: odd };
}

console.log(evenOddValue([1, 2, 3]));

// numbers.pop();

// console.log(`Popped array ${numbers}`);

// function Toontsuvaa(arr) {
//     arr.pop();                                                 // arr.pop(); -suuliin toog arilgana
//     let numbers = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 == 0) {
//         numbers.push(arr[i]);
//       }
//     } return numbers
//   }

//   console.log(Toontsuvaa([1, 2, 3, 4, 5, 6]));

// console.log(filteredNumbers);

const scores = [10, 30, 60, 100, 86]; //1. Massive ugsun.

function scoreFilter(value) {
  //2.score Filter value-aar tootsohoor beldsen
  return value > 80;
}
let newFilteredArray = scores.filter(scoreFilter); // 3.Shine hooson massive zarlana.
console.log(newFilteredArray); // 4.Ur dung harah

//console.log(`Initial array ${numbers}`);

function Toontsuvaa(arr) {
  //   arr.shift(); //arr.pop(); -suuliin toog arilgana
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      numbers.push(arr[i]);
    }
  }

  numbers.shift(); //-ehnii toog arilgana
  return numbers;
  return arr;
}

console.log(Toontsuvaa([1, 2, 3, 4, 5, 6]));

// console.log(`Pushed array ${numbers}`);

// numbers.shift();

// console.log(`shifted array ${numbers}`);

// numbers.unshift(1234123);

// console.log(`Unshifted array ${numbers}`);

// const string = "string";

// console.log(string.split(""));

// const arrayOfStings = string.split("");

const originalFlavors = [
  "Banana Nut Fudge",

  "Black Walnut",

  "Burgundy Cherry",

  "Butterscotch Ribbon",

  "Cherry Macaron",

  "Chocolate",

  "Chocolate Almond",

  "Chocolate Chip",

  "Chocolate Fudge",

  "Chocolate Mint",

  "Chocolate Ribbon",

  "Coffee",

  "Coffee Candy",

  "Date Nut",

  "Eggnog",

  "French Vanilla",

  "Green Mint Stick",

  "Lemon Crisp",

  "Lemon Custard",

  "Lemon Sherbet",

  "Maple Nut",

  "Orange Sherbet",

  "Peach",

  "Peppermint Fudge Ribbon",

  "Peppermint Stick",

  "Pineapple Sherbet",

  "Raspberry Sherbet",

  "Rocky Road",

  "Strawberry",

  "Vanilla",

  "Vanilla Burnt Almond",
];

//console.log(originalFlavors.length==31);

//  Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

// (1) an array

// Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

function checkValuesNumbar(data) {
  if (data.length == 31) {
    return true;
  } else {
    return false;
  }
}

console.log(checkValuesNumbar(originalFlavors));

/*
 

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.

done!

i.e. is31Flavors(originalFlavors) will return TRUE.*/

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.

 

Your function should accept:

 

(1) an array

(2) a flavor

 

 

 

Your function should add the flavor to the front of the array and console.log the resulting array.

 

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */
//.pop()                 tugsguliig hasna
//.push()
//.shift()
//.unshift()           hamgiin ehend oruulah

function addFlavor(array, flavor) {
  //addFlavor-үүсгэсэн функц,(array-функц дотор ажиллах хувьысагачид)
  array.unshift(flavor); // Массивын эхэнд оруулна
  return array; // Массиваа харна.
}
console.log(addFlavor(originalFlavors, "Rainbow Sherbert")); //console.log(Massive,Хаана оруулаа вэ,Юуг оруулах вэ)

// Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.

function checkValuesNumbar(data) {
  if (data.length == 31) {
    return true;
  } else {
    return `Houston, we have a problem! There are now ${data.length} flavors in the array! Your task is to remove an item from the end of the array.`;
  }
}

console.log(checkValuesNumbar(originalFlavors));

//Your function should accept:

//(1) an array

//Your function should remove a flavor from the end of the array and console.log the resulting array.
//For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

function rmvFlavor(array) {
  array.pop();
  return array;
}
console.log(rmvFlavor(originalFlavors));

/* Task 4: Write a function that returns a flavor at a given index in the array.

 

Your function should accept:

 

(1) an array

(2) an index

 

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(array, index) {
  //addFlavor-үүсгэсэн функц,(array-функц дотор ажиллах хувьысагачид)
  return array[index - 1]; // Массиваа индекс нэгээс эхэлнэ.
}
console.log(getFlavorByIndex(originalFlavors, 1)); //console.log(Massive,Хаана оруулаа вэ,Юуг оруулах вэ)

//Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array.

//Your function should accept:

//(1) an array

//(2) a string (flavor)

//For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla.

//Hint: You can use .splice() for this

function removeFlavorByName(array, name) {
  let index = array.indexOf(name); //Массив дотрох Нэрний индексийг авч байна.

  array.splice(index, 1); //                               1 baigaa shaltgaan uy ve?

  return array;
}

console.log(removeFlavorByName(originalFlavors, "Vanilla"));
console.log(originalFlavors);

//Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array.
//.reduce()     ->.reduce((total,value)=>{uildel})
//.filter()     ->.filter((value)=>{condition})
//.map()        ->.map(()=>{})
function getOriginalFlavorByIndex(data) {
  //Шинэ функц зарлаж байна
  const newArray = [];
  data.map((el) => {
    newArray.push(el);
  }); //el=data[i]   элемент гэдэг нь датагийн индекс юм. {newArray.push(el)}-Шинэ  -д элементүүдийг өглөө.
  return newArray;
}
console.log(getOriginalFlavorByIndex(originalFlavors)); //console.log(Massive,Хаана оруулаа вэ,Юуг оруулах вэ)
console.log(removeFlavorByName(originalFlavors, "Vanilla"));

///Your function should accept:

//2 arguments 1 for your new array and one for your original array

//Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

function filterByWord(array, word) {
  //Шинэ функц зарлаж байна

  let newValue = array.filter((index) => index.includes(word)); //   let newValue -өөрчилсщщөн утгыг агуулах массив.
  return newValue;
}
console.log(filterByWord(originalFlavors, "Lemon")); //console.log(Massive,Хаана оруулаа вэ,Юуг оруулах вэ)

/*Your function should accept:

 

(1) an Array

(2) a string (i.e. "chocolate")

 

and return a new array.

 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

 

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

 

hint - you can use the .includes method to help you solve this */

function filterByWord(array, word) {
  const filteredArray = [];

  array.forEach(function (flavor) {
    if (flavor.includes(word)) {
      console.log(flavor);
    }
  });

  return filteredArray;
}

console.log(filterByWord(originalFlavors, "chocolate"));

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

 

Your function should accept:

 

(1) an array

 

and should return the average number of words per item in the array.

 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */
const originalFlavorss = [
  "Banana Nut Fudge",

  "Black Walnut",

  "Burgundy Cherry",

  "Butterscotch Ribbon",

  "Cherry Macaron",

  "Chocolate",

  "Chocolate Almond",

  "Chocolate Chip",

  "Chocolate Fudge",

  "Chocolate Mint",

  "Chocolate Ribbon",

  "Coffee",

  "Coffee Candy",

  "Date Nut",

  "Eggnog",

  "French Vanilla",

  "Green Mint Stick",

  "Lemon Crisp",

  "Lemon Custard",

  "Lemon Sherbet",

  "Maple Nut",

  "Orange Sherbet",

  "Peach",

  "Peppermint Fudge Ribbon",

  "Peppermint Stick",

  "Pineapple Sherbet",

  "Raspberry Sherbet",

  "Rocky Road",

  "Strawberry",

  "Vanilla",

  "Vanilla Burnt Almond",
];
//function getAverageWordLength(array) {
// let wordlenghth =0;

let allWordlength = originalFlavorss.reduce((sum, value) => {             // value-массив дотрох үгийн урт?
  // console.log(value.length)
  return (sum += value.trim().length);}, 0);                                  //sum +=  sum=sum+1, trim().-хоосон зайн авч хаяна.
   

console.log(Math.floor(allWordlength / originalFlavorss.length));
