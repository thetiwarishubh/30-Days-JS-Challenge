/*Tasks/Activities:
Activity 1: Function Declaration

Task 1: Write a function to check if a number is even or odd and log the result to the console.*/
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

checkEvenOdd(4); // Output: 4 is even.
checkEvenOdd(7); // Output: 7 is odd.

/*Task 2: Write a function to calculate the square of a number and return the result.*/

function calculateSquare(number){
    return number * number;
}
 console.log(calculateSquare(8)); // Output 64
 console.log(calculateSquare(25)); // Output 625

/*Activity 2: Function Expression

Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.*/

const findMax = function(numberOne, numberTwo){
    if (numberOne > numberTwo){
        return numberOne;
    } else {
        return numberTwo;
    }
}

console.log(findMax(45,78)); // Output 78
console.log(findMax(4855,4788)); // Output 4855
console.log(findMax(4515,75)); // Output 4515



/*Task 4: Write a function expression to concatenate two strings and return the result.*/

const myStr = function(str1, str2){
    return str1 + str2;
}
 console.log(myStr("Hello", " World !"));
 console.log(myStr("This is JS ", "Challenge"));


/*Activity 3: Arrow Functions

Task 5: Write an arrow function to calculate the sum of two numbers and return the result*/

const sum = (num1, num2) => num1 + num2;
console.log(sum(12, 15)); // Output 27
console.log(sum(44, 56)); // Output 100



/*Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.*/
const containsChar = (str, char) => str.includes(char);

console.log(containsChar("Hello", "e")); // Output: true
console.log(containsChar("World", "a")); // Output: false



/* Activity 4: Function Parameters and Default Values

Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.*/
function product(num1, num2 = 0) {
    return num1 * num2;
}

console.log(product(4, 455)); // Output: 1820
console.log(product(454)); // Output: 0



/*Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.*/

const greetPerson = (username, age = 18) => {
    return `Hello ${username} your age is ${age} year old.`;
};
console.log(greetPerson("sam", 45));
console.log(greetPerson("shubham"));



/*Activity 5: Higher-Order Functions

Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.*/


/*Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.*/