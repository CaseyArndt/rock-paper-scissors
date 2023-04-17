const rps = {0: 'Rock', 1: 'Paper', 2: "Scissors"};
const symbols = {0: '🪨', 1: '📄', 2: '✂️'}
const WIN_CONDITION = 5;
let pScore = 0;
let cScore = 0;

window.onload=function(){
    const resetBtn = document.getElementById("resetBtn");
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");
    const pIcon = document.getElementById("pChoice");
    const cIcon = document.getElementById("cChoice");
    const roundMsg = document.getElementById('roundMsg');
    const pWins = document.getElementById("pWins");
    const cWins = document.getElementById("cWins");

    resetBtn.addEventListener("click", () => resetGame());
    rockBtn.addEventListener("click", () => playRound(0));
    paperBtn.addEventListener("click", () => playRound(1));
    scissorsBtn.addEventListener("click", () => playRound(2));
}
  

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}

function isGameOver() {
    if (pScore == 5 || cScore == 5) {
        return true;
    } 
    return false;
}

function resetGame() {
    pScore = 0;
    cScore = 0;
    roundMsg.textContent = ".";
    pIcon.textContent = "...";
    cIcon.textContent = "...";
    pWins.textContent = pScore;
    cWins.textContent = cScore;
}

function playRound(pChoice) {
    let cChoice = getComputerChoice();

    console.log(pChoice, cChoice);    

    pIcon.textContent = symbols[pChoice];
    cIcon.textContent = symbols[cChoice];
    // Tie round
    if (pChoice == cChoice) {
        roundMsg.textContent = "Round draw!";
    }
    // Player wins round
    else if ((pChoice == 0 && cChoice == 2) || 
        (pChoice == 1 && cChoice == 0) || 
        (pChoice == 2 && cChoice == 1)) {
        roundMsg.textContent = "Round win! " + symbols[pChoice] + " beats " + symbols[cChoice];
        pScore++;
    }
    // Player loses round
    else {
        roundMsg.textContent = "Round loss! " + symbols[cChoice] + " beats " + symbols[pChoice];
        cScore++;
    }
    pWins.textContent = pScore;
    cWins.textContent = cScore;

    if (isGameOver()) {
        endGame();
    }
}

function game() {
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
}
