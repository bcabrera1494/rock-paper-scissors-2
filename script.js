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
        default:
            console.log(userInput);
    }
}
let humanTurn = getHumanChoice();
console.log(humanTurn);

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

let computerTurn = getComputerChoice();

console.log(computerTurn);

