const choice = ["Rock", "Paper", "Scissors"];
let outcome = "";

// random computer generated choice function
function getComputerChoice() {
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}
console.log(getComputerChoice());

// simulate a game of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = "It's a Tie!"
        return outcome;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        outcome = "You Win! Rock beats Scissors";
        return outcome;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        outcome = "You Win! Rock beats Scissors";
        return outcome;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        outcome = "You Win! Rock beats Scissors";
        return outcome;
    }
    else {
        outcome = `You lose! ${computerSelection} beats ${playerSelection}`;
        return outcome;
    }
}

const playerSelection = "rock"; // capitalize first letter from prompt.
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));