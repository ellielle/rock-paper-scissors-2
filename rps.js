const moves = ['rock', 'paper', 'scissors'];
const rock = document.querySelector(".btn-rock");
const scissors = document.querySelector(".btn-scissors");
const paper = document.querySelector(".btn-paper");
const container = document.querySelector(".container");
const results = document.querySelector(".results");
const score = document.querySelector(".score");
const replay = document.querySelector(".replay");
results.textContent = "Start Game";
replay.style.display = "none";

let playerScore = 0;
let computerScore = 0;

	  
function computerPlay() {
  return moves[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    displayResults("Draw!")
  } else {
    if (checkPlayerWin(playerSelection, computerSelection)) {
      playerScore++;
      displayResults(`You win, ${playerSelection} beats ${computerSelection}!`);
    } else {
      computerScore++;
      displayResults(`You lose, ${computerSelection} beats ${playerSelection}!`);
    }
  }
  changeScore();
  checkWin();
}

function checkPlayerWin(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "scissors") { 
      return true;
    } else { return false }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return true;
    } else { return false }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return true;
    } else { return false }
  }
}

function displayResults(message) {
  results.textContent = message;
}

function changeScore() {
  if (playerScore != 5 && computerScore != 5) {
    score.textContent = `Player: ${playerScore} : Computer: ${computerScore}`;
  }
}

function checkWin() {
  if (playerScore >= 5) {
    score.textContent = "You win the game!";
    toggleReplayButton();
  } else if (computerScore >= 5) {
    score.textContent = "You lose the game!";
    toggleReplayButton();
  }
}

function toggleReplayButton() {
  if (replay.style.display === "none") {
    replay.style.display = "block";
  } else {
    replay.style.display = "none";
  }
}
  

rock.addEventListener('click', (e) => {
  playRound("rock", computerPlay());
});

paper.addEventListener('click', (e) => {
  playRound("paper", computerPlay());
});

scissors.addEventListener('click', (e) => {
  playRound("scissors", computerPlay());
});

replay.addEventListener('click', (e) => {
  playerScore = 0;
  computerScore = 0;
  score.textContent = "";
  results.textContent = "Start Game";
  toggleReplayButton();
});
