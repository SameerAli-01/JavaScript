// control flow assignment

// 1. Write code that checks if the variable `num` is greater than 10. If it is, print "Greater than 10". 
// let num = 15;  // You can change this value to test 

let num = 10;
if(num > 10){
    console.log("Greater than 10");
}

// 2. Write code that checks if the variable `num` is greater than or equal to 0. If it is, print 
// "Non-negative"; otherwise, print "Negative". 
// let num = -3;  // You can change this value to test

let num1 = -10;
if(num1 >= 0){
    console.log("Non Negative");
}
else{
    console.log("negative");
}

// 3. Write code that checks the variable `score` and prints a grade based on the following criteria: - 
// "Excellent" for scores 90 and above - "Good" for scores between 70 and 89 - "Needs Improvement" for scores below 70 
// let score = 85;  // You can change this value to test 

let score = 90;
if(score >= 90){
    console.log("Excellent");
}else if(score>70 && score <89){
    console.log("good");
}else{
    console.log("Needs Improvement");
}

// // 4. Write code that uses a `switch` statement to print the name of the day based on the variable 
// `day`. Use the following values: 
// - 1 for "Monday" 
// - 2 for "Tuesday"
// - 3 for "Wednesday" 
// - 4 for "Thursday" 
// - 5 for "Friday" 
// - 6 for "Saturday" 
// - 7 for "Sunday" 
// let day = 4;  // You can change this value to test

let day = 1;
switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;
        default:
            console.log("You enter wrong day");
}

// 5. Write code that checks if the variable `num` is between 10 and 20 (In range). Print "Out of range" 
// if it is, otherwise print "Out of range". 
// let num = 15;  // You can change this value to test 

let num2 = 20;
if(num2 >= 10 && num2 <= 20){
    console.log("In range");
}
else{
    console.log("Out of range");
}

// 6. Write code that checks if the variable `num` is positive. If it is, then check if it is greater than 
// 100. Print "Large Positive" if it is greater than 100; otherwise, print "Small Positive". 
// let num = 120;  // You can change this value to test

let num3 = 80;

if(num3 > 0){
    if(num3 > 100){
        console.log("Large Positive")
    } else{
        console.log("mediam")
    }
} else{
    console.log("Small Positive")
}


// 7.Write code that checks if the variable `num` is even or odd. Print "Even" if it is even, and 
// "Odd" if it is odd. 
// let num = 7;  // You can change this value to test

let num4 = 10;
 if(num4 % 2 === 0 ){
    console.log("Even Number");
 }
 else{
      console.log("Odd Number");
 }

// 8. Write code that uses a `switch` statement to print the type of vehicle based on the variable 
// `vehicleType`. Use the following values: 
// - "car" for "Car" 
// - "bike" for "Bike" 
// - "truck" for "Truck" 
// - "other" for "Other" 
// Make sure to include a `default` case for any other value. 
// let vehicleType = "plane";  // You can change this value to test 

let vehicleType = "hello"
switch(vehicleType){
    case "bike":
        console.log("bike");
        break;

    case "truck":
        console.log("truck");
        break;

    default:
        console.log("other");
}  

// 9.Write code that classifies the age of a person based on the variable `age` and prints: 
// - "Child" for ages less than 13 
// - "Teenager" for ages between 13 and 19 
// - "Adult" for ages 20 and above 
// let age = 16;  // You can change this value to test 

let age = 20;    

if(age < 13 ){
    console.log("Child");
}else if(age >= 13 && age <= 19){
    console.log("Teenager");
}else{
    console.log("Adult");
}

// 10.Write code that uses a `switch` statement to print a message based on the variable `month`. 
// Use the following values: 
// - 1 for "January" 
// - 2 for "February" 
// - 3 for "March" 
// - 4 for "April" 
// - 5 for "May" 
// - 6 for "June" 
// - 7 for "July" 
// - 8 for "August" 
// - 9 for "September" 
// - 10 for "October" 
// - 11 for "November" 
// - 12 for "December" 
// let month = 7;  // You can change this value to test

let month = 10;
switch(month){
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;
        default:
            console.log("You enter wrong month try again");
}