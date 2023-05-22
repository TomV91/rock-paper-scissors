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

function playRound(e) {
    playerselection = e.target.id;
    getComputerChoice();
    round_result.textContent = `Player picked ${playerselection.toUpperCase()} and Computer picked ${computerselection.toUpperCase()}.`;
    switch (checkWinner(playerselection, computerselection)) {
        case 1:
            player_score++;
            score_txt.textContent = `Player won round ${round_counter}.\r\n\r\nThe current score is Player: ${player_score} | Computer: ${computer_score}`;
            break;
        case 2:
            computer_score++;
            score_txt.textContent = `Computer won round ${round_counter}.\r\n\r\nThe current score is Player: ${player_score} | Computer: ${computer_score}`;
            break;
        case 0:
            score_txt.textContent = `Round ${round_counter} was a draw.\r\n\r\nThe current score is Player: ${player_score} | Computer: ${computer_score}`;
            break;
    }
    round_counter++;
    if (player_score === 5) {
        round_result.textContent = '';
        score_txt.classList.toggle('hidden');
        player_choices.forEach(button => {
            button.classList.toggle('hidden');
        })
        gameover_text.textContent = `You win! The final score was Player: 5 | Computer: ${computer_score}`;
        reset_btn.classList.toggle('hidden');
    } else if (computer_score === 5) {
        round_result.textContent = '';
        score_txt.classList.toggle('hidden');
        player_choices.forEach(button => {
            button.classList.toggle('hidden');
        })
        gameover_text.textContent = `You lose! The final score was Player: ${player_score} | Computer: 5`;
        reset_btn.classList.toggle('hidden');
    }
}

function checkWinner(a,b) {
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

function gameStart() {
    document.querySelector('#intro_txt').classList.toggle('hidden');
    start_btn.classList.toggle('hidden');
    player_choices.forEach(button => {
        button.classList.toggle('hidden');
    })
}

function gameReset() {
    player_score = 0;
    computer_score = 0;
    round_counter = 1;
    score_txt.textContent = '';
    round_result.textContent = '';
    gameover_text.textContent = '';
    player_choices.forEach(button => {
        button.classList.toggle('hidden');
    })
    reset_btn.classList.toggle('hidden');
    score_txt.classList.toggle('hidden');
}

// Initializing variables and adding event listeners

let playerselection = '';
let computerselection = '';
let player_score = 0;
let computer_score = 0;
let round_counter = 1;
const start_btn = document.querySelector('#start');
const reset_btn = document.querySelector('#reset');
const round_result = document.querySelector('#round_result');
const score_txt = document.querySelector('#score_txt');
const gameover_text = document.querySelector('#gameover');
const player_choices = document.querySelectorAll('.choice_btn');
player_choices.forEach(choice => {
    choice.addEventListener('click', playRound);
})
start_btn.addEventListener('click', gameStart);
reset_btn.addEventListener('click', gameReset);