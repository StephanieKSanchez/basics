
// #1 Write a function that adds two numbers together

let x = 10
let y = 8
const sum = x + y

function addNums(x, y){
    return x + y
}
console.log(sum)

function addNumbers(x, y){
    return x + y
}
console.log(addNumbers(10, 8))


// #2 Create a function that returns the number of true values there are in an array. 
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

// Solution: write out steps before writing out the code:
// 0 - declare the function
// 1 - loop through the Array 
// 2 - declare variable to keep track of the sum of trues 
// 3 - check which index is true 
// 4 - increment the variable 
// 5 - return the variable 

function checkTrue(arr){
    let result = 0 
    for(let i = 0; i < arr.length; i++){
        //if (arr[i] === true)
        if(arr[i]){
//result = result + 1
result++
        }
        
    }
    return result;
}



console.log('This is the result', checkTrue(testArray))

// #3 Write a function that receives a car object as an argument and outputs the cars make and model.

let car = {
    make: 'Jeep',
    model: 'Cherokee'
}
console.log(car.make, car.model)

// #4 Write a function to get the first element in an array.

let subjects = ['art', 'math', 'science']

function getFirstElement(subjects){
    return subjects[0]
}
console.log(subjects[0])


// Day 3 Homework

// 1. Pyramid problem:
// print:  (using a loop)
// #
// ##
// ###
// ####
// #####

const list = ['#', '##', '###', '####', '#####']

for (let i = 0; i < list.length; i++) {
    console.log(list[i]) 
}

// 2. Write a function named assignGrade that takes one argument, a number score
// Returns a grade for the score, either  "A," "B," "C," "D," or "F." Call that function for a few different scores and log the result to make sure it works.

 function assignGrade (score) {
     switch (assignGrade) {
    case 4: console.log('A');
    break;
    case 3: console.log('B');
    break;
    case 2: console.log('C');
    break;
    case 1: console.log('D');
        reak;
    case 0: console.log('F');
    break;
    default:
        console.log('Assignment not completed')
    break;
}
}
console.log(assignGrade('A'))

// Magic Eightball Practice
let userName = ''
userName = true ? console.log(`Hello, ${userName}`): console.log('Hello');
let userQuestion = ''
console.log(`Question: ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = randomNumber;
switch (eightBall){
case 0: console.log('It is certain');
break;
case 1: console.log('It is decidedly so');
break;
case 2: console.log('Reply hazy try again');
break;
case 3: console.log('Cannot predict now');
break;
case 4: console.log('Do not count on it');
break;
case 5: console.log('My sources say no');
break;
case 6: console.log('Outlook not so good');
break;
case 7: console.log('Signs point to yes');
break;
default:
console.log('Spin Again');
}
