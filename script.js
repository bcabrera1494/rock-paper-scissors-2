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

computerScore = 0
humanScore = 0


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
        //++computerScore;
        console.log("You lose! Paper beats rock!");
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        //++humanScore;
        console.log("You win! Rock beats scissors!");
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        //++computerScore;
        console.log("You lose! Scissors beats paper!");
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        //++humanScore;
        console.log("You win! Paper beats rock!");
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        //++computerScore
        console.log("You lose! Rock beats scissors!");
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        //++humanScore
        console.log("You win! Scissors beats paper!");
    }
}

playRound();




