let computerScore = 0;
let userScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3 + 1);
    if (num == 1) return "rock";
    if (num == 2) return "paper";
    return "scissors";
}



function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "You tied" + ". You and the computer both chose " + playerSelection + ".";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats rock.";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        userScore++
        return "You Win! Rock beats scissors.";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        userScore++;
        return "You Win! Paper beats Rock";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lost! Scissors beat Paper.";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lost! Rock beats scissors.";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        userScore++
        return "You Win! Scissors beat paper.";
    }
    return "Something wrong with your input!";
}

function game() {
    for (i = 0; i < 5; i++) {
        playerSelection = prompt("What is your input?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}

function displayResult(){
    if (userScore > computerScore){
        console.log("You win in total!!! Your score is " + userScore + ", while the computer's score is " + computerScore + ".");
    }
    else if (userScore < computerScore){
        console.log("You lost in total :(. Your score is " + userScore + ", while the computer's score is " + computerScore + ".");
    }
    else
        console.log("You tied with the computer! You both scored " + userScore + " wins." );
}


const result = document.querySelector('p');

const buttons = document.querySelectorAll('button');
buttons.forEach( (button) => {
    button.addEventListener('click', () => {
        result.textContent = playRound(button.id.toString());
    });
});