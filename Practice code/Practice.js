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

let foodItams1 = ["Mango", "Apple", "Orange", "Bannana"];
let name = ["Sameer", "Ankit", "Rahul", "Puneet"];
let foodItamsname = foodItams1.concat(name);
console.log(foodItamsname);










