console.log("Let's play rock, paper, scissors!");
/*const choices = ["rock", "paper", "scissors"];*/

/*function promptAgain(userInput) {
    console.log(userInput);
    while (userInput = false) {
        console.log(userInput);
    }
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


    var humanChoice = getHumanChoice();
    var computerChoice = getComputerChoice(); 

    console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`);
    
    let humanScore = 0;
    let computerScore = 0;

    if (humanChoice === "Rock" && computerChoice === "Rock"
        || humanChoice === "Paper" && computerChoice === "Paper"
        || humanChoice === "Scissors" && computerChoice === "Scissors") {
        return console.log(`Tie! Play again. Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        let computerWins = (++computerScore);
        return console.log(`You lose! Paper beats rock! Human score: ${humanScore}, Computer score: ${computerWins}`);
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        let humanWins = (++humanScore);
        return console.log(`You win! Rock beats scissors! Human score: ${humanWins}, Computer score: ${computerScore}`);
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        let computerWins = (++computerScore);
        return console.log(`You lose! Scissors beats paper! Human score: ${humanScore}, Computer score: ${computerWins}`);
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        let humanWins = (++humanScore);
        return console.log(`You win! Paper beats rock! Human score: ${humanWins}, Computer score: ${computerScore}`);
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        let computerWins = (++computerScore);
        return console.log(`You lose! Rock beats scissors! Human score: ${humanScore}, Computer score: ${computerWins}`);
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        let humanWins = (++humanScore);
        return console.log(`You win! Scissors beats paper! Human score: ${humanWins}, Computer score: ${computerScore}`);
    }

}
