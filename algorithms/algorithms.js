/*
  Algorithms:
    1) FizzBuzz
    2) String reversal (reverseString1, reverseString2,reverseString3)
    3) Integer reversal
    4) Palindrome 
    5) Max Char
    6) Anagrams
    7) Capitalize string's words
    8) Array Chunks
    9) Vowels
   10) Printing Steps
   11) Printing Pyramid
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


/* ------------------------------- 5
  Given a string return the character that is most commonly used in the string
*/
// return first commonly used character in the string
function maxChar(str) {
  const charList = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (!charList[char]) {
      charList[char] = 1;
    } else {
      charList[char]++;
    }
  }

  for (let char in charList) {
    if (charList[char] > max) {
      max = charList[char];
      maxChar = char;
    }
  }

  console.log('Character \'' + maxChar + '\' used ' + max + ' times');
}

// return all commonly used characters from in the string
function maxCharAll(str) {
  const charList = {};
  let max = 0;
  let maxCharArray = [];

  for (let char of str) {
    if (!charList[char]) {
      charList[char] = 1;
    } else {
      charList[char]++;
    }

    if (charList[char] > max) {
      max = charList[char];
    }
  }

  for (let char in charList) {
    if (charList[char] == max) {
      maxCharArray.push(char);
    }
  }

  console.log(maxCharArray)
}

/* ------------------------------- 6
  Check if two strings are anagrams of each other.
  One string is an anagram of another if it uses same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case letters.
*/
function createCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char]++ || 1;
  }
  return charMap;
}

function anagrams(str1, str2) {
  const charMap1 = createCharMap(str1);
  const charMap2 = createCharMap(str2);

  if (Object.keys(charMap1).length !== Object.keys(charMap2).length) {
    return false;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char])
      return false;
  }

  return true;
}

// anagrams using javascript functions
function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams2(str1, str2) {
  return cleanString(str1) === cleanString(str2);
}


/* ------------------------------- 7
  Capitalize each letter of each word in the string then return the capitalized string.
  */
function capitalize(str) {
  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

function capitalize2(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}


/* ------------------------------- 8
  Given an array and a chunk size, divide the array into many sub-arrays, where each sub-array is of length size.
*/

function chunk(array, size) {
  const newArray = [];
  let index = 0;
  while (index < array.length) {
    newArray.push(array.slice(index, index + size))
    index += size;
  }
  return newArray;
}

/* ------------------------------- 9
  Return the number of vowels used in a string
*/
function vowels(str) {
  const vowelsList = 'aeiou';
  // const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;
  for (let char of str) {
    if (vowelsList.includes(char)) {
      counter++;
    }
  }
  return counter;
}

// with regular expression
function vowels2(str) {
  const matchArray = str.match(/[aeiou]/gi);
  return matchArray ? matchArray.length : 0;
}

/* ------------------------------- 10
  Write a function that accepts a positive number N.
  The function should print a step shape with N levels using the # character. The step must have spaces(or some chracter) on the right hand side!
*/
function printSteps(n) {
  const stepChar = '#';
  const fillChar = '.';

  for (let row = 0; row < n; row++) {
    let line = '';
    for (let column = 0; column < n; column++) {
      if (row >= column) {
        line += stepChar;
      } else {
        line += fillChar;
      }

    }
    console.log(line);
  }
}

// recursive solution
function printStepsRecursive(n, row = 0, line = '') {
  const stepChar = '#';
  const fillChar = '.';

  if (row === n)
    return;

  if (line.length === n) {
    console.log(line);
    return printStepsRecursive(n, row + 1);
  }

  if (line.length <= row) {
    line += stepChar;
  } else {
    line += fillChar;
  }

  printStepsRecursive(n, row, line);
}

/* ------------------------------- 11
  Write a function that accepts a positive number N.
  The function should print a pyramid shape with N levels using the # character. The level must have spaces(or some chracter) on the both sides!
*/
function printPyramid(n) {
  const stepChar = '#';
  const fillChar = '.';
  const midIndex = n - 1;

  for (let row = 0; row < n; row++) {
    let line = '';

    for (let column = 0; column < (n * 2 - 1); column++) {
      if (midIndex - row <= column && midIndex + row >= column) {
        line += stepChar;
      } else {
        line += fillChar;
      }
    }

    console.log(line);
  }
}

// recursive solution
function printPyramidRecursive(n, row = 0, line = '') {
  const stepChar = '#';
  const fillChar = '.';

  if (row === n) {
    return;
  }

  if (line.length === 2 * n - 1) {
    console.log(line);
    return printPyramidRecursive(n, row + 1);
  }

  const midIndex = n - 1;
  let char;
  if (midIndex - row <= line.length && midIndex + row >= line.length) {
    char = stepChar;
  } else {
    char = fillChar;
  }

  printPyramidRecursive(n, row, line + char);
}