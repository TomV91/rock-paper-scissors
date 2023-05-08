function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    switch (number) {
        case 0:
            computerselection = "rock";
            return true;
        case 1: 
            computerselection = 'paper';
            return true;
        case 2:
            computerselection = 'scissors';
            return true;
    }
}

function getPlayerChoice() {
    playerselection = prompt("Please enter your choice: Rock, Paper or Scissors?").toLowerCase();
}

function playRound(a, b) {
    if (a === 'rock' && b === 'scissors') {
        return 1;
    } else if (a === 'rock' && b === 'paper') {
        return 2;
    } else if (a === 'paper' && b === 'rock') { 
        return 1;
    } else if (a === 'paper' && b === 'scissors') {
        return 2;
    } else if (a === 'scissors' && b === 'paper') {
        return 1;
    } else if (a === 'scissors' && b === 'rock') {
        return 2;
    } else return 0;
}

let playerselection = '';
let computerselection = '';
getComputerChoice();
getPlayerChoice();
switch (playRound(playerselection, computerselection)) {
    case 1:
        console.log("Player wins!");
        break;
    case 2:
        console.log("Computer wins!");
        break;
    case 0:
        console.log("Draw!");
        break;
}