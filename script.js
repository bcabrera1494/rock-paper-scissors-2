console.log("Let's play rock, paper, scissors!");

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors", "Type your choice here").toLowerCase();
    let invalidChoice = !!("rock" || "paper" || "scissors")
    while (userInput = invalidChoice) {
        console.log(userInput);
        break;
    }; 

    switch (userInput) {
        case "rock":
            console.log("Rock");
            break;
        case "paper":
            console.log("Paper");
            break;
        case "scissors":
            console.log("Scissors");
            break;
    }
}

const humanChoice = getHumanChoice();

console.log(humanChoice);

function getComputerChoice() {
    let randomNumber = (Math.random()*3)
    if (randomNumber <=1) {
        return "Computer chose Rock";
    }
    else if (randomNumber >=1 <=2 ) {
        return "Computer chose Paper";
    }
    else if (randomNumber >=2 <=3) {
        return "Computer chose Scissors";
    }
}
const computerSelection = getComputerChoice();

console.log(computerSelection);

function getScore(computerScore, humanScore) {
    return `Human score: ${humanScore}, Computer Score: ${computerScore}`;
}
computerScore = 0
humanScore = 0

function playRound(humanSelection, computerSelection) {    
    if(humanSelection === "Rock" && computerSelection === "Rock" 
    || humanSelection === "Paper" && computerSelection === "Paper" 
    || humanSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Tie game!");
    }
    else if(humanSelection === "Rock" && computerSelection === "Paper") {
        ++computerScore;
        console.log("You lose! Paper beats rock!");
    }
    else if(humanSelection === "Rock" && computerSelection === "Scissors") {
        ++humanScore;
        console.log("You win! Rock beats scissors!");
    }
    else if(humanSelection === "Paper" && computerSelection === "Scissors") {
        ++computerScore;
        console.log("You lose! Scissors beats paper!");
    }
    else if(humanSelection === "Paper" && computerSelection === "Rock") {
        ++humanScore;
        console.log("You win! Paper beats rock!");
    }
    else if(humanSelection === "Scissors" && computerSelection === "Rock") {
        ++computerScore
        console.log("You lose! Rock beats scissors!");
    }
    else if(humanSelection === "Scissors" && computerSelection === "Paper") {
        ++humanScore
        console.log("You win! Scissors beats paper!");
    }
   
