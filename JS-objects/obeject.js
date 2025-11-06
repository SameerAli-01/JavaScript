// 1. Create an object representing a person with properties: `firstName`, `lastName`, and `age`. 
const person = {
    firstName: "Sameer",
    lastName: "Ali",
    age: 21
};

// 2. Access and log the `firstName` property of the person object.
const person1 = {
    firstName: "Sameer",
    lastName: "Ali",
    age: 21
};

console.log(person1.firstName);

// 3. Update the `age` property of the person object to 25. 
let person2 = {
    firstName: "Sameer",
    lastName: "Ali",
    age: 21
};

let newage = person2.age = 25;
console.log(newage);

// 4. Add a `city` property to the person object and log it. 
let person3 = {
    firstName: "Sameer",
    lastName: "Ali",
    age: 21
};

console.log(person3.city = "Rampur")

// 5. change the `lastName` property from the person object.
const person4 = {
    firstName: "Sameer",
    lastName: "Ali",
    age: 21
};
let newlastName = person4.lastName = "Mohd";
console.log(newlastName);

// 6. Check if the `age` property exists in the person object (without using `in` or 
// `hasOwnProperty`). 
const person5 = {
  name: "Sameer",
  age: 22,
  gender: "Male"
};

// Check if 'age' property exists
if (person5.age !== undefined) {
  console.log("The 'age' property exists.");
} else {
  console.log("The 'age' property does not exist.");
}

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
const updstdinfo = student.grade = "A+"
console.log(updstdinfo);

// 9. Create an object `car` with properties: `make`, `model`, and `year`. Change the `model` 
// property to "Tesla Model S". 
const car = {
    make: "Tesla",
    model: "Model 3",
    year: 2022
};
const updcarinfo = car.model = "Tesla Model S"
console.log(updcarinfo);

// 10. Create an object `movie` with properties: `title`, `director`, and `releaseYear`. Add a new 
// property `rating` to the movie object.** 
const movie = {
    title: "Best movie in the world",
    director: "jams",
    releaseYear: 2025,
};

const addmovie = movie.reting = "****"
console.log(addmovie);

// 11. Create an object `person` with properties `firstName`, `lastName`, and `age`. Write a 
// function `greet()` that logs "Hello, [firstName] [lastName]!"
const person6 ={
    fisrtName: "Sameer",
    lastName: "Ali",
    age: 21,
    greet: function greet(){
        console.log(`Hello, ${fisrtName} ${lastName}`);
    }
};

console.log(person6.greet);

// 12. Create an object `counter` with a property `count` set to 0. Write a function to increase the 
// `count` property by 1 each time it’s called. 
const counter = {
    count: 0,
     increasefn: function increasefn(){
        this.count += 1;
        console.log(this.count);  
    }
}

counter.increasefn();
counter.increasefn();
counter.increasefn();

// 13. Create an object `dog` with properties: `name`, `breed`, and `age`. Add a method `bark()` 
// that logs "Woof!" when called. 
const dog = {
    name: "harry",
    bread: "black",
    age: 8,
    bark: function() {
    console.log("Woof!");
  }
};

dog.bark()

// 14. Create an object `product` with properties `name`, `price`, and `quantity`. Write a function 
// `getTotalPrice()` that returns the total price (`price * quantity`). 
const product = {
    name: "Mouse",
    price: 100,
    quantity: 4,
    getTotalPrice: function(){
        return this.price * this.quantity
    }
};

console.log(product.getTotalPrice());

// 15. Create an object `user` with properties `username`, `email`, and `password`. Log the values 
// of the `username` and `email` properties. 
const user = {
    userName: "Sameer01",
    email: "sameer01s01@gmail.com",
    password: 1234322
};
console.log(user.email);
console.log(user.userName);

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
const person7 = {
    name: "Same",
    age: 21,
    isAdult: function(){
       return this.age >= 18;
        }
    }  

console.log(person7.isAdult());

// 18. Create an object `order` with properties `item`, `quantity`, and `price`. Calculate the total 
// cost (quantity * price) and log it. 
const order = {
    item: "laptop",
    quantity: 2,
    price: 40000,
};
const totalCost = order.quantity * order.price;
console.log("Total Cost:", totalCost);

// 19. Create an object `teamMember` with properties `name`, `role`, and `experience`. Add a new 
// property `team` and assign it a value "Development". 
const teamMember = {
    name: "Rahul",
    role: "Software Developer",
    experience: "2 year"
};
teamMember.team = "Development"

console.log(teamMember.team)

// 20. Create a constructor function `Person` that accepts `name`, `age`, and `gender` as 
// arguments, and creates a new object with these properties.

function Personfn(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
};

const personvar = new Personfn("Sameer", 22, "Male");

console.log(personvar);
