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
        userChoice.value = 'Paper';
    });
    scissors.addEventListener('mousedown', (e) => {
        console.log('Scissors');
        userChoice.value = 'Scissors';
    });
};
getUserChoice();

function playRound() {

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
    const results = document.createElement('div');
    container.appendChild(results)
    const score = document.createElement('h2');
    results.textContent = `You chose ${userChoice.getAttribute('value')}, Computer chose ${computerChoice.getAttribute('value')}.`;
    score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
    container.appendChild(score);
    const msg = document.createElement('h1');
    container.appendChild(msg);
    msg.textContent = '';
    const declareWinner = document.createElement('h1');
    declareWinner.textContent = '';
    container.appendChild(declareWinner);
    
    function showResults() {

        if (userChoice.value === computerChoice.value) {
            msg.textContent = `Tie!`;
        }
        else if (userChoice.value === "Rock" && computerChoice.value === "Paper") {
            msg.textContent = `You lose! Paper beats rock!`; 
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Rock" && computerChoice.value === "Scissors") {
            msg.textContent = `You win! Rock beats scissors!`;
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Paper" && computerChoice.value === "Scissors") {
            msg.content = `You lose! Scissors beats paper!`;
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Paper" && computerChoice.value === "Rock") {
            msg.textContent = `You win! Paper beats rock!`;
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Scissors" && computerChoice.value === "Rock") {
            msg.textContent = `You lose! Rock beats scissors!`;
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        }
        else if (userChoice.value === "Scissors" && computerChoice.value === "Paper") {
            msg.textContent = `You win! Scissors beats paper!`;
            getScore();
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
        };
        function getScore() {
            if (userChoice.value === "Rock" && computerChoice.value === "Paper"
                || userChoice.value === "Paper" && computerChoice.value === "Scissors"
                || userChoice.value === "Scissors" && computerChoice.value === "Rock") {
                ++computerScore;
            }
            else if (userChoice.value === "Rock" && computerChoice.value === "Scissors"
                || userChoice.value === "Paper" && computerChoice.value === "Rock"
                || userChoice.value === "Scissors" && computerChoice.value === "Paper") {
                ++humanScore;
            };
        };
    }; 
    showResults();

function finalScore(humanScore, computerScore) {
    if (humanScore === 5 && computerScore === 5) {
        declareWinner.textContent = `It's a TIE GAME!`;
    };
    if (humanScore === 5 && computerScore < 5) {
        declareWinner.textContent = `Congratulations! You win!`;
    };
    if (computerScore === 5 && humanScore < 5) {
        declareWinner.textContent = `Better luck next time! Computer Wins!`;
    };
    if (computerScore !== 5 && humanScore !== 5){
        return
    };
};

finalScore(humanScore, computerScore);
};

//Display the running score, and announce a winner of the game once one player reaches
//5 points

