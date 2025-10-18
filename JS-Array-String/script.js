// 1. Write a JavaScript program to get the character at index 2 from the string `"JavaScript"` using 
// the `charAt()` method. 

// let charStr = "JavaScript";
// charStr.charAt(2)
// console.log(charStr.charAt(2));

// 2. Write a program to concatenate the strings `"Hello"` and `"World"` using the `concat()` 
// method. 

// let concStr = "Hello";
// let concStr2 = "World";
// let myconcres = concStr.concat(concStr2)
// console.log(myconcres);

// 3. Using the string `"I love cats"`, write a program to replace `"cats"` with `"dogs"` using the 
// `replace()` method.

// let String = "I love cats";
// let mystring = String.replace(/cats/,"dogs")
// console.log(mystring);

// 4. Write a JavaScript function to split the string `"apple,banana,orange"` into an array of fruits 
// using the `split()` method.
/*
let splitString = ["apple,banana,orange"];

let mysplitString = splitString.split(1,2)

console.log(mysplitString);
*/

// 5. Using the string `"JavaScript"`, write a program to extract the substring `"Script"` starting from 
// index 4 using the `substr()` method. 
/*
let string = "JavaScript";
let mysubstring = 
string.substr()
*/

// 6. Write a program to extract the word `"Java"` from the string `"I am learning JavaScript"` using 
// the `substring()` method. 
/*
let extstring = "Java";
let myextStr = extstring.substring("I am learnig"(0,3),"Script")
console.log(myextStr);
*/

// 7. Write a JavaScript program to extract the word `"Frontend"` from the string `"Frontend 
// Developer"` using the `slice()` method. 


// 8. Write a program to convert the string `"HELLO WORLD"` to lowercase using the 
// `toLowerCase()` method. 

let lowerStr = "HELLO WORLD";

console.log(lowerStr.toLowerCase());

// 9. Write a JavaScript program to convert the string `"good morning"` to uppercase using the 
// `toUpperCase()` method. 

let upperStr = "good morning";
console.log(lowerStr.toUpperCase());


// 10. Write a JavaScript function that trims the whitespace from both ends of the string `"   Hello 
// World!   "` using the `trim()` method. 

let trStr = "    Hello World    "
let mytrstr = trStr.trim()
console.log(mytrstr);


// 11. Write a JavaScript function to check if the string `"JavaScript"` includes the substring 
// `"Script"` using the `includes()` method. 

let incStr = "JavaScript";
let myincStr = incStr.includes("Script")
console.log(myincStr);


// 12. Write a JavaScript function that searches for the first occurrence of the word `"world"` in the 
// string `"Hello world, welcome to JavaScript"` using the `search()` method. 

let searStr = "Hello world, welcome to JavaScript";
let mysearStr = searStr.search("World");
console.log(mysearStr);
