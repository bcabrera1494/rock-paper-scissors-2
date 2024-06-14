console.log("Let's play rock, paper, scissors!");


function playGame(){
    function playRound() { 
        function getHumanChoice() {
            
            let userInput = prompt("Choose rock, paper, or scissors", "Type your choice here").toLowerCase();
            
            /*let validateInput = userInput.includes("rock"||"paper"||"scissors");
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
            return getScore();

        }
        else if(humanChoice === "Rock" && computerChoice === "Paper") {
            console.log(`You lose! Paper beats rock!`);
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        }
        else if(humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log(`You win! Rock beats scissors!`);
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        }
        else if(humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log(`You lose! Scissors beats paper!`);
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        }
        else if(humanChoice === "Paper" && computerChoice === "Rock") {
            console.log(`You win! Paper beats rock!`);
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log(`You lose! Rock beats scissors!`);
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        }
        else if(humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log(`You win! Scissors beats paper!`)
            getScore();
            return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
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
            else 
            console.log(`Tie! play again`);
            return playRound();
        }

    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

}        

playGame();