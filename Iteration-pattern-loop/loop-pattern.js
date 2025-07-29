// 1.Print numbers from 1 to 10 using a  for  loop.
// let num = 10;

// for(let i = 1; i <= num; i++){
//     console.log(i);
// }

// 2.Print numbers from 1 to 10 using a  while  loop.
// let i = 1;

// while(i <= 10) {
//    console.log(i);
//    i++;

// }

// 3.Print numbers from 1 to 10 using a  do...while  loop.
// let i = 1;
// let num = 10;

// do{
//     console.log(i);
//     i++;
// }while(i <= 10);

// 4.Print numbers from 10 to 1 in reverse order using a loop.
// let num = 1;

// for(i = 10; i >= num; i--){
//     console.log(i);
// }

// 5.Print all even numbers from 1 to 20.
// let num = 20;

// for(i = 1; i <= num; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 6.Print all odd numbers from 1 to 20.
// let num = 20;

// for(i = 1; i <= num; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 7.Print all numbers from 1 to 50 that are divisible by 3.
// let num = 50;

// for(i = 1; i <= num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// 8.Print all numbers from 1 to 50 that are divisible by 5.
// let num = 50;

// for(i = 1; i <= num; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// 9.Print all numbers from 1 to 50 that are divisible by both 3 and 5.
// let num = 50;

// for(i = 1; i <= num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

// 10.Print the multiplication table of 5 up to 10.
// let num = 50;
// for(i = 5; i <= num; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }

// 11.Print the multiplication table of any number (e.g., 7) up to 10.
// let num = 70;
// for(i = 7; i <= num; i++){
//     if(i % 7 === 0){
//         console.log(i);
//     }
// }

// 12.Calculate the sum of numbers from 1 to 50 using a loop.
// let sum = 0;
// for(let i = 1; i <= 50; i++){
//     sum = sum + i;
// }
// console.log(sum);

// 13.Calculate the sum of even numbers from 1 to 100.
// let sum = 0;
// for(i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//      sum = sum + i;
//     }
// }
// console.log(sum);

// 14.Calculate the sum of odd numbers from 1 to 100.
// let sum = 0;
// for(i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         sum = sum + i
//     }
// }
// console.log(sum);

// 15.Print the square of numbers from 1 to 10.

// 16.Print the cube of numbers from 1 to 10.

// 17.Find the factorial of a given number (e.g., 5).

// 18.Count how many numbers between 1 and 100 are divisible by 7.

// 19.Print numbers from 1 to 20 and label them as "Even" or "Odd".

// 20.Print only numbers between 1 and 50 that are not divisible by 4.

// 21.Print the first 10 multiples of 3.

// 22.Calculate and print the sum of digits of a given number (e.g., 123 → 6).
// let num = 123;
// sum = 0;
// while(num > 0){
//     sum = sum + num% !0
//     num =Math.floor(num/10)
// }
// console.log(sum);

// 23.Reverse a given number (e.g., 1234 → 4321).

// 24.Count the number of digits in a given number.

// 25.Check whether a given number is a palindrome using a loop (e.g., 121 →
// palindrome).

// 26.Print this pattern using loops:
// *
// **
// ***
// ****
// *****
// let row = 5;
// let col = 5;

// for(i = 1; i <= row; i++){
//     let str = " ";
//     for(let j = 1; j <= i; j++)
//         {
//         str = str + "* ";
//     }
//     console.log(str);
// }

// 27.Print numbers from 1 to 10 and break the loop when the number is 6.
// let num = 10;
// for(i = 1; i <= num; i++){
//     if(i === 6){
//         console.log(i);
//         break;
//     }
// }

// 28.Print numbers from 1 to 10 and skip printing 5 using  continue.
// let num = 10;
// let i = 1;
// while(i <= num){
//     if(i === 5){
//         console.log(i);
//         break;
//     }
//     i++;
// }

// 29.Print numbers from 1 to 100 and stop when you find the first number divisible by 9.

// 30.Find the product of numbers from 1 to 10 using a loop.

// — Pattern—

// 1. Inverted Star Triangle
// *****
// ****
// ***
// **
// *
// for (let i = 1; i < 6; i++) {
//     let s = "";
//   for (let j = 5; j >= i; j--) {
//     s=s+"*";
//   }
//   console.log(s);

// }

// 2. Centered Inverted Pyramid
// *****
//  ***
//   *
// let n=3;

let rows = 3;

for (let i = 0; i < rows; i++) {
  let line = '';

  for (let space = 0; space < i; space++) {
    line += ' ';
  }

  for (let star = 0; star < 2 * (rows - i) - 1; star++) {
    line += '*';
  }

  console.log(line);
}

// 3. Continuous Number Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let num = 1;

// for (let i = 1; i < 5; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str = str + num;
//     num = num + 1;
//   }
//   console.log(str);
// }

// 4. Right-Aligned Triangle
// *
// **
// ***
// ****

// for(i = 1; i <= 4; i++){
//     let str = " ";
//     for(let j = 1; j <= i; j++)
//         {
//         str = str + " *";
//     }
//     console.log(str);
// }

// 5. Reverse Number Triangle
// let rows = 5;

// for (let i = rows; i >= 1; i--) {
//   let line = "";
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line.trim());
// }

// 6. Hollow Rectangle 
// * * * * * 
// *       * 
// *       *     
// * * * * * 

// let rows = 4;
// let cols = 5;

// for (let i = 0; i < rows; i++) {
//   let line = '';
//   for (let j = 0; j < cols; j++) {
//     if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
//       line += '* ';
//     } else {
//       line += '  ';
//     }
//   }
//   console.log(line);
// }


// 7. Full Pyramid
//    *
//   ***
//  *****
// *******

// let rows = 4; 

// for (let i = 1; i <= rows; i++) {
//   let star = "";
//   for (let j = 1; j <= rows - i; j++) {
//     star += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += "*";
//   }
  
//   console.log( star);
// }

