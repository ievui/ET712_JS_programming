console.log("Aaliyah Fowlin")
console.log("\nExample 1: array")
let mixedarray = ['cars', 10, true, 'apples' -3.5]
console.log(`The 4th value is ${mixedarray[3]}`)
console.log(`Original array = ${mixedarray}`)
// remove the first value(left-most) in array mixedarray
mixedarray.shift()
console.log(`array after shift method = ${mixedarray}`)

// add value to left-most in array mixedarray
mixedarray.unshift("NY", 280)
console.log(`array after unshift method = ${mixedarray}`)

// add values to the right-most in array mixedarray
mixedarray.push(-360, 'QCC')
console.log(`Array after push method = ${mixedarray}`)

// METHODS THAT RETURN VALUE
// find the index number of 'cherries'
indexcherries = mixedarray.indexOf("cherries")
console.log(`What is the index of cherries? = ${indexcherries}`)
// it returns -1 if the value does not exist

indexqcc = mixedarray.indexOf("QCC")
console.log(`What is the index for QCC? = ${indexqcc}`)

console.log("\n ---- example 3: if statement")
// check for one condition
//it will run code wrap in between the curly braces if the statement is true
// otherwise, if the statement is false, it will skip the code wrap in between the curly braces
let goodmood = true
let gotsleep = false

if (goodmood && gotsleep){
    console.log('Today is a good day!')
}
console.log('Good bye!')

console.log("\n ---- example 4: if-else statement")
// has two branches
let n1 = 4
let n2 = 10

if (n1===n2){
    console('The numbers are equal')
}
else{
    console.log("The numbers are not equal")
}

console.log("\n ---- example 5: if-else statement with isNaN function")
let userinput = prompt("Enter a number")
let checkinput = isNaN(parseInt(userinput))

if (checkinput){
    console.log(`${userinput} is a string`)
}
else{
    console.log(`${userinput} is a number`)
}

console.log("\n ---- exmaple 6: multiway conditional statement")
// check if the number is zero, negative or positive
if (inputnumber === 0){
    console.log('The number is zero')
}
else if (inputnumber >0){
    console.log('The number is positive')
}
else if (inputnumber <0){
    console.log('The number is negative')
}
else{
    console.log('The input is not a number')
}

console.log("\n ---- exmaple 7: AND operator")
// AND operator && returns a true is all statements are true
// check if a username is 6+ characters and has no space
let username = prompt("Enter a username")
if(username.length() >=6 && username.indexOf (" ") === -1){
    console.log('valid username')
}
else{
    console.log('invalid username')
}

console.log("\n ---- exmaple 8: Or operator")
// OR operator || returns a true if one of the statement is true
// rate a book if it is excellent, good, average, invalid
let rate = prompt("How do you like the book?\n3 ofr excellent, 2 for good, 1 for average")
if (rate === 3 || rate ===2){
    console.log('Thank you for choosing the book')
}
else if (rate === 1 || rate === 0){
    console.log('We are sorry that you find the book booring!')
}
else{
    console.log("INVALID RATING")
}