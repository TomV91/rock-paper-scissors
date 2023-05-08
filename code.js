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

function game() {
    let player_score = 0;
    let computer_score = 0;
    for (let i = 1; i < 6; i++) {
        getComputerChoice();
        getPlayerChoice();
        switch (playRound(playerselection, computerselection)) {
            case 1:
                player_score++;
                console.log(`Player won round ${i}. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
            case 2:
                computer_score++;
                console.log(`Computer won round ${i}. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
            case 0:
                console.log(`Round ${i} was a draw. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
        }
    }
}

let playerselection = '';
let computerselection = '';
game();