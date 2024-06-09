console.log("Let's play rock, paper, scissors!");
/*const choices = ["rock", "paper", "scissors"];*/

/*function promptAgain(userInput) {
    console.log(userInput);
    while (userInput = false) {
        console.log(userInput);
    }
}*/

/*function getScore(computerScore, humanScore) {
    return `Human score: ${humanScore}, Computer Score: ${computerScore}`;
}*/


function playRound() { 
    function getHumanChoice() {
        let userInput = prompt("Choose rock, paper, or scissors", "Type your choice here").toLowerCase();
        if (userInput === "rock") {
            return "Rock";
        }
        else if (userInput === "paper") {
            return "Paper";
        }
        else if (userInput === "scissors") {
            return "Scissors"
        }
    }
    function getComputerChoice() {
        let randomNumber = (Math.random()*3)
        if (randomNumber <=1) {
            return "Rock";
        }
        else if (randomNumber >=1 <=2 ) {
            return "Paper";
        }
        else if (randomNumber >=2 <=3) {
            return "Scissors";
        }
    }
    getComputerChoice();

    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice(); 

    console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`)

    if(humanChoice === "Rock" && computerChoice === "Rock"
        || humanChoice === "Paper" && computerChoice === "Paper"
        || humanChoice === "Scissors" && computerChoice === "Scissors") {
        return console.log("Tie! Play again.")
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats rock!");
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats scissors!");
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats paper!");
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats rock!");
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats scissors!");
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats paper!");
    }
   

    }

playRound();

/*
function getScore() {
    let humanScore = 0;
    let computerScore = 0;
    if (playRound() === "You win! Rock beats scissors!"
        || playRound() === "You win! Paper beats rock!"
        || playRound() === "You win! Scissors beats paper!") {
        return `Human score: ${(++humanScore)}, Computer score: ${computerScore}`;
    }
    else if (playRound() === "You lose! Paper beats rock!"
        || playRound() === "You lose! Scissors beats paper!"
        || playRound() === "You lose! Rock beats scissors!") {
        return `Human score: ${humanScore}, Computer score: ${(++computerScore)}`;
    }
    else if (playRound() === "Tie! Play again.") {
        return `Human score: ${humanScore}, Computer score: ${computerScore}`
    }
}
*/

    


