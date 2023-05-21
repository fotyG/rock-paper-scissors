const getComputerChoice = () => {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)]
}

const playRound = (playerSelection, computerSelection) => {
  if(playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return "It's a draw"
  }
  if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
    return "You lose! Paper beats Rock"
  }
  if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
    return "You win! Rock beats Scissors"
  }
  if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
    return "You win! Paper beats Rock"
  }
  if(playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
    return "You lose! Scissors beat Paper"
  }
  if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
    return "You lose! Rock beats Scissors"
  }
  if(playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
    return "You win! Scissors beat Paper"
  } else {
    return "You can only choose: Rock, Paper or Scissors!"
  }
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("What's your weapon of choice?")
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.split(" ")[1] === "win!") playerScore++
    if (result.split(" ")[1] === "lose!") computerScore++
    
    if (i === 4) {
      if (playerScore === computerScore) return "It's a draw"
      return playerScore > computerScore ? "Player wins" : "Computer wins"
    }
  }
}

console.log(game())