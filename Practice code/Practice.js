// Loop
// let n = 5
// for (let i = 1; i <= n; i++){
//     console.log("Hello World");
// }

// const num = 100;
// for(let i = 1 ; i <= num; i++){
//     console.log(i);
// }

// const nu = 0;
// for(let i = 5; i >= nu; i--){
//     console.log(i);
// }

// var evennum = 0;
// var oddnum = 0;
// let num = 100;

// for (i = 1; i <= num; i++){
//     if(i % 2 == 0){
//         let Count = 0;
//         console.log("even value is: ", i);
//         evennum++;
//     }else{
//         console.log("odd value is: ", i);
//         oddnum++;
//     }
// }

// console.log("all evan num is: ", evennum);
// console.log("all odd num is: ", oddnum);

// console.log("hello");

// even and odd number for loop
// for(let i = 0; i <= 100; i++){
//     if( i % 2 === 0){
//         console.log("even number is: ", i);
//     }else{
//         console.log("number is odd ", i);
//     }
// }

// let num = Number(prompt("Enter the number: "));
// let sum = 0;

// for(let i = 1; i <= num; i++){
//     sum  = sum + i;
    
// }
// console.log(sum);

// for (let i = 1; i <= 100; i++){
//     if(i == 50){
//         continue;
//     }
//      console.log(i);
// }

// for (let i = 1; i <= 100; i++){
//     if(i == 50){
//         break;
//     }
//      console.log(i);
// }

// while loop
// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while(userNum != gameNum){
//     userNum = prompt("You entred wrong number. Guss again")
// }
// console.log("You enter the right number = ", gameNum);

// string concepts
// let str1 = "String1";
// let str2 = "String2";
// let str3 = "String3";
// console.log("my string one is: ", str1, "my string two is:", str2, "my string third is:", str3);
// console.log(str1.length);
// console.log(str2[1]);

// // Template literals
// let obj = {
//     pan : "pan",
//     price : 10,
// };
// let output = `item name is ${obj.pan} price is ${obj.price}`;
// console.log(typeof output);

// console.log("This is a first line of code\nThis is sec line of code");
// console.log("new tab \t here");

// // string methods str.toUpperCase() str.toLowerCase() and str.trim() etc.
// let word1 = "Hello evryone";
// let word2 = "I am Sameer Ali"
// console.log(word1.toLowerCase()); // hello evryone
// console.log(word2.toUpperCase()); //I AM SAMEER ALI
// console.log(word1, word2);
 
// let word3 = "    I am Front-End      Developer   ";
// console.log(word3.trim()); // I am Front-End      Developer

// let word4 = "hey";
// console.log(word4.slice(0,2)); //he

// let word5 = "one";
// let word6 = "two";
// let result = word5 + word6;
// let result = word5.concat(word6)
// console.log(result); //onetwo

// let word7 = "hello";
// console.log(word7.replace("lo","p")); // help

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" + fullName + fullName. length;
// console.log(username);

// Array
// let name = ["Sameer", "Ankit", "Rahul", "Puneet"];
// console.log("student name: ", name);

// let age = [19, 20, 21, 20];
// console.log("student age: ", age);

// let student = ["Aman", "19",];
// console.log("sdudent info", student);
// console.log(student[0]="Sameer");
// console.log(student);`

// string =>> immutable > No chenging value
// Array =>> mutable > changing value

// looping over an array
// let heroes = ["ironman", "thor", "spiderman", "antman"];

// for(let i = 0; i < heroes.length; i++){
//     console.log("Array langth is: ", heroes[i]);
// }

// for(let hero of heroes){
//     console.log(hero);
// }

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for(let val of marks ){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);

// array methods
// let foodItams = ["Mango", "Apple", "Orange", "Bannana"];

// foodItams.push("chips", "burger")

// console.log(foodItams);

// let foodItams = ["Mango", "Apple", "Orange", "Bannana"];
// console.log(foodItams);
// console.log(foodItams.toString);

// let foodItams1 = ["Mango", "Apple", "Orange", "Bannana"];
// let name = ["Sameer", "Ankit", "Rahul", "Puneet"];
// let foodItamsname = foodItams1.concat(name);
// console.log(foodItamsname);

// let companies = ["Bloombreg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift()
// console.log(companies);
// companies.splice(2, 1, "ola")
// companies.push("Amazon")
// console.log(companies);

// Function in JavaScript
// Function definition > functionis is a block of code > function call

// function firstFunction(){
//     console.log("Hello I am developer");
// }
// firstFunction();
// firstFunction();
// firstFunction();
// firstFunction();

// function sum(a,b){
//     console.log(a, b);
// }
// sum(103 + 122);

// Arrow Function JavaScript
// const arrowFunction = (a, b) => {
//     console.log(a,b);
// };
// arrowFunction(12 + 2);

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//          if(char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" ||
//             char === "u")
//             {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("Sameer Ali")

// const countVowels = (str) =>{
//  let count = 0;
//     for(const char of str){
//          if(char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" ||
//             char === "u")
//             {
//             count++;
//         }
//     }
//     console.log(count);
// }

// countVowels("Sameer Ali")

// callback function
// let arr = [1, 3, 4, 1, 2];

// arr.forEach(function myfunction(value){
//     console.log(value);
// })

// let array = ["Ali", "Husain", "Hasan", "Umar", "Bilal"];
// array.forEach((val) =>{
//     console.log(val);
// });

// Array methods
// Map

// filter
// let arr = [12, 13, 12, 17, 15];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

// Reuce
// let arr = [1, 1, 5];
// const output = arr.reduce((res, val) => {
//     return res + val;
// })
// console.log(output); // 7

// DOM document Object modale
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let head = document.querySelector("h1");
// head.remove()

// let newBut = document.createElement("button");
// newBut.innerText = "Click me!";
// newBut.style.backgroundColor = "red";
// newBut.style.color = "white";
// document.querySelector("body").prepend(newBut);


// practice
// let row = 5;
// let col = 4;

// for(let i = 1; i <= row; i++){
//     let str = " ";
//     for(let j = 1; j <= col; j++)
//     {
//         str = str + "*  ";
//     }
//     console.log(str);
// }

// let rowouter = 5;
// let coliner = 4;

// for(let i = 1; i <= rowouter; i++){
//     let str = " ";
//     for(let j = 1; j <= i; j++)
//     {
//         str = str + "*  ";
//     }
//     console.log(str);
// }

// let m = 4;

// for(i = 1; i <= m; i++){
//     let str = " ";
//     for(j = 1; j <= m - i; j++){
//          str += " ";
//     }
//         for(let k = 1; k <= i; k++){
//         str += "*";
//     }
//     console.log(str);
// } 

let fact = 6;
// let n = fact;
for(i = 1; i <= 5; i++){
    // fact = fact * i
    fact *= i
}
console.log(`fact torial number is: ${fact}`); 

