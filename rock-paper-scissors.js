const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let computerChoice = choice[(Math.floor(Math.random() * choice.length))];
    return computerChoice;
}
console.log(getComputerChoice());