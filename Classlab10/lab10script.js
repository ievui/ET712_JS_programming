console.log("\n ----- example 1: local and global variable")
// global variable
let msg = 'This is a outside message'

function displaymsg(){
    // local variable
    msg = 'Hello World'
}
// calling function
displaymsg()

console.log(msg)

console.log("\n ----- example 2: constang variable")
// constant variables are variables whose variables cannot be changes later.
const GRAVITY = 9.8
console.log(GRAVITY)
//GRAVITY = 9.9 ---> the console will show an error.

console.log("\n ----- example 3: functon in a variable")
const sum = function(num1, num2){
    return num1+num2
}
// calling function
let s = sum(2, 7)
console.log(s)

console.log("\n ----- example 4: arrow function")
let greet = (n)=>{
    console.log(`Welcome to functions, ${n}`)
}
// calling function
greet("Peter Pan")

console.log("\n ----- example 5: functions calling functions")
// function that randomly generates a number between 1 and 6
function rolldice(){
    return Math.floor((Math.random()*6)+1)
}
function calltwice(){
    let dice1 = rolldice()
    let dice2 = rolldice()
    console.log(`${dice1}, ${dice2}`)
}
// calling function
calltwice()
calltwice()
calltwice()

console.log("\n ----- example 6: function returns function")
// function that checks if a num is greater than the min number and less than the max number.
function makebetweenfunctions(min, max){
    return function(num){
        return num>=min && num<=max
    }
}

let child = makebetweenfunctions(3,7)
console.log(child(5))

console.log("\n ----- example 7: functions with default values")
// function to roll a dice n times. n is passed to the function, if n is not passed, then n = 1.

function rollingdice(n){
    for(let i = 1; i<=n; i++){
        console.log(rolldice())
    }
}
console.log("\n ----- example 7: functions with default values")
// spread syntax ... is used to iterate elements from the list
nums = [3, 9, -6, 10, 1, 0]
let maxnum = Math.max(...nums)
console.log(maxnum)