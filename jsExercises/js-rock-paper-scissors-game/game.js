const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while(true){
    const playerChoice = prompt("Enter rock, paper or scissors (Press q to quit): ").toLowerCase();
    if (playerChoice.toLowerCase() === "q"){
        break;
    }

    if (
        playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors"
    ) {
        console.log("Please enter a valid choice.\n");
        continue;
    }

    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];

    console.log("The computer chose:", computerChoice);

    if(computerChoice === playerChoice){
        console.log("Draw!\n");
        ties++;
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
    ) {
        console.log("Won!\n");
        wins++;
    } else {
        console.log("Lost!\n");
        losses++;
    }
}

console.log("Wins:", wins, "Losses:", losses, "Ties:", ties);