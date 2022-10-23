function getComputerChoice(){
    let num = Math.floor(Math.random()*3 + 1);
    if (num == 1) return "rock";
    if (num == 2) return "paper";
    return "scissors";
}


function playRound(playerSelection, computerSelection = getComputerChoice()){
    playerSelection = playerSelection.toLowerCase();
   if (playerSelection == computerSelection)
    return "You tied" + ". You and the computer both chose " + playerSelection + ".";
   if (playerSelection == "rock" && computerSelection == "paper")
    return "You Lose! Paper beats rock.";
    if (playerSelection == "rock" && computerSelection == "scissors")
     return "You Win! Rock beats scissors.";
    if (playerSelection == "paper" && computerSelection == "rock")
     return "You Win! Paper beats Rock";
    if (playerSelection == "paper" && computerSelection == "scissors")
     return "You Lost! Scissors beat Paper.";
    if (playerSelection == "scissors" && computerSelection == "rock")
     return "You Lost! Rock beats scissors.";
    if (playerSelection == "scissors" && computerSelection == "paper")
     return "You Win! Scissors beat paper.";
    return "Something wrong with your input!";
}

function game(){
    for (i =0; i < 5; i++){
        playerSelection = prompt("What is your input?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}