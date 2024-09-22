alert("Let's play rock, paper, scissors!");
let humanScore = 0;
let computerScore = 0;

//Append buttons to the body of the HTML
const container = document.querySelector("body");
//Create button for rock
const rock = document.createElement('button');
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

const buttons = document.querySelectorAll('button');

buttons.forEach ((button) => {
    button.addEventListener('click', () => { 
    playRound();
    });
});

const userChoice = document.createElement('data');
userChoice.value = ''

function playRound() {
    // let humanChoice = document.querySelectorAll('button'); // This is the switch case logic that is supposed to delegate event. Doesn't work.
    // humanChoice.addEventListener('click', (event) => {
    //     let target = event.target;

    // switch(target.id) {
    //     case 'rock':
    //         console.log('Rock');
    //         break;
    //     case 'paper':
    //         console.log('Paper');
    //         break;
    //     case 'scissors':
    //         console.log('scissors');
    //         break;
    //     }
    // });
    const userChoice = document.createElement('data');
    userChoice.value = ''
    buttons.appendChild(userChoice);
    rock.addEventListener('click', (e) => {
        console.log('Rock');
        userChoice.value = 'Rock';
        return userChoice.getAttribute('value');
    })
    paper.addEventListener('click', (e) => {
        console.log('Paper');
        userChoice.value = 'Paper'
        return userChoice.getAttribute('value');
    });
    scissors.addEventListener('click', (e) => {
        console.log('Scissors');
        userChoice.value = 'Scissors'
        return userChoice.getAttribute('value');
    });
    const computerChoice = document.createElement('data');
    computerChoice.value = '';
    function getComputerChoice() {

        let randomNumber = (Math.random() * 3);
        if (randomNumber <= 1) {
            console.log("Computer chose Rock");
            computerChoice.value = 'Rock';
            return computerChoice.getAttribute('value');
        }
        else if (randomNumber >= 1 <= 2) {
            console.log("Computer chose Paper")
            computerChoice.value = 'Paper';
            return computerChoice.getAttribute('value');
        }
        else if (randomNumber >= 2 <= 3) {
            console.log("Computer chose Scissors");
            computerChoice.value = 'Scissors';
            return computerChoice.getAttribute('value');
        };
    };
getComputerChoice();

//If button is clicked, continue to show results. Else, prompt user to click? Focus user on buttons?

    function showResults() {
        const results = document.createElement('div');
        container.appendChild(results)
        results.textContent = `You chose ${userChoice.getAttribute('value')}, Computer chose ${computerChoice.getAttribute('value')}.`;
    
    };
showResults();
    //Add a div for displaying results and change all console.log into DOM methods
   
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
};




//Add a div for displaying results and change all console.log into DOM methods
const results = document.createElement('div');
container.appendChild(results)
results.textContent = 'Current Score:';
//Display the running score, and announce a winner of the game (alert) once one player reaches
//5 points
//Will likely have to refactor original code to make it work

// playGame();

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