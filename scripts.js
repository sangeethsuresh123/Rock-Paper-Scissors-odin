// declare rand variable of type number
// store random number in rand in the range 1..3
// if rand is 1 return "rock" 
// if rand is 2 return "paper"
// if rand is 3 return "scissors"
function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand == 1) {
    return "rock";
  } else if (rand == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = document.getElementById("result");
  // if human choice is rock,
  // computer choice is rock means its a draw
  // computer choice is paper means human loses
  // otherwise human wins 
  if (humanChoice == "rock") {
    if (computerChoice == "rock") {
      result.textContent = "Draw!"
    } else if (computerChoice == "paper") {
      result.textContent = "You lose! Paper beats Rock";
      computerScore++;
    } else {
      result.textContent = "You win! Rock beats Scissors";
      humanScore++;
    }
    // if human choice is paper,
    // computer choice is paper means its a draw
    // computer choice is scissors means human loses
    // otherwise human wins 
  } else if (humanChoice == "paper") {
    if (computerChoice == "paper") {
      result.textContent = "Draw!";
    } else if (computerChoice == "scissors") {
      result.textContent = "You lose! Scissors beats Paper";
      computerScore++;
    } else {
      result.textContent = "You win! Paper beats Rock";
      humanScore++;
    }
    // otherwise(human choice is scissors),
    // computer choice is scissors means its a draw
    // computer choice is rock means human loses
    // otherwise human wins 
  } else {
    if (computerChoice == "scissors") {
      result.textContent = "Draw!";
    } else if (computerChoice == "rock") {
      result.textContent = "You lose! Rock beats Scissors";
      computerScore++;
    } else {
      result.textContent = "You win! Scissors beats Paper";
      humanScore++;
    }
  }
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore == computerScore) {
      result.textContent = `Draw! You: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanScore > computerScore) {
      result.textContent = `You Win! You: ${humanScore} - Computer: ${computerScore}`;
    } else {
      result.textContent = `You Lose! You: ${humanScore} - Computer: ${computerScore}`;
    }
    humanScore = 0;
    computerScore = 0;
  }
}
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  const buttonType = button.id;
  button.addEventListener("click", () => playRound(buttonType))
})