// Initializing all functions

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
    playerselection = prompt("Please enter your choice: Rock, Paper or Scissors?", "rock").toLowerCase();
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
    while (true) {
        getComputerChoice();
        getPlayerChoice();
        console.log(`Player picked ${playerselection.toUpperCase()} and Computer picked ${computerselection.toUpperCase()}.`)
        switch (playRound(playerselection, computerselection)) {
            case 1:
                player_score++;
                console.log(`Player won round ${round_counter}. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
            case 2:
                computer_score++;
                console.log(`Computer won round ${round_counter}. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
            case 0:
                console.log(`Round ${round_counter} was a draw. The current score is Player: ${player_score} | Computer: ${computer_score}`);
                break;
        }
        round_counter++;
        if (player_score === 5 || computer_score === 5) {
            break;
        }
    }
    game_over();
}

function game_over() {
    alert(`The game is over. The final score was: Player: ${player_score} | Computer: ${computer_score}\nPlease refresh your page to play another round.`);
}

// Initializing variables and playing the game

let playerselection = '';
let computerselection = '';
let player_score = 0;
let computer_score = 0;
let round_counter = 1;
document.querySelector('#start').addEventListener('click', game);