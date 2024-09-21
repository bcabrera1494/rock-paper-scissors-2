alert("Let's play rock, paper, scissors!");
let humanScore = 0;
let computerScore = 0;

function playGame() {
    function playRound() {
        rock.addEventListener('click', (e) => {
            console.log('rock');
        });
        paper.addEventListener('click', (e) => {
            console.log('paper');
        });
        scissors.addEventListener('click', (e) => {
            console.log('scissors');
        })
        // function getHumanChoice() { 
        //     //need to rework this function so that it responds to clicking the buttons
        //     // userInput needs to change to alert, then event listener for click
        //     console.log("Choose rock, paper, or scissors");
        //     if (userInput === "rock") { //add event listener for click rock
        //         return "Rock";
        //     }
        //     else if (userInput === "paper") { //add event listener for click paper
        //         return "Paper";
        //     }
        //     else if (userInput === "scissors") { //add event listener for click scissors
        //         return "Scissors";
        //     }
        //     else return getHumanChoice();
        // }
        //     function getComputerChoice() {
        //         let randomNumber = (Math.random() * 3);
        //         if (randomNumber <= 1) {
        //             return "Rock";
        //         }
        //         else if (randomNumber >= 1 <= 2) {
        //             return "Paper";
        //         }
        //         else if (randomNumber >= 2 <= 3) {
        //             return "Scissors";
        //         }
        //     }
        //     var humanChoice = getHumanChoice();
        //     var computerChoice = getComputerChoice();

        //     console.log(`You chose ${humanChoice}, Computer chose ${computerChoice}`); //Change all console.log to alerts
        //     if (humanChoice === computerChoice) {
        //         return console.log(`Tie!`); // alert
        //     }
        //     else if (humanChoice === "Rock" && computerChoice === "Paper") {
        //         console.log(`You lose! Paper beats rock!`); // alert
        //         getScore();
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`); // alert
        //     }
        //     else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        //         console.log(`You win! Rock beats scissors!`); // alert
        //         getScore(); //alert
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
        //     }
        //     else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        //         console.log(`You lose! Scissors beats paper!`); // alert
        //         getScore();
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`); // alert
        //     }
        //     else if (humanChoice === "Paper" && computerChoice === "Rock") {
        //         console.log(`You win! Paper beats rock!`); // alert
        //         getScore();
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`); // alert
        //     }
        //     else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        //         console.log(`You lose! Rock beats scissors!`); // alert
        //         getScore();
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`); // alert
        //     }
        //     else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        //         console.log(`You win! Scissors beats paper!`) // alert
        //         getScore();
        //         return console.log(`Human: ${humanScore}, Computer: ${computerScore}`); // alert
        //     }
        //     function getScore() {
        //         if (humanChoice === "Rock" && computerChoice === "Paper"
        //             || humanChoice === "Paper" && computerChoice === "Scissors"
        //             || humanChoice === "Scissors" && computerChoice === "Rock") {
        //             return ++computerScore
        //         }
        //         else if (humanChoice === "Rock" && computerChoice === "Scissors"
        //             || humanChoice === "Paper" && computerChoice === "Rock"
        //             || humanChoice === "Scissors" && computerChoice === "Paper") {
        //             return ++humanScore
        //         }
        //     }
        // }
        //Remove logic that plays exactly 5 rounds per lesson directions        
        // for (var round = 0; round < 5; ++round) {
        //     playRound();
    //     }
}
//Append buttons to the body of the HTML
const container = document.querySelector("body");
//Create button for rock
const rock = document.createElement('button')
rock.textContent = 'Rock';
//Create button for paper
const paper = document.createElement('button');
paper.textContent = 'Paper';
//Create button for scissors
const scissors = document.createElement('button');
scissors.textContent = 'Scissors';

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

//Add event listener to buttons that call playRound function with the correct playerSelection 
//every time the button is clicked (can keep console.log for this step)

rock.addEventListener('click', playRound());
paper.addEventListener('click', playRound());
scissors.addEventListener('click', playRound());

//Add a div for displaying results and change all console.log into DOM methods
const results = document.createElement('div');
container.appendChild(results)
results.textContent = 'Score: ';
//Display the running score, and announce a winner of the game (alert) once one player reaches
//5 points
//Will likely have to refactor original code to make it work

playGame();

// function declareWinner(humanScore, computerScore) {
//     if (humanScore === computerScore) {
//         return console.log(`It's a TIE GAME!`);
//     }
//     else if (humanScore > computerScore) {
//         return console.log(`Congratulations! You win!`);
//     }
//     else if (computerScore > humanScore) {
//         return console.log(`Better luck next time! Computer Wins!`);
//     }
// }

// declareWinner();