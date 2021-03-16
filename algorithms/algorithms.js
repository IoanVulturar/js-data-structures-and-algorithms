/*
  Algorithms:
    1) FizzBuzz
    2) String reversal (reverseString1, reverseString2,reverseString3)
    3) Integer reversal
    4) Palindrome 
*/


/* ------------------------------- 1
  Write a program that prints the numbers from 1 to n, but for multiples of three print "fizz" instead of the number and for multiple of five print "buzz". For numbers which are multiples of both three and five print "fizzbuzz".
*/

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0)
      console.log("fizzbuzz");
    else if (i % 3 == 0)
      console.log("fizz");
    else if (i % 5 == 0)
      console.log("buzz");
    else
      console.log(i);
  }
}


/* ------------------------------- 2
  Given a string, return a new string with the reversed order of characters
*/

// Reverse string - without using JavaScript functions
function reverseString1(str) {
  let reverseString = '';
  for (let char of str) {
    reverseString = char + reverseString;
  }
  return reverseString;
}

// Reverse string - using JavaScript string and array functions
function reverseString2(str) {
  return str.split('').reverse().join('');
}

// Reverse string - using reduce() function
function reverseString3(str) {
  return str.split('').reduce((reverseString, char) => char + reverseString, '');
}


/* ------------------------------- 3
  Given an integer, return an integer that is the reverse ordering of numbers
  reverseInt(128) -> 821
  reverseInt(-32) -> -23
*/

function reverseInt(num) {
  const reverseNum = num.toString().split('').reverse().join('');
  return parseInt(reverseNum) * Math.sign(num);
}


/* ------------------------------- 4
  Given a string, return true if the string is a palindrome or false if it is not.
  Palindromes are strings that forme the same word if it is reversed.
*/

// Palindrome - without using JavaScript functions
function palindrome1(str) {
  let start = 0;
  let end = str.length - 1;
  let isPalindrome = true;

  while (isPalindrome && start <= end) {
    if (str[start] !== str[end])
      isPalindrome = false;
    start++;
    end--;
  }

  return isPalindrome;
}

// Palindrome - using JavaScript string and array functions
function palindrome2(str) {
  const reversedStr = str.split('').reverse().join('');
  return reversedStr === str;
}

// Palindrome - using every() function
// every() checks all the characters -> it is not optimal
function palindrome3(str) {
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
}
