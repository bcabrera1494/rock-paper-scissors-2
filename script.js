console.log("Let's play rock, paper, scissors!");


function playGame(){
    function playRound() { 
        function getHumanChoice() {
            
            let userInput = prompt("Choose rock, paper, or scissors", "Type your choice here").toLowerCase();
            
            let validateInput = userInput.includes("rock"||"paper"||"scissors");
            console.log(validateInput); 
            do {

             prompt("I said, rock, paper, or scissors!");
                validateInput;
            }*/
                while (validateInput = false);
    
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
            let randomNumber = (Math.random()*3);
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
    
        if (humanChoice === computerChoice) {
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
            return console.log(`You win! Scissors beats paper!`);
            }
        
        function getScore() {
            if (humanChoice === "Rock" && computerChoice === "Paper"
                || humanChoice === "Paper" && computerChoice === "Scissors"
                || humanChoice === "Scissors" && computerChoice === "Rock") {
                return ++computerScore
            }
            else if (humanChoice === "Rock" && computerChoice === "Scissors"
                || humanChoice === "Paper" && computerChoice === "Rock"
                || humanChoice === "Scissors" && computerChoice === "Paper") {
                return ++humanScore
                }
            else return playRound();
        }

    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}        

playGame();