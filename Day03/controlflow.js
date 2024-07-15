/*Activity 1: If-Else Statements

Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.*/

const number = 56;
if (number >= 56) {
    console.log(`Positive`);
} else if (number < 56){
    console.log(`Negative`);
} else {
    console.log(`Zero`)
}


/*Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.*/

const age = 21;
if (age >= 18) {
    console.log(`You're Eligible to Vote`);
} else {
    console.log(`You're Not Eligible to Vote`);
}

/*Activity 2: Nested If-Else Statements

Task 3: Write a program to find the largest of three numbers using nested if-else statements.*/

const num1 = 999;
const num2 = 500;
const num3 = 750;

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} is the largest number`);
} else {
    if (num2 >= num3) {
        console.log(`${num2} is the largest number`);
    } else {
        console.log(`${num3} is the largest number`);
    }
}


/*Activity 3: Switch Case

Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.*/

const day = 2;
 switch (day) {
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
        console.log("Invalid Day")
        break;
 }

 /*Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.*/
 const score = 85;
let grade;

switch (true) {
    case score >= 90:
        grade = 'A';
        break;
    case score >= 80:
        grade = 'B';
        break;
    case score >= 70:
        grade = 'C';
        break;
    case score >= 60:
        grade = 'D';
        break;
    default:
        grade = 'F';
}

console.log(`Score: ${score}, Grade: ${grade}`);

 

/*Activity 4: Conditional (Ternary) Operator

Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.*/

const count = 42;

const result = (count % 2 === 0) ? 'Even' : 'Odd';

console.log(result);

/*Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console*/
const year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year`);
} else {
    console.log(`${year} is not a leap year`);
}


/*Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.*/
