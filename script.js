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
rock.setAttribute('id', 'r');
container.appendChild(paper);
paper.setAttribute('id', 'p');
container.appendChild(scissors);
scissors.setAttribute('id', 's');

//Add event listener to buttons that call playRound function with the correct playerSelection 
//every time the button is clicked (can keep console.log for this step)

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => { //Maybe need to use mouse down, then mouse up to fire within playRound"
        playRound();
    });
});

const userChoice = document.createElement('data');
userChoice.value = '';
const computerChoice = document.createElement('data');
computerChoice.value = '';

function getUserChoice() {
    rock.addEventListener('mousedown', (e) => {
        console.log('Rock');
        userChoice.value = 'Rock';
    })
    paper.addEventListener('mousedown', (e) => {
        console.log('Paper');
        userChoice.value = 'Paper'
    });
    scissors.addEventListener('mousedown', (e) => {
        console.log('Scissors');
        userChoice.value = 'Scissors'
    });
};
getUserChoice();

function playRound() {
    // This is the switch case logic that is supposed to delegate event. Doesn't work.
    // buttons.addEventListener('mouseup', (event) => { //Maybe need to use mouse up here to activate user choice logging
    //     let target = event.target;

    // switch(target.id) {
    //     case 'r':
    //         console.log('Rock');
    //         break;
    //     case 'p':
    //         console.log('Paper');
    //         break;
    //     case 's':
    //         console.log('scissors');
    //         break;
    //     }
    // });
    function getComputerChoice() {
        let randomNumber = (Math.random() * 3);
        if (randomNumber <= 1) {
            console.log("Computer chose Rock");
            computerChoice.value = 'Rock';
        }
        else if (randomNumber >= 1 <= 2) {
            console.log("Computer chose Paper")
            computerChoice.value = 'Paper';
        }
        else if (randomNumber >= 2 <= 3) {
            console.log("Computer chose Scissors");
            computerChoice.value = 'Scissors';
        };
    };
    getComputerChoice();
    //Add a div for displaying results and change all console.log into DOM methods
    function showResults() {
        const results = document.createElement('div');
        container.appendChild(results)
        const score = document.createElement('h1');
        results.textContent = `You chose ${userChoice.getAttribute('value')}, Computer chose ${computerChoice.getAttribute('value')}.`;
        score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        container.appendChild(score);
        const msg = document.createElement('h1');
        container.appendChild(msg);
        msg.textContent = '';

        if (userChoice.value === computerChoice.value) {
            msg.textContent = `Tie!`;
        }
        else if (userChoice.value === "Rock" && computerChoice.value === "Paper") {
            msg.textContent = `You lose! Paper beats rock!`; 
    //         getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Rock" && computerChoice.value === "Scissors") {
            msg.textContent = `You win! Rock beats scissors!`;
            // getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Paper" && computerChoice.value === "Scissors") {
            msg.content = `You lose! Scissors beats paper!`;
    //         getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Paper" && computerChoice.value === "Rock") {
            msg.textContent = `You win! Paper beats rock!`;
    //         getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Scissors" && computerChoice === "Rock") {
            msg.textContent = `You lose! Rock beats scissors!`;
    //         getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Scissors" && computerChoice === "Paper") {
            msg.textContent = `You win! Scissors beats paper!`;
    //         getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        };
    //     function getScore() {
    //         if (userChoice.value === "Rock" && computerChoice === "Paper"
    //             || userChoice.value === "Paper" && computerChoice === "Scissors"
    //             || userChoice.value === "Scissors" && computerChoice === "Rock") {
    //             return ++computerScore
    //         }
    //         else if (userChoice.value === "Rock" && computerChoice === "Scissors"
    //             || userChoice.value === "Paper" && computerChoice === "Rock"
    //             || userChoice.value === "Scissors" && computerChoice === "Paper") {
    //             return ++humanScore
    //         };
    //     };
    // };
};
showResults();

};






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