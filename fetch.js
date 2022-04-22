import fetch from 'node-fetch'

async function getDataAsync(){
    try{
        const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
    const data = await response.json()
    console.log(data)
    } catch (err) {
        console.error(err)
    }
}
getDataAsync()

// ----------- top and bottom should get the same output 

// fetch('https://api.sampleapis.com/beers/ale')
// .then((response => {
//  console.log(response)
//     return response.json()
// })
// .then(data => {
//     console.log(data)
// })

// .catch(err) => {
//     console.error(err)
// })


// -------- GET fetch 

function goGetMyBeers(){
    const newBeer = {price: '$7', name: 'Stela Artois', id: 220}
    
    fetch('https://api.sampleapis.com/beers/ale') // goes to get data from the API (url)
.then(myResponse => myResponse.json()) //.json formats the response
.then(allBeers => console.log(allBeers[99].price)) // accessing 100th beer's price
.then(data => {
    data.push(newBeer) // manipulating data and adding a new beer
    console.log(data[180])
})
//.catch((myError) => {return console.error('we got an error', myError)}). Simplified version below:
.catch(myError => console.error('we got an error', myError))
}
goGetMyBeers()

//     // one way to write an anonymous function 
//     function(myError){
//         return console.log(myError)
//         console.log(myError) // this code will never run because it is after the return 
//     })

//     // arrow function way to write anonymous
//     () => {
//         return console.log(myError) // explicit return 
//     console.log(myError) // this code will never run for the same reason as above
// }

// () => console.log()