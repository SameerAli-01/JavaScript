// 1.Print numbers from 1 to 10 using a  for  loop.
// let num = 10;

// for(i = 1; i <= num; i++){
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
// }while(i <= 10)

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
//     if(i % 3 === 0){
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

// 11.Print the multiplication table of any number (e.g., 7) up to 10.

// 12.Calculate the sum of numbers from 1 to 50 using a loop.

// 13.Calculate the sum of even numbers from 1 to 100.

// 14.Calculate the sum of odd numbers from 1 to 100.

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
// ***
// *

// for (let i = 1; i <=6; i++) {
//     let s = "";
//   for (let j = 1; j >= i-2; j--) {
//     s=s+"*";
//   }
//   console.log(s); 
  
// }

// 3. Continuous Number Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let num = 1;
// for (let i = 1; i < 5; i++) {
//   let s = "";
//   for (let j = 1; j <= i; j++) {
//     s = s + num;
//     num = num + 1;
//   }
//   console.log(s);
// }

// 4. Right-Aligned Triangle
// *
// **
// ***
// ****
// let row = 4;
// let col = 4;

// for(i = 1; i <= row; i++){
//     let str = " ";
//     for(let j = 1; j <= i; j++)
//         {
//         str = str + "* ";
//     }
//     console.log(str);
// }

// 5. Reverse Number Triangle
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// 6. Hollow Rectangle
// * * * * *
// *
// *
// *
// *
// * * * * *

// 7. Full Pyramid
// *
// ***
// *****
// *******
