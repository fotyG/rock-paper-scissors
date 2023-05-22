const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const gameBoard = document.getElementById("gameboard");
const playerS = document.getElementById("playerScore");
const computerS = document.getElementById("computerScore");

rockButton.addEventListener("click", getChoice);
paperButton.addEventListener("click", getChoice);
scissorsButton.addEventListener("click", getChoice);

const getComputerChoice = () => {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a draw";
  }
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You lose! Paper beats Rock";
  }
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You win! Rock beats Scissors";
  }
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You win! Paper beats Rock";
  }
  if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return "You lose! Scissors beat Paper";
  }
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return "You lose! Rock beats Scissors";
  }
  if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return "You win! Scissors beat Paper";
  }
  else {
    return "Whoa.. Not so fast - computer can't keep up!🚀"
  }
};

let playerScore = 0;
let computerScore = 0;

function getChoice(e) {
  let playerChoice = e.target.attributes["data-value"].value;
  return game(playerChoice);
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  if (result?.split(" ")[1] === "win!") playerScore++;
  if (result?.split(" ")[1] === "lose!") computerScore++;
  gameBoard.innerHTML = result;
  playerS.innerHTML = "Player: " + playerScore;
  computerS.innerHTML = "Computer: " + computerScore;
};

