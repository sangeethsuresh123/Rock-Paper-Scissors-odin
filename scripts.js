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

// declare a number variable choice for storing user choice
// get user input and store in choice
// return choice 
function getHumanChoice() {
  let choice = prompt("Enter your choice(rock,paper or scissors): ");
  return choice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    // convert humanchoice to lowercase for standardization
    humanChoice = humanChoice.toLowerCase();  //You lose! Paper beats Rock
    // if human choice is rock,
    // computer choice is rock means its a draw
    // computer choice is paper means human loses
    // otherwise human wins 
    if (humanChoice == "rock") {
      if (computerChoice == "rock") {
        console.log("Draw!");
      } else if (computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
      } else {
        console.log("You win! Rock beats Scissors");
        humanScore++;
      }
      // if human choice is paper,
      // computer choice is paper means its a draw
      // computer choice is scissors means human loses
      // otherwise human wins 
    } else if (humanChoice == "paper") {
      if (computerChoice == "paper") {
        console.log("Draw!");
      } else if (computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
      } else {
        console.log("You win! Paper beats Rock");
        humanScore++;
      }
      // otherwise(human choice is scissors),
      // computer choice is scissors means its a draw
      // computer choice is rock means human loses
      // otherwise human wins 
    } else {
      if (computerChoice == "scissors") {
        console.log("Draw!");
      } else if (computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
      } else {
        console.log("You win! Scissors beats Paper");
        humanScore++;
      }
    }
  }

  // Loop human selection, computer selection and round play 5 times
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // if human score is equal to computer score, then draw
  // if human score is more than computer score, then human wins
  // if human score is less than computer score, then human loses
  if (humanScore == computerScore) {
    alert(`Draw! You: ${humanScore} - Computer: ${computerScore}`);
  } else if (humanScore > computerScore) {
    alert(`You Win! You: ${humanScore} - Computer: ${computerScore}`);
  } else {
    alert(`You Lose! You: ${humanScore} - Computer: ${computerScore}`);
  }
}

playGame();