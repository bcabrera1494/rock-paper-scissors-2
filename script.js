console.log("Let's play rock, paper, scissors!");
let humanScore = 0;
let computerScore = 0;

function playGame(){    
    function playRound() { 
        function getHumanChoice() {
            let userInput = prompt ("Choose rock, paper, or scissors", "Type your choice here").toLowerCase();
                if (userInput === "rock") {
                return "Rock";
                }
                else if (userInput === "paper") {
                return "Paper";
                }
                else if (userInput === "scissors") {
                return "Scissors";
                }
                else return getHumanChoice();
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
        if (humanChoice === computerChoice) {
            return console.log(`Tie!`);
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
        }      
        }
    //Remove logit that plays exactly 5 rounds per lesson directions        
    // for (var round = 0; round < 5; ++round) {
    //     playRound();
    //     }
}

playGame();

function declareWinner(humanScore, computerScore) {
    if (humanScore === computerScore) {
    return console.log(`It's a TIE GAME!`);
    }
    else if (humanScore > computerScore) {
    return console.log(`Congratulations! You win!`);
            }
    else if (computerScore > humanScore){
    return console.log(`Better luck next time! Computer Wins!`);
            } 
    } 

declareWinner();