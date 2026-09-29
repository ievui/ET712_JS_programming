console.log("Aaliyah Fowlin")
console.log("\n ----- Example 1: intro to function")
// define a function that prints form 3 to 1.
function printcount(){
    for(let num = 3; num>=1 ; num--)
        console.log(num)
}

console.log("\n ----- Example 2: function with parameters")
// function thar prints a name. The name is passed to the function.
function greeting(name){
    console.log(`Good afternoon ${name.toUpperCase()}`)
}

console.log("\n ----- Example 3: function with parameters")
//  function that prints a message that starts with 1 all the way up to the stopnumber.
// the stopnumber and the message are passed to thr function.
function greetcount(msg, stopnumber){
    for(let n = 1; n<=stopnumber ; n++){
        console.log(`${msg} ${n}`)
    }
}

console.log("\n ----- Example 4: function with parameters")
// function that prints 'snake's eyes' if two numbers are 1.
function snake(n1, n2){
    if(n1===1 && n2===1){
        console.log("snake's eyes")
    }
    else{
        console.log("Not snake's eyes")
    }
}

console.log("\n ----- Example 5: function that returns value")
// function that calculates the area of a square and returns the calculated area.
function areasquare(side){
    console.log("Calculate area of square with side", side)
    return side*side
    console.log("The area is", side*side)
}

console.log("\n ----- Example 6: function that returns a Boolean value")
// function that returns 'true' if the tempature is greater than 75
// otherwise, if returns 'false'
// the tempature is passed to the function
function checktempature(t){
    if(t>75)
        return true
    else
        return false
}

console.log("\n ----- Example 7: JS built-in Math function")
const PI = Math.PI
console.log(PI)
console.log(`Round PI = ${Math.round(PI)}`)
console.log(`Ceil PI = ${Math.ceil(PI)}`)
console.log(`Floor PI = ${Math.floor(PI)}`)
console.log(`power 2^5 = ${Math.pow(2,5)}`)
console.log(`square root of 81 = ${Math.sqrt(81)}`)
console.log(`random numbers = ${Math.random()}`)
console.log(`Return a random number between 1 and 9: ${Math.round(Math.random()*9)}`)

console.log("\n ----- Example 8: JS built-in math functions")
// function that will randomly pick a colour from an array
let colours = ['magenta', 'blue', 'olive', 'coral', 'yellow']
function pickindex(lastindex){
    let random_index = Math.floor(Math.random()*lastindex)
    return random_index
}
let index = pickindex(colours.length)
console.log(`testing index = ${index}`)
let pickcolour = colours[index]
console.log(`Randomly picked colour = ${pickcolour}`)