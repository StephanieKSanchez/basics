// let cars = ['Ferrari', 'Lamborghini', 'Audi', 'Aston Martin', 'Ford']

// console.log(cars[1]) // Lamborghini

// console.log(cars.length) // 5

let ourCars = [{
    brand: 'Audi', 
    year: 2018, 
    model: 'A3', 
    miles: 25580, 
    color: 'Grey'
}, {
    brand: 'Jeep',
    year: 2015,
    model: 'Grand Cherokee',
    color: 'Black',
    mileage: 55000
    
}]

console.log(ourCars[1].miles)

const { miles, year} = ourCars[0]

const age = 2022 - year
const mileage = miles / age

console.log(mileage + ' miles per year')

if (mileage < 10000){
    console.log('This is a LOW mileage car.')
} else {
    console.log('This is NOT a low mileage car.')

}

mileage < 10000
? console.log('This is a LOW mileage car.')
: console.log('This is NOT a low mileage car.')


let message = (mileage < 10000) ? 'This is a LOW mileage car.' : 'This is NOT a low mileage car.'
console.log(message)