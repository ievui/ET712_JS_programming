/*
Aaliyah Fowlin
JavaScript Programming
Homework2: Arrays, Functions, and AI Assistance
9/27/2026
*/

console.log("\n ----- Class example 1: Creating an Array -----")
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log("First fruit:", fruits[0]);

console.log("\n ----- Class example 2: Loop through Array -----")
let colours = ["Red", "Blue", "Green"];
for(let i = 0;i < colours.length; i++){
    console.log(colours[i])
}

console.log("\n ----- Class example 3: Functions and return values -----")
function squareNumber(num){
    return num * num;
}
console.log("Square:", squareNumber(5))

console.log("\n ----- Lab Exercise Student score analyzer with AI -----")

const scores = [];

// Collect five student scores
for (let i = 0; i < 5; i++) {
  const score = Number(prompt(`Enter score for student ${i + 1}:`));
  scores.push(score);
}

function calculateAverage() {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

const average = calculateAverage();

console.log(`Scores: ${scores.join(", ")}`);
console.log(`Average Score: ${average}`);

if (average >= 70) {
  console.log("Class Passed");
} else {
  console.log("Class Failed");
}

console.log("\n ----- AI intergration activity -----")
// AI assistance:
//Deepai explained how the loop in an Array works. 