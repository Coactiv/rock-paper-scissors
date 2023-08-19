const choice = ["Rock", "Paper", "Scissors"];
let outcome = "";
let playerScore = 0;
let computerScore = 0;


// random computer generated choice function
function getComputerChoice() {
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}

// simulate a game of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        outcome = "It's a Tie!"
        return outcome;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        outcome = "You Win! Rock beats Scissors";
        playerScore++;
        return outcome;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        outcome = "You Win! Paper beats Rock";
        playerScore++;
        return outcome;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        outcome = "You Win! Scissors beats Paper";
        playerScore++;
        return outcome;
    }
    else {
        outcome = `You lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        return outcome;
    }
}
// simulate a full 5 round match
function game() {
    for (let rounds = 0; rounds < 5; rounds++) {

        let playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
    }
}
// keep score and announce winner
function checkScore() {
    if (playerScore > computerScore) {
        console.log("Player Wins The Match!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer Wins The Match!");
    }
    else {
        console.log("The Match Was A Tie!");
    }
}

game();
checkScore();