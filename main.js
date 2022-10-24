let playerWins = 0;
let computerWins = 0;

//stores latest clicked choice
let playerChoice = '';

let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

//on the click of a button, currentChoice variable will equal that button's text content
const selectButtons = document.querySelectorAll('.select-button'); 
selectButtons.forEach(selection => selection.addEventListener('click', playerSelection));


let list = document.getElementById('results-list');
let resultsDiv = document.getElementById('results');
let overlay = document.getElementById('overlay');
let gameOverDisplay = document.getElementById('gameover-div');
let resultMessage = document.getElementById('gameover-msg');
let resetBtn = document.getElementById('btn-reset', resetGame).addEventListener('click', resetGame);
//playerSelection variable becomes the latest button clicked
function playerSelection(e) {
    switch (e.target.id) {
        case 'rock-img':
            playerChoice = 'Rock';
            scaleOnSelect('rock');
            break;
        case 'paper-img':
            playerChoice = 'Paper';
            scaleOnSelect('paper');
            break;
        case 'scissors-img':
            playerChoice = 'Scissors';
            scaleOnSelect('scissors');
            break;
    }
}

//keeps the selected choice noticeably bigger so user knows their latest selection
function scaleOnSelect(selection) {
    switch (selection) {
        case 'rock': 
            selectButtons[0].style.transform = 'scale(1.15)';
            selectButtons[1].style.transform = 'scale(1.0)';
            selectButtons[2].style.transform = 'scale(1.0)';
            break;
        case 'paper':
            selectButtons[0].style.transform = 'scale(1.0)';
            selectButtons[1].style.transform = 'scale(1.15)';
            selectButtons[2].style.transform = 'scale(1.0)';
            break;
        case 'scissors':
            selectButtons[0].style.transform = 'scale(1.0)';
            selectButtons[1].style.transform = 'scale(1.0)';
            selectButtons[2].style.transform = 'scale(1.15)';
            break;
    }
}



//click play to start each round until either the player or computer gets 5 wins
let playBtn = document.getElementById('btn-play').addEventListener('click', playRound);

function playRound() {
    //only use function if player has selected a choice
    if (!playerChoice) {
        return;
    }
    let computerChoice = getComputerChoice();
    let result = '';
    //all player win conditions
    if (playerChoice === 'Rock' && computerChoice === 'Scissors'
    || playerChoice === 'Scissors' && computerChoice === 'Paper'
    || playerChoice === 'Paper' && computerChoice === 'Rock') {
        playerScore.textContent = `Player: ${++playerWins}`;
        result = `${playerChoice} beats ${computerChoice.toLowerCase()}, player wins`;
    }
    //all computer win conditions
    if (computerChoice === 'Rock' && playerChoice === 'Scissors'
    || computerChoice === 'Scissors' && playerChoice === 'Paper'
    || computerChoice === 'Paper' && playerChoice === 'Rock') {
        computerScore.textContent = `Computer: ${++computerWins}`;
        result = `${computerChoice} beats ${playerChoice.toLowerCase()}, computer wins`;
    }
    //draw
    if (playerChoice === computerChoice) {
        result = 'Draw';
    }
    //add whatever the result is to the game log
    addListResult(result);

    //if either player or computer reaches 5 wins, end the function
    if (gameOver()) {
        openGameOverModal();
        return;
    }
    playerChoice = ''; //reset playerChoice after each round
}

function addListResult(result) {
    let roundResult = document.createElement('li');
    roundResult.className = 'round-result';
    roundResult.textContent = result;
    list.appendChild(roundResult);
}

function gameOver() {
    if (playerWins === 5) {
        resultMessage.textContent = 'You won!';
        return true;
    }
    if (computerWins === 5) {
        resultMessage.textContent = 'You lost';
        return true;
    }
    return false;
}

function openGameOverModal() {
    overlay.classList.add('active');
    gameOverDisplay.classList.add('active');
}

//query the user to start a new game
function resetGame() {
    playerChoice = '';
    playerWins = 0;
    playerScore.textContent = 'Player: 0';
    computerWins = 0;
    computerScore.textContent = 'Computer: 0';

    //remove messages from game log
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    overlay.classList.remove('active');
    gameOverDisplay.classList.remove('active');
}

//random choice selected from array 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}





