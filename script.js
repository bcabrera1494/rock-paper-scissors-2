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

    if(humanChoice === "Rock" && computerChoice === "Rock"
        || humanChoice === "Paper" && computerChoice === "Paper"
        || humanChoice === "Scissors" && computerChoice === "Scissors") {
        return console.log(`Tie! Play again. ${score}`);
    }
    else if(humanChoice === "Rock" && computerChoice === "Paper") {
        return console.log(`You lose! Paper beats rock! ${score}`);
    }
    else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        return console.log(`You win! Rock beats scissors! ${score}`);
    }
    else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        return console.log(`You lose! Scissors beats paper! ${score}`);
    }
    else if(humanChoice === "Paper" && computerChoice === "Rock") {
        return console.log(`You win! Paper beats rock! ${score}`);
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        return console.log(`You lose! Rock beats scissors!" ${score}`);
    }
    else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        return console.log(`You win! Scissors beats paper!" ${score}`);
    }
    function getScore(humanChoice, computerChoice) {
    let score = getScore();
        let humanScore = 0;
        let computerScore = 0;
        switch (humanChoice, computerChoice)  {
            case "Rock" && "Rock"
            || "Paper" && "Paper"
            || "Scissors" && "Scissors":
                return console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
        
            case "Rock" && "Scissors"
            || "Paper" && "Rock"
            || "Scissors" && "Paper":
                return console.log(`Human score: ${++humanScore}, Computer score: ${computerScore}`);
            
            case "Rock" && "Paper"
            || "Paper" && "Scissors"
            || "Scissors" && "Rock":
                return console.log(`Human score: ${humanScore}, Computer score: ${++computerScore}`);
        }
    }        
}
/*
}
function getScore() {
    let humanScore = 0;
    let computerScore = 0;
    var result = playRound();
    if (result === console.log("You win! Rock beats scissors!")
        || result === console.log("You win! Paper beats rock!")
        || result === console.log("You win! Scissors beats paper!")) {
        return console.log(`Human score: ${(++humanScore)}, Computer score: ${computerScore}`);
    }
    else if (result === console.log("You lose! Paper beats rock!")
        || result === console.log("You lose! Scissors beats paper!")
        || result === console.log("You lose! Rock beats scissors!")) {
        return console.log(`Human score: ${humanScore}, Computer score: ${(++computerScore)}`);
    }
    else if (result === console.log("Tie! Play again.")) {
        return console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    }
}