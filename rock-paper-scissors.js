const choice = ["Rock", "Paper", "Scissors"];
let outcome = "";
let playerScore = 0;
let computerScore = 0;
const roundOutcome = document.querySelector('.outcome');
const resultDiv = document.querySelector('.result');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const result = document.createElement('p');
const roundScore = document.querySelector('.score');
const scoreCount = document.createElement('span');


// random computer generated choice function
function getComputerChoice() {
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}

// simulate a game of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        checkScore();
        return;
    } else if (playerSelection === computerSelection) {
    scoreCount.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    roundScore.appendChild(scoreCount);
    outcome = "It's a Tie!"
    result.innerText =  outcome;
    roundOutcome.appendChild(result);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        scoreCount.innerText = `Player Score: ${++playerScore} Computer Score: ${computerScore}`;
        roundScore.appendChild(scoreCount);
        outcome = "You Win! Rock beats Scissors";
        result.innerText =  outcome;
        roundOutcome.appendChild(result);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        scoreCount.innerText = `Player Score: ${++playerScore} Computer Score: ${computerScore}`;
        roundScore.appendChild(scoreCount);
        outcome = "You Win! Paper beats Rock";
        result.innerText =  outcome;
        roundOutcome.appendChild(result);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        scoreCount.innerText = `Player Score: ${++playerScore} Computer Score: ${computerScore}`;
        roundScore.appendChild(scoreCount);
        outcome = "You Win! Scissors beats Paper";
        result.innerText =  outcome;
        roundOutcome.appendChild(result);
    } else {
        scoreCount.innerText = `Player Score: ${playerScore} Computer Score: ${++computerScore}`;
        roundScore.appendChild(scoreCount);
        outcome = `You lose! ${computerSelection} beats ${playerSelection}`;
        result.innerText =  outcome;
        roundOutcome.appendChild(result);
    }


    
}

rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Rock';
    playRound(playerSelection, computerSelection);
})
paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Paper';
    playRound(playerSelection, computerSelection);
})
scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = 'Scissors';
    playRound(playerSelection, computerSelection);
})

// simulate a full 5 round match
// function game() {
//     for (let rounds = 0; rounds < 5; rounds++) {

//         let playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
//         playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
//         let computerSelection = getComputerChoice();

//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// keep score and announce winner
function checkScore() {
    if (playerScore > computerScore) {
        result.innerText = "Player Wins The Match!";
        roundOutcome.appendChild(result);
    }
    else {
        result.innerText = "Computer Wins The Match!";
        roundOutcome.appendChild(result);
    }
    
}