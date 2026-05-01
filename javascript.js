console.log("JS radi");

const scoreboard = document.querySelector("#scoreboard");
const buttons = document.querySelectorAll(".rps-btn");
const winner = document.querySelector("#winner");
const resetBtn = document.querySelector("#reset-btn");

scoreboard.textContent = "Human: 0 Computer: 0";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let random = Math.random();

  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {

  if (humanScore === 5 || computerScore === 5) {
    return;
  }

  if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    humanScore++;
    scoreboard.textContent = `You win! Human: ${humanScore} Computer: ${computerScore}`;
  } else if (
    humanChoice === "scissors" && computerChoice === "rock" ||
    humanChoice === "rock" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "scissors"
  ) {
    computerScore++;
    scoreboard.textContent = `You lose! Human: ${humanScore} Computer: ${computerScore}`;
  } else {
    scoreboard.textContent = `Draw! Human: ${humanScore} Computer: ${computerScore}`;
  }

 
  if (humanScore === 5) {
    winner.textContent = "You won the game!";
    winner.style.display = "block";
    resetBtn.style.display = "block";
  } else if (computerScore === 5) {
    winner.textContent = "You lost the game!";
    winner.style.display = "block";
    resetBtn.style.display = "block";
  }
}



buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.textContent.toLowerCase();
    let computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
});

resetBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;

  scoreboard.textContent = "Human: 0 Computer: 0";
  winner.textContent = "";
  winner.style.display = "none";
  resetBtn.style.display = "none";
});