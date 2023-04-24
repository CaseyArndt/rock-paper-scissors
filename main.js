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
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const modalClose = document.getElementById("modalClose");

    resetBtn.addEventListener("click", () => resetGame());
    rockBtn.addEventListener("click", () => handleClick(0));
    paperBtn.addEventListener("click", () => handleClick(1));
    scissorsBtn.addEventListener("click", () => handleClick(2));
    modalClose.addEventListener("click", () => closeModal());
}
  

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3);
    return computerSelection;
}

function isGameOver() {
    return (pScore >= WIN_CONDITION || cScore >= WIN_CONDITION);
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
    closeModal();
}

function endGame() {
    let title, content;
    if (pScore > cScore) {
        title = "You won!";
        content = "Winner, winner, chicken dinner!\n" +
            "The aliens have been defeated and are scrambling to retreat to their home planet.";
    } else {
        title = "You lost!";
        content = "Oh no, the Earth and humanity are doomed!" +
        " Unless you can manage to convince the aliens to play again...";
    }
    modalTitle.textContent = title;
    modalContent.textContent = content;
    
    openModal();
}

function openModal() {
    modal.classList.remove("inactive");
}

function closeModal() {
    modal.classList.add("inactive");
}

function handleClick(pChoice) {
    if (isGameOver()) {
        openModal();
    }
    else {
        playRound(pChoice);
    }
}

function playRound(pChoice) {
    let cChoice = getComputerChoice();

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
