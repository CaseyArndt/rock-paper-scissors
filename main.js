const rps = {0: 'Rock', 1: 'Paper', 2: "Scissors"};
const WIN_CONDITION = 5;
game();

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // Tie round
    if (playerSelection == computerSelection) {
        return 0;
    }
    // Player wins round
    if ((playerSelection == 0 && computerSelection == 2) || 
        (playerSelection == 1 && computerSelection == 0) || 
        (playerSelection == 2 && computerSelection == 1)) {
        return 1;
    }
    // Player loses round
    return -1;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < WIN_CONDITION && computerScore < WIN_CONDITION) {
        let playerSelection = prompt("Enter your pick: ");
        let computerSelection = getComputerChoice();
        let res = playRound(playerSelection, computerSelection);

        if (res == 0) {
            console.log("Tie round!");
            continue;
        }
        else if (res == 1) {
            console.log("You win! " + rps[playerSelection] + " beats " + rps[computerSelection]);
            playerScore++;
        }
        else {
            console.log("You lose! " + rps[computerSelection] + " beats " + rps[playerSelection]);
            computerScore++;
        }
    }
    return;

}