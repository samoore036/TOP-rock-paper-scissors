let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex]; 
}

function playerSelection() {
    return prompt();
}

function playRound(playerSelection, getComputerChoice) {
    let playerMove = playerSelection().toLowerCase();
    let computerMove = getComputerChoice().toLowerCase();
    //all player win conditions
    if (playerMove === 'rock' && computerMove === 'scissors'
    || playerMove === 'scissors' && computerMove === 'paper'
    || playerMove === 'paper' && computerMove === 'rock') {
        playerWins++;
        console.log(`${capitalize(playerMove)} beats ${computerMove}, player wins.`);
    }
    //all computer win conditions
    if (computerMove === 'rock' && playerMove === 'scissors'
    || computerMove === 'scissors' && playerMove === 'paper'
    || computerMove === 'paper' && playerMove === 'rock') {
        computerWins++;
        console.log(`${capitalize(computerMove)} beats ${playerMove}, computer wins.`);
    }
    //draw
    if (playerMove === computerMove) {
        console.log('Draw.');
    }
}

function capitalize(string) {
    let firstChar = string[0].toUpperCase();
    return firstChar + string.slice(1).toLowerCase();
}

function playGame() {
    console.log('Best out of 5!');
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, getComputerChoice);
    }
    playerWins > computerWins ? console.log(`Player wins: ${playerWins} to ${computerWins}`)
    : computerWins > playerWins ? console.log(`Computer wins: ${computerWins} to ${playerWins}`) 
    : console.log(`Draw! Player wins: ${playerWins}, Computer wins: ${computerWins}`);
}

playGame();