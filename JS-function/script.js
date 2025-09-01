// 1.  Write a function to print  "Hello, World!". 
function helloWorld(){
    console.log("Hello, World");    
}
helloWorld()

// 2.  Write a function that takes a  name  as a parameter and prints  "Hello, [name]".
function parameterHello(name){
    console.log("Hello,", name);    
}
parameterHello("Sameer")

// 3.  Write a function that returns the  sum of two numbers.
function sum(){
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
}
console.log(sum());

// 4.  Write a function that returns the  product of two numbers.
function productNumber(val1, val2){
   return val1 * val2;
}
console.log(productNumber(10, 10));

// 5.  Write a function to  find the square  of a number. 
function findSquare(a){
    let square = a * a
    return square;
}
console.log(findSquare(2));

// 6.  Write a function to  find the cube  of a number. 

// 7.  Write a function that converts  Celsius to Fahrenheit.
function celsiusFahrenheit(celsius){
    let c = (celsius * 9/5) + 32; 
    return c;
}
console.log(celsiusFahrenheit(45));

// 8.  Write a function that converts  Fahrenheit to Celsius.
function fahrenheit(f2){
    let m = (f2 - 32) * 5/9
    return m;
}
console.log(fahrenheit(104));

// 9.  Write a function to calculate the  area of a rectangle.
function areaofRectangle(length , width){
    let area = length * width;
    return area;
}
console.log(areaofRectangle(4, 5));

// 10.  Write a function to calculate the  perimeter of a square.

// Functions with Conditions 

// 11.  Write a function to check if a number is  even or odd. 
function checkevenOdd(a){
    if(a % 2 !== 0){
        console.log("Odd Number");
    }
    else{
        console.log("Even Number");
    }
}
checkevenOdd(2)

// 12.  Write a function to check if a number is  positive, negative, or zero.
function checkNum(num){
    if(num > 0){
        console.log("you enter positive number: ");
    }
    else if (num < 0) {
        console.log("you enter negative number: ");
    } else {
        console.log("Number is zero")
    }
}
console.log(checkNum(-3));

// 13.  Write a function to return the  largest of two numbers. 

// 14.  Write a function to return the  smallest of three numbers. 

// 15.  Write a function to check if a number is  prime or not. 

// 16.  Write a function to check if a number is a  multiple of 5. 

// 17.  Write a function to check if a year is a  leap year.
function leapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
} 
console.log(leapYear(2023))

// 18.  Write a function to check if a character is a  vowel or consonant.

// 19.  Write a function to return the  grade of a student  based on marks (A, B, C, D, F).
function studentGrade(student){
    switch (student){
        case "A": 
        console.log("Garade A");
        break;

        case "B": 
        console.log("Garade B");
        break;

        case "C": 
        console.log("Garade C");
        break;

        case "D": 
        console.log("Garade D");
        break;

        default:
        console.log("grade F");

    }
    return student;
}
studentGrade("B")

// 20.  Write a function to check if a given string is a  palindrome.

// Loops inside Functions 

// 21.  Write a function to print the  first N natural numbers. 

// 22.  Write a function to calculate the  sum of first N natural numbers. 

// 23.  Write a function to calculate the  factorial of a number. 

// 24.  Write a function to print the  multiplication table  of a number. 

// 25.  Write a function to print all  even numbers up to N. 

// 26.  Write a function to print all  odd numbers up to N. 

// 27.  Write a function to find the  reverse of a number. 

// 28.  Write a function to count the  number of digits  in a number. 

// 29.  Write a function to calculate the  sum of digits of a number. 

// 30.  Write a function to print the  Fibonacci series up to N terms. 

// 31.  Write a recursive function to calculate the  factorial of a number. 

// 32.  Write a recursive function to calculate the  sum of first N natural numbers. 

// 33.  Write a recursive function to print the  Fibonacci series up to N terms. 

// 34.  Write a recursive function to find the  greatest common divisor (GCD)  of two numbers.

// 35.  Write a recursive function to calculate the  power of a number (a^b).
