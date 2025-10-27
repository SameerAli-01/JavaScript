// 1. Create an object representing a person with properties: `firstName`, `lastName`, and `age`. 
// const person = {
//     firstName: "Sameer",
//     lastName: "Ali",
//     age: 21
// };

// 2. Access and log the `firstName` property of the person object.
// const person = {
//     firstName: "Sameer",
//     lastName: "Ali",
//     age: 21
// };

// console.log(person.firstName);

// 3. Update the `age` property of the person object to 25. 
// let person = {
//     firstName: "Sameer",
//     lastName: "Ali",
//     age: 21
// };

// let newage = person.age = 25;
// console.log(newage);

// 4. Add a `city` property to the person object and log it. 

// 5. change the `lastName` property from the person object.
// const person = {
//     firstName: "Sameer",
//     lastName: "Ali",
//     age: 21
// };
// let newlastName = person.lastName = "Mohd";
// console.log(newlastName);

// 6. Check if the `age` property exists in the person object (without using `in` or 
// `hasOwnProperty`). 

// 7. Create an object representing a `book` with properties `title`, `author`, and `year`. Log the 
// `author` property. 
const myobj = {
    book: "JavaScript",
    title: "my best book in programming",
    author: "David Flanagan",
    year: 2020
};

console.log(myobj.author);

// 8. Create an object `student` with properties: `name`, `grade`, and `subject`. Update the `grade` 
// property to "A+". 
const student = {
    name: "Rohan",
    grade: "B",
    subject: "Comuter Application",
};
student.grade = "A+"
console.log(student);

// 9. Create an object `car` with properties: `make`, `model`, and `year`. Change the `model` 
// property to "Tesla Model S". 
const car = {
    make: "Tesla",
    model: "Model 3",
    year: 2022
};
car.model = "Tesla Model S"
console.log(car);

// 10. Create an object `movie` with properties: `title`, `director`, and `releaseYear`. Add a new 
// property `rating` to the movie object.** 
const movie = {
    title: "Best movie in the world",
    director: "jams",
    releaseYear: 2025,
};

movie.reting = "****"
console.log(movie);

// 11. Create an object `person` with properties `firstName`, `lastName`, and `age`. Write a 
// function `greet()` that logs "Hello, [firstName] [lastName]!"
const person ={
    fisrtName: "Sameer",
    lastName: "Ali",
    age: 21,
    greet: function greet(){
        console.log(`Hello, ${fisrtName} ${lastName}`);
    }
};

console.log(person.greet);

// 12. Create an object `counter` with a property `count` set to 0. Write a function to increase the 
// `count` property by 1 each time it’s called. 

// 13. Create an object `dog` with properties: `name`, `breed`, and `age`. Add a method `bark()` 
// that logs "Woof!" when called. 


// 14. Create an object `product` with properties `name`, `price`, and `quantity`. Write a function 
// `getTotalPrice()` that returns the total price (`price * quantity`). 

// 15. Create an object `user` with properties `username`, `email`, and `password`. Log the values 
// of the `username` and `email` properties. 
// const user = {
//     userName: "Sameer01",
//     email: "sameer01s01@gmail.com",
//     password: 1234322
// };
// user.userName,email
// console.log(user);

// 16. Create an object `address` with properties `street`, `city`, and `zipcode`. Modify the `city` 
// property to "Los Angeles". 
const address = {
    street: "ska",
    city: "MBD",
    zipcode: "kkys11"
};
address.city = "Los Angeles"
console.log(address);

// 17. Create an object `person` with properties `name` and `age`. Write a function `isAdult()` that 
// returns `true` if `age` is 18 or above. 
const person3 = {
    name: "Same",
    age: 21,
    
}

// 18. Create an object `order` with properties `item`, `quantity`, and `price`. Calculate the total 
// cost (quantity * price) and log it. 

// 19. Create an object `teamMember` with properties `name`, `role`, and `experience`. Add a new 
// property `team` and assign it a value "Development". 

// 20. Create a constructor function `Person` that accepts `name`, `age`, and `gender` as 
// arguments, and creates a new object with these properties.