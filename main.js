let playerWins = 0;
let computerWins = 0;

//stores latest clicked choice
let playerChoice = '';

//on the click of a button, currentChoice variable will equal that button's text content
let rockBtn = document.getElementById('btn-rock').addEventListener('click', playerSelection);
let paperBtn = document.getElementById('btn-paper').addEventListener('click', playerSelection);
let scissorsBtn = document.getElementById('btn-scissors').addEventListener('click', playerSelection);

//playerSelection variable becomes the latest button clicked
function playerSelection(e) {
    playerChoice = e.target.textContent;
}

let list = document.getElementById('results-list');
let resultsDiv = document.getElementById('results');

//click play to start each round until either the player or computer gets 5 wins
let playBtn = document.getElementById('btn-play').addEventListener('click', playRound);

function displayResult() {
    let result = '';
    if (playerWins == 5) {
        result = 'Player wins';
    } else {
        result = 'Computer wins';
    }
    let resultText = document.createTextNode(result);
    resultsDiv.appendChild(resultText);
}

function gameOver() {
    if (playerWins == 5 || computerWins == 5) {
        return true;
    }
    return false;
}

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
        playerWins++;
        result = `${playerChoice} beats ${computerChoice.toLowerCase()}, player wins.`;
    }
    //all computer win conditions
    if (computerChoice === 'Rock' && playerChoice === 'Scissors'
    || computerChoice === 'Scissors' && playerChoice === 'Paper'
    || computerChoice === 'Paper' && playerChoice === 'Rock') {
        computerWins++;
        result = `${computerChoice} beats ${playerChoice.toLowerCase()}, computer wins.`;
    }
    //draw
    if (playerChoice === computerChoice) {
        result = 'Draw.';
    }
    addListResult(result);

    //if either player or computer reaches 5 wins, display the result and end the function
    if (gameOver()) {
        displayResult();
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

//random choice selected from array 
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}





