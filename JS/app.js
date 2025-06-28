// (Variable Assignments.)........................01

// 1. Declare variables using let, var, and const to store a name, age, and favorite color. 
// var fulltName = "Sameer Ali";
// let Age = 19;
// const Color = "green";
// console.log("Info.", "Name:- ", fullName, "Age:- ", Age, "Color:- ", Color);

// 2. Create variables inside and outside a block ({}) using let and const.
// let n = 10;
// let m = 20;
// {
//   let outside = "Hello";
//   const inside = 2025;
//   console.log(outside);
//   console.log(inside);
// }

// console.log(n);
// console.log(m);

// 3. Follow JavaScript naming conventions to create variables for a username, email address, and password. 
// let userName = "SameerAli_01";
// let userEmail = "sameerali01s01@gmail.com";
// let useraddress = "saifni";
// const userPassword = "0099sameer";
// console.log(userName);
// console.log(userPssword);
// console.log(userAddress);
// console.log(userPassword);

// 4. Use let to declare a variable inside a block ({}) and try accessing it outside. Explain the result.
// {
//   let inside = "block";
// }
// console.log(inside); result inside not defind

// 5. Declare a constant variable for the value of Pi (π). Attempt to reassign a new value to it and write the error.
// const PI = 3.14;
 //   PI = 3.15;  error
// console.log(PI);
      
// 6. Create a global variable named count and a local variable with the same name inside a block ({}). Output both values to observe variable . 
// let count = 20;
// console.log("Global count block:", count);
// {
//    Local variable 
//   let count = 10; 
//   console.log("Local count block:", count);
// }
// console.log("Global count block:", count);

// 7. Declare a variable with let for a number. Then assign it a string value and console. 
// let num = 20;
//     num = string = "String";
// console.log("name is: ", string);

// 8. Try creating variables with names that start with numbers or contain special characters. Discuss why some names are invalid.
// let 01name = "Sahil";
// console.log(01name); invalid

// 9. Declare variables with let and const in different scopes (e.g., global scope, block scope). Discuss their visibility and scope.
// let globalLet = "global let variable.";
// const globalConst = "global const variable.";
// console.log(global);
// console.log(globalConst); 

// 10. Declare a variable without assigning a value.
// let a;

// 11. Create variables for a first name, last name, and age. Apply camelCase naming convention . 
// let firstName = "Faizan";
// let lastName = "Ali";
// let age = 20;
// console.log(firstName1, lastName, age);

// (Datatypes  assignment).........................02

// Qs. 1. What are the two main categories of data types in JavaScript? 
// 1. Primitive Data Types:
// 2. Non-Primitive (or Reference) Data Types:

// Qs. 2. What is a primitive data type? List all the primitive data types in JavaScript. 
// Primitive Data Types:
// => number
// => bigint
// => Boolean
// => string
// => Symbol
// => null
// => undefined

// Qs. 3. What is the difference between `null` and `undefined` in JavaScript? 
// let x = null;
// null is a diffind but not value null
// undefined is a varible note diffind 

// Qs. 4. How do you check the type of a variable in JavaScript?** 
//let a = 10;
//console.log(typeof(a)); //check a data type number

// Qs. 5. What will the following code output? 
//console.log(typeof 42);  //number
//console.log(typeof 'Hello'); //string
//console.log(typeof true); //Boolean
//console.log(typeof { name: 'John' }); //Object
//console.log(typeof [1, 2, 3]); //Object

// 6. What data type is returned by the expression `3 + '3'`?
// let a = 3;
// let b = "3";
// let c = a + b;
// console.log(c);
// console.log(typeof(c));

// Qs. 7. What will be the result of the following code? 
//let num = 10; 
//let str = '10'; 
//console.log(num == str); //true
//console.log(num === str); //false

// Qs. 8. Explain the difference between `==` and `===` in JavaScript. 
//let num = 10; 
//let str = '10'; 
//console.log(num == str); //true 
//console.log(num === str); //false stricequal type

// Qs. 9. What data type is used to represent a sequence of characters in JavaScript? 
// let Name = "sameer";
// let Age = 20;
// let info =`My name is: ${Name} My age is: ${Age}`;
// console.log(info);

// Qs. 10. What will be the output of the following code? 
//let obj = { a: 1, b: 2 }; 
//console.log(typeof obj); //object
//console.log(typeof obj.a); //number

