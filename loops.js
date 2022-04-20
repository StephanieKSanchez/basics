const alumni = ['Ashley', 'Peter', 'Sebas', 'Zhuopu', 'Aurelie', 'Matt']

for(let alum of alumni){
    console.log(alum)
}

// It's seen as below way more often as the for loop

for(let i = 0; i < alumni.length; i++){
    console.log(i, alumni[i])
}