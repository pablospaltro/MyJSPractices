const prompt = require("prompt-sync")();

let totalCorrectAnswers = 0;
const totalQuestions= 3;

console.log("Welcome to the Computer Hardware Quiz!");

const answer1 = prompt("What is the brain of the computer? ");
const correctAnswer1 = "CPU"

//using "==="" is for getting the same exact value and the same type
if (answer1.toUpperCase() === correctAnswer1){
    console.log("You got it correct!");
    totalCorrectAnswers++;
} else {
    console.log("You got it wrong...");
}

const answer2 = prompt("What's the device used to input data into a PC?? ");
const correctAnswer2 = "keyboard";

if (answer2.toLowerCase() === correctAnswer2){
    console.log("You got it correct!");
    totalCorrectAnswers++;
} else {
    console.log("You got it wrong...");
}

const answer3 = prompt("What's the recommend amount of RAM in 2023? ");
const correctAnswer3 = "16GB";

if (answer3.toUpperCase() === correctAnswer3){
    console.log("You got it correct!");
    totalCorrectAnswers++;
} else {
    console.log("You got it wrong...");
}

const percentScored = Math.round((totalCorrectAnswers / totalQuestions) * 100);

console.log("You got", totalCorrectAnswers, "questions correct!");
console.log("You scored", percentScored, "%");