// Qs. 11.What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype: 
//let a = 42; //number
//let b = "JavaScript"; //string
//let c = false; //boolean
//let d = undefined; //undefined
//let e = null; //object
//let f = { key: "value" }; //Object
//let g = [1, 2, 3]; //Object
//console.log(typeof(a));
//console.log(typeof(b));
//console.log(typeof(c));
//console.log(typeof(d));
//console.log(typeof(e));
//console.log(typeof(f));
//console.log(typeof(g));

// Qs. 12.What is the datatype of the following values? 
//console.log(typeof "Hello World"); //string
//console.log(typeof 12345); //number
//console.log(typeof true); //Boolean
//console.log(typeof { foo: "bar" }); //object
//console.log(typeof [1, 2, 3]); //Object
//console.log(typeof function() {}); //function
//console.log(typeof undefined); //undefined

// Qs. 13.What will be the result of the following code? 
//let x = 10; 
//let y = "10"; 
//console.log(typeof x); // type of number
//console.log(typeof y); // type of string

// Qs. 14.Determine the datatype of the result of these expressions: 
//console.log(typeof (10 + 20)); //number
//console.log(typeof (10 - "2")); //string
//console.log(typeof ("5" * 3)); //string
//console.log(typeof ("hello" / 2)); //string 

// (Operators assignment).........................03 

// 1. Assign `a = 10` and `b = 5`. Log the result of `a + b` to the console. 
// let a = 10; 
// let b = 5; 
// console.log(a + b); 
// output => 15

// 2. Assign `a = 20` and `b = 8`. Log the result of `a - b` to the console. 
// let a = 20; 
// let b = 8; 
// console.log(a - b); 
// output => 16

// 3. Assign `a = 4` and `b = 7`. Log the result of `a * b` to the console. 
// let a = 4; 
// let b = 7; 
// console.log(a * b); 
// output => 28

// 4. Assign `a = 16` and `b = 4`. Log the result of `a / b` to the console.
// let a = 16; 
// let b = 4; 
// console.log(a / b);
// output => 4 

// 5. Assign `a = 13` and `b = 4`. Log the result of `a % b` to the console. 
// let a = 13; 
// let b = 4; 
// console.log(a % b); 
// output => 1

// 6. Assign `num = 10`. Use `num += 7`, `num -= 3`, `num *= 2`, and `num /= 5`, logging the value of `num` after each operation.
// let num12 = 10; 
// num12 += 7; 
// console.log(num12); //17
// num12 -= 3; 
// console.log(num12); //14
// num12 *= 2; 
// console.log(num12); //28
// num12 /= 5; 
// console.log(num12); //5
// output => 5

// 7. Assign `a = 10` and `b = 10`. Log `a == b` to the console. 
// let a = 10; 
// let b = 10; 
// console.log(a == b); 
// output => true

// 8. Assign `a = 10` and `b = '10'`. Log `a === b` to the console. 
// let an = 10; 
// let bn = '10'; 
// console.log(an === bn); 
// output => false


// 9. Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`.     let 
// a = 15; 
// let b = 20; 
// if (a > b) { 
// console.log('greater than'); 
// } else if (a < b) { 
// console.log('less than'); 
// } else { 
// console.log('equal to'); 
// } 
 // output => less than

// 10. Assign `x = true` and `y = false`. Log the result of `x && y` and `x || y` to the console. 
// let x = true; 
// let y = false; 
// console.log(x && y); 
// console.log(x || y); 
// output => && false || true

// 11. Assign `x = false`. Log the result of `!x` to the console. 
// let x = false; 
// console.log(!x);
// output => false 

// 12. Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'` otherwise. 
//let age = 20; 
//console.log(age >= 18 ? 'Adult' : 'Minor'); 
// output => Adult

// 13. Assign `value = 100`. Log the result of `typeof value` to the console. 
// let value = 100; 
// console.log(typeof value); 
// output => number

// 14. Assign `value = '5'`. Log the result of `+value` to the console. 
// let value = '5'; 
// console.log(+value); 
// output => 5

// 15. Assign `value = 7`. Log the results of `++value`, `value++`, `--value`, and `value--` to the  console. 
// let value = 7; 
// console.log(++value); // Pre-increment 
// console.log(value++); // Post-increment 
// console.log(--value); // Pre-decrement 
// console.log(value--); // Post-decrement

// 1. Arithmetic Operators 
//    1. Addition: Create two variables,  a  and  b  , and assign them numeric  values. Use the  + operator to find their sum and log the result. 
//    let a = 10;
//    let b = 20;
//    console.log(a + b);
//    output => 30
   
