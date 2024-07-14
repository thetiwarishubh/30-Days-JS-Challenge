/*Activity 1: Arithmetic Operations

Task 1: Write a program to add two numbers and log the result to the console.*/

const sum = 25;
const sum1 = 56;
const sum2 = sum + sum1;
console.log(sum2);

/*Task 2: Write a program to subtract two numbers and log the result to the console.*/

const sub = 98;
const sub1 = 48;
const sub2 = sub - sub1;
console.log(sub2);

/*Task 3: Write a program to multiply two numbers and log the result to the console.*/

const mul = 41;
const mul1 = 6;
const mul2 = mul * mul1;
console.log(mul2);

/*Task 4: Write a program to divide two numbers and log the result to the console*/
const divide = 75;
const divide1 = 3;
const divide2 = divide / divide1;
console.log(divide2);

/*Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.*/

const remain = 100;
const remain1 = 18;
const remain2 = remain % remain1;
console.log(remain2);

/*Activity 2: Assignment Operators

Task 6: Use the += operator to add a number to a variable and log the result to the console.*/
let num = 10;
num += 5;
console.log(num);

/*Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.*/
num -= 8;
console.log(num);

/*Use the *= operator to subtract a number from a variable and log the result to the console.[Extra Question and Answer]*/
num *= 12;
console.log(num);

/* Use the /= operator to subtract a number from a variable and log the result to the console.[Extra Question and Answer]*/
num /= 14;
console.log(num);

/* Use the %= operator to subtract a number from a variable and log the result to the console.[Extra Question and Answer]*/
num %= 4;
console.log(num);

/*Activity 3: Comparison Operators

Task 8: Write a program to compare two numbers using > and < and log the result to the console.*/
const a = 15;
const b = 13;
console.log(`${a} > ${b} is ${a > b}`)
console.log(`${a} < ${b} is ${a < b}`)

/*Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.*/
console.log(`${a} >= ${b} is ${a >= b}`)
console.log(`${a} <= ${b} is ${a <= b}`)

/*Task 10: Write a program to compare two numbers using == and === and log the result to the console.*/
console.log(`${a} == ${b} is ${a == b}`)
console.log(`${a} === ${b} is ${a === b}`)

/*Activity 4: Logical Operators

Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.*/
let number = 55;
let number2 = 87;

console.log(number > 0 && number2 > 0);

/*Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.*/
console.log(number > 0 || number2 > 100);

/*Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.*/
console.log(!(number > 0 && number2 > 0));

console.log(!true == 1);

/*Activity 5: Ternary Operator

Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.*/

const age = 20;
const goals = age >= 18 ? "Hard Work and Study" : "Enjoy The Party";
console.log(goals);

let numCheck = -5;
let result = numCheck >= 0 ? "Positive" : "Negative";
console.log(result);  

/*Feature Request:
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.*/

let x = 18;
let y = 4;
console.log(`sum ${x + y}`);
console.log(`Difference ${x - y}`);
console.log(`Multiplication ${x * y}`);
console.log(`Division ${x / y}`);
console.log(`Remainder ${x % y}`);

/*2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.*/
let m = 12;
let n = 8;

console.log(`m > n : ${m > n}`);
console.log(`m < n : ${m < n}`);
console.log(`m <= n : ${m <= n}`);
console.log(`m >= n : ${m >= n}`);
console.log(`m == n : ${m == n}`);
console.log(`m === n : ${m === n}`);
console.log(`m != n : ${m != n}`);
console.log(`m !== n : ${m !== n}`);
console.log(`m > 0 && n > 0:${m > 0 && n > 0}`);
console.log(`m > 10 || n > 10:${m > 10 || n > 10}`);
console.log(`!m : ${!m}`);

/*3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.*/
let checkNumber = 15;
let checkResult = checkNumber >= 20 ? "Positive" : "Negative";
console.log(checkResult);  
