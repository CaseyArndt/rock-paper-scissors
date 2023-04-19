const rps = {0: 'Rock', 1: 'Paper', 2: "Scissors"};
const symbols = {0: '🪨', 1: '📄', 2: '✂️'}
const WIN_CONDITION = 5;
let pScore = 0;
let cScore = 0;

window.onload=function(){
    //const resetBtn = document.getElementById("resetBtn");
    const rockBtn = document.getElementById("rockBtn");
    const paperBtn = document.getElementById("paperBtn");
    const scissorsBtn = document.getElementById("scissorsBtn");
    const pIcon = document.getElementById("pChoice");
    const cIcon = document.getElementById("cChoice");
    const roundMsg = document.getElementById('roundMsg');
    const pWins = document.getElementById("pWins");
    const cWins = document.getElementById("cWins");

    //resetBtn.addEventListener("click", () => resetGame());
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
    roundMsg.textContent = "";
    //roundInfo.textContent = "";
    pIcon.textContent = "?";
    cIcon.textContent = "?";
    pWins.textContent = pScore;
    cWins.textContent = cScore;
}

function endGame() {
    let msg;
    if (pScore > cScore) {
        msg = "You have defeated the aliens!";
    } else {
        msg = "Oh no, you lost and humanity is doomed!";
    }
    const div = document.createElement("div");
    div.id = "endGame";
    const btn = document.createElement("button");
    btn.innerHTML = "Play Again?";
    btn.id = "resetBtn";
    btn.addEventListener("click", () => resetGame());
}

function playRound(pChoice) {
    let cChoice = getComputerChoice();

    console.log(pChoice, cChoice);    

    pIcon.textContent = symbols[pChoice];
    cIcon.textContent = symbols[cChoice];
    // Tie round
    if (pChoice == cChoice) {
        roundMsg.textContent = "Round draw!";
        //roundInfo.textContent = '';
    }
    // Player wins round
    else if ((pChoice == 0 && cChoice == 2) || 
        (pChoice == 1 && cChoice == 0) || 
        (pChoice == 2 && cChoice == 1)) {
        roundMsg.textContent = "Round win!"; 
        //roundInfo.textContent = rps[pChoice] + " beats " + rps[cChoice];
        pScore++;
    }
    // Player loses round
    else {
        roundMsg.textContent = "Round loss!"; 
        //roundInfo.textContent = rps[cChoice] + " beats " + rps[pChoice];
        cScore++;
    }
    pWins.textContent = pScore;
    cWins.textContent = cScore;

    if (isGameOver()) {
        endGame();
    }
}
