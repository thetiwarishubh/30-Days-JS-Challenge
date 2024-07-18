/*Day 6: Arrays

Tasks/Activities:

Activity 1: Array Creation and Access

Task 1: Create an array of numbers from 1 to 5 and log the array to the console*/
const myArr = [1, 2, 3, 4, 5];
console.log(myArr);


/*Task 2: Access the first and last elements of the array and log them to the console*/
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstElement = myArray[0];
const lastElement = myArray[myArray.length -1];
console.log(firstElement);
console.log(lastElement);

/*Activity 2: Array Methods (Basic)

Task 3: Use the push method to add a new number to the end of the array and log the updated array.*/
const superHeros = ["iron Man", "Thor", "Captain America", "SpiderMan"];
superHeros.push("Hulk");
console.log(superHeros);


/*Task 4: Use the pop method to remove the last element from the array and log the updated array.*/
const dcHeros = ["SuperMan", "BatMan", "Flash", "Black Adam", "Wonder Woman"];
dcHeros.pop();
console.log(dcHeros);


/*Task 5: Use the shift method to remove the first element from the array and log the updated array.*/
const myScoreInGames = [25, 89, 98, 96, 97, 99, 95];
myScoreInGames.shift();
console.log(myScoreInGames);

/*Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.*/
const listItem = [4, 5, 6, 7, 8, 9, 10];
listItem.unshift(1, 2, 3)
console.log(listItem);

/*Activity 3: Array Methods (Intermediate)

Task 7: Use the map method to create a new array where each number is doubled and log the new array*/
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumbers = myNumbers.map( (num) => num * num );
console.log(newNumbers);

/*Task 8: Use the filter method to create a new array with only even numbers and log the new array.*/
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter( (num) => num%2==0 )
console.log(newNums);

/*Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.*/
let arr=[1,2,3,4,5];
const sumArray=arr.reduce((sum,arr1)=>sum+arr1,0);
console.log(sumArray);

/*Activity 4: Array Iteration

Task 10: Use a for loop to iterate over the array and log each element to the console.*/
let arr1=[1,2,3,4,5];
for(let i=0;i<arr1.length;i++)[
    console.log(arr1[i])
]

/*Task 11: Use the forEach method to iterate over the array and log each element to the console.*/
let arr2=[1,2,3,4,5];
arr.forEach(ele => {
    console.log(ele);
});

/*Activity 5: Multi-dimensional Arrays

Task 12: Create a two-dimensional array (matrix) and log the entire array to the console*/
function create2dArray(rows,cols){
        {
            const matrix=[];
            for(let i=0;i<rows;i++){
                matrix[i]=new Array(cols).fill(0);
            }
            for(let i=0;i<rows;i++){
                console.log(matrix[i]);
            }
        }
    }
    create2dArray(3,4)


/*Task 13: Access and log a specific element from the two-dimensional array.*/

function accessAndLogElement(matrix,row,col){
        if(row<0||row>=matrix.length||col<0||col>=matrix[0].length){
            console.log("Invalid rows and cols");
            return;
        }
        const element=matrix[row][col];
        console.log(`element at row ${row} coloum ${col}:`,element);
    }
    const matrix=[[1,2,3],[4,5,6],[7,8,9]];
    
    accessAndLogElement(matrix,1,2);