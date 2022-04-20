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