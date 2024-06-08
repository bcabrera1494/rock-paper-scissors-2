console.log("Let's play rock, paper, scissors!");

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

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper, or scissors" | "Type your choice here").toLowerCase();
    switch (userInput) {
        case "rock":
            console.log("Rock");
            break;
        case "paper":
            console.log("Paper")
    }
}