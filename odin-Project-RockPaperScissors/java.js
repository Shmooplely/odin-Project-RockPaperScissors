let roundNumber = 0;
const roundWinsToWinGame = 5;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");
const newGameButton = document.getElementById("newGame-btn");
const resultElement = document.getElementById("result");



rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
newGameButton.addEventListener("click", () => newGame());

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();

    let roundResult;
    if (playerChoice === computerChoice) {
        roundResult = "It's a tie this round!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        if (playerScore === roundWinsToWinGame) {
            roundResult = "Congratulations! You win the game!";
            disableButtons();
        } else {
            roundResult = "You win this round!";
        }
    } else {
        computerScore++;
        if (computerScore === roundWinsToWinGame) {
            roundResult = "Sorry, you lose the game!";
            disableButtons();
        } else {
            roundResult = "You lose this round!";
        }
    }

    roundNumber++;
    resultElement.innerHTML = `Round #: ${roundNumber}<br>Player Wins: ${playerScore}<br>Comp Wins: ${computerScore}<br>${roundResult}`;
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function newGame() {

    roundNumber = 0;
    playerScore = 0;
    computerScore = 0;

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    roundResult = 'new game!';
    resultElement.innerHTML = `Round #: ${roundNumber}<br>Player Wins: ${playerScore}<br>Comp Wins: ${computerScore}<br>${roundResult}`;
}