//    2.  Subtraction: Create two variables,  a  and  b  , and assign them numeric  values. Use the  - operator to find the difference between  a  and  b  and  log the result.
//    let a = 10;
//    let b = 20;
//    console.log(a - b);
//    output => -10 
   
//    3.  Multiplication: Create two variables,  a  and  b  , and assign them numeric  values. Use the  * operator to find their product and log the result. 
//    let a = 10;
//    let b = 20;
//    console.log(a * b);
//    output => 200 
   
//    4.  Division: Create two variables,  a  and  b  , and assign them numeric  values. Use the  / operator to divide  a  by  b  and log the result. Handle  division by zero by checking if b  is zero before dividing. 
//    let a = 10;
//    let b = 20;
//    console.log(a / b);
//    output => 2 
   
//    5.  Modulus: Create two variables,  a  and  b  , and assign them numeric  values. Use the  % operator to find the remainder of  a  divided by  b  and  log the result. 
//    let a = 10;
//    let b = 20;
//    console.log(a % b);
//    output => 0

// 2. Assignment Operators 
//    6.  Basic Assignment: Create a variable  num  and assign it the value  10  .  Use the  +=  operator to add  5  to num  ,  -=  to subtract  3  ,  *=  to multiply by  2  , and  /=  to divide by  4  . Log the final value of  num  after each operation.
//    let num = 10;
//        num += 5; 
//    console.log(num); //15
   
//        num -= 3; 
//    console.log(num); //12
   
//        num *= 2; 
//    console.log(num); //120
   
//        num /= 4; 
//    console.log(num); //30
//    output aftel value 30


// 3. Comparison Operators 
//    7.  Equal to: 
//    Create two variables,  a  and  b  , and assign them values.  Use the  ==  operator to check if  a  is equal to  b  and log the result. 
//    let a = 4;
//    let b = 10;
//    console.log(a == b);
//    output false
   
//    8.  Strict Equality: 
//    Create two variables,  a  and  b  , and assign them values  of different types. Use the ===  operator to check if  a  is strictly equal to  b  (both value and type) and log the  result. 
//    let a = "10";
//    let b = "10";
//    console.log(a === b);
//    output false
   
//    9.  Greater than and Less than: 
//     Create two variables,  a  and  b  , and assign them values.  Use the  >  and  < operators to compare  a  and  b  . Log whether  a  is greater  than, less than, or equal to  b  . 
//    let am = 4;
//    let bm = 10;
//    console.log(am >= bm);
//    output false
   
//    let ak = 4;
//    let bk = 10;
//    console.log(a <= b);
//    output true

// 4. Logical Operators 
//    10.  Logical AND/OR: 
//    Create two boolean variables,  x  and  y  . Use the  &&  operator to combine  x  and  y  , and the  ||  operator to combine  x  and  y  . Log the results  of both operations.
//    let x = true;
//    let y = false;
//    console.log(x && y); // false
//    console.log(x || x); // true
   
//    11.  Logical NOT: 
//    Create a boolean variable  x  . Use the  !  operator to  negate  x  and log the result. 
//    let xe = true;
//    console.log(!xe); // false

// 5. Type Operators 
//    12.  Typeof: 
//    Create a variable  value  and assign it a value of different  types. Use the  typeof operator to log the type of  value  . 
//    let a = 10;
//        a = "sameer";
//    console.log(typeof(a));
   
//    13  .Increment and Decrement: 
//    Create a variable  value  and assign it a numeric value.  Use the pre-increment 
//    (  ++value  ), post-increment (  value++  ), pre-decrement  (  --value  ), and 
//    post-decrement (  value--  ) operators. Log the value  of  value  before and after 
//    each operation.
//let a = 4;
//    a = ++a;
//    console.log(a); // 5
//a = a++;
//console.log(a); // 5
//    a = --a;
//    console.log(a); // 4
//a = a--;
//console.log(a); // 4

// Bitwise Operators 
// (AND)
// let a = 5;
// let b = 1;
// console.log(a & b); // output 1

// (OR)
// let a = 5;
// let b = 1;
// console.log(a | b); // output 5

// (XOR)
// let a = 5;
// let b = 1;
// console.log(a ^ b); // output 4
 
// (NOTE)
// let a = 5;
// console.log(~ a); // output -6

// let a = 5;
// console.log(a<<1); // output 10

// let a = 5;
// console.log(a>>1); // output 2

// let a = 5;
// console.log(a>>>1); // output 2