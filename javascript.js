console.log("Hello World!");


function getComputerChoice () {
    let random = Math.random ();
    if (random < 0.33) { 
        return "rock"; 
    } else if (random < 0.66) { 
        return "paper"; 
    } else {
        return "scissors"; }
}



function getHumanChoice () {
    let choice = prompt("Rock, paper or scissors?");
    return choice;
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) { humanScore++;
            console.log("You win!")
        } else if (
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors"
        ) {
            computerScore++;
            console.log("You lose!")
        } else {
            console.log("Draw")
        }
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    console.log("Human score:", humanScore);
    console.log("Computer score:", computerScore);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("The game is a draw!");
    }

}

playGame() 
    

