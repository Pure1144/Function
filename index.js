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
    let counter =0;
    for (let i=0; i < Str.length;i++){
        if (Str.charAt(i) ===" "){
            counter++;
        }
    }
    if (counter === Str.length){
        return true;
    }
     else{
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

// Exercise 7

// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

// Exercise 8

// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

// Exercise 9

// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false

// Exercise 10

// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"

// Exercise 11

// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”

// Exercise 12

// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”

// Exercise 13

// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3

//console.log("functions2");

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

// Exercise 2

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally

// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

// Exercise 3

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.

// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

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
