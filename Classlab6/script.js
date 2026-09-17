let hourNow = 6;
let greeting;

if(hourNow>24){greeting = "Welcome to the next day"}
if(hourNow>18){greeting = 'Good evening!'}
else if(hourNow>12){greeting = 'Good afternood!'}
else if  (hourNow>0){greeting = 'Good morning!'}
else{greeting = 'Welcome!'}
document.write('<h2 class="greet">' + greeting + '</h2>')

console.log("Aaliyah Fowlin")
console.log(greeting)
console.log("Example 1: conversion between data types")
let num1 = prompt("Enter number 1")
num1 = parseInt(num1)
let num2 = prompt("Enter number 2")
num2 = parseInt(num2)
let sum = num1 + num2
console.log(`The sum of ${num1} and ${num2} is ${sum}`)

console.log("Exercise")
let firstname = prompt("Enter first name: ")
let age = parseInt(prompt("Enter age: "))
let language = prompt("Enter your favorite programming language: ")
let hobby = prompt("Enter your favorite hobby: ")
console.log(`My name is ${firstname}. I am ${age} years old. my favorite programming language is ${language} and my favorite hobby is ${hobby}.`)
