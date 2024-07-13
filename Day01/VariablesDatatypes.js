/*Day 1: Variables and Data Types

Tasks/Activities:
Activity 1: Variable Declaration

Task 1: Declare a variable using var, assign it a number, and log the value to the console*/
var score = 73;
console.log(score);

/*Task 2: Declare a variable using let, assign it a string, and log the value to the console.*/
let userName = "Shubham";
console.log(userName);

/*Activity 2: Constant Declaration

Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.*/
const isUserLoggedIn = true;
console.log(isUserLoggedIn);

/*Activity 3: Data Types

Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.*/
const userId = 4562;
const userFullName = "Shubham Tiwari";
const isUserSignIn = false;


const userAddress = {
    fullName : "Shubham",
    age : 18,
    courseName : "JavaScript",
    }


const myMovieList = ["Iron Man", "Captain America", "Hulk", "Thor", "SpiderMan", "Man of Steel"];
console.log(userId);
console.log(typeof userId);

console.log(userFullName);
console.log(typeof userFullName);

console.log(isUserSignIn);
console.log(typeof isUserSignIn);

console.log(userAddress);
console.log(typeof userAddress);

console.log(myMovieList);
console.log(typeof myMovieList);

/*Activity 4: Reassigning Variables

Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.*/
let value = "Initial Value";
console.log(value);
value = "new value";
console.log(value);

/*Activity 5: Understanding const

Task 6: Try reassigning a variable declared with const and observe the error.*/
const mCompany = "Google";
console.log(mCompany);
mCompany = "Microsoft";
console.log(mCompany);
//Error Asssignment to constant variable.

/*Feature Request:
Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.*/
console.log(userId, typeof userId);
console.log(userFullName, typeof userFullName);
console.log(isUserSignIn, typeof isUserSignIn);
console.log(userAddress, typeof userAddress);
console.log(myMovieList, typeof myMovieList);

/*Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.*/
let variableLet = "initial Value";
console.log(variableLet);
variableLet = "new value";
console.log(variableLet);

const variableConst = "intial value";
console.log(variableConst);
variableConst = "new value";
console.log(variableConst);