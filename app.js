const btns = document.querySelectorAll(".btn");
const container = document.querySelector(".container");
const upperContainer = document.querySelector(".upper-container");
const roundWinnerPara = document.querySelector(".round-winner");
const lowerContainer = document.querySelector(".lower-container");
const leftContainer = document.querySelector(".left-container");
const rightContainer = document.querySelector(".right-container");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
let playerScoreEl = document.querySelector(".player-score");
let computerScoreEl = document.querySelector(".computer-score");
const newPara = document.createElement("p");
const resetBtn = document.createElement("button");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  while (playerScore < 5 && computerScore < 5) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      ++playerScore;
      return "You win, human. Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      ++computerScore;
      return "You lost, human. Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      ++playerScore;
      return "You win, human. Paper beats rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      ++computerScore;
      return "You lost, human. Scissors beats paper";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      ++playerScore;
      return "You win, human. Scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      ++computerScore;
      return "You lost, human. Rock beats scissors";
    } else {
      return "No one wins this round. Draw this time!";
    }
  }
  btns.forEach((btn) => {
    btn.removeEventListener("click", outputResult);
  });

  checkWinner();
  resetGame();
}

function game() {
  btns.forEach((btn) => {
    btn.addEventListener("click", outputResult);
    roundWinnerPara.textContent = "Here you will see the results of each round";
  });
}

function outputResult(e) {
  let playerSelection = e.target.firstChild.textContent;
  let computerSelection = getComputerChoice();

  roundWinnerPara.textContent = playRound(playerSelection, computerSelection);
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;

  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;

  upperContainer.appendChild(roundWinnerPara);
  leftContainer.appendChild(playerChoice);
  rightContainer.appendChild(computerChoice);
  container.appendChild(upperContainer);
  container.appendChild(lowerContainer);
}

function checkWinner() {
  newPara.classList.add("new-para");
  newPara.textContent =
    playerScore === 5
      ? `You win the game! Wanna play again?`
      : `Computer win the game! Wanna play again?`;
  return upperContainer.appendChild(newPara);
}

function resetGame() {
  resetBtn.textContent = "Play again";
  resetBtn.classList.add("reset-btn");
  upperContainer.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    playerChoice.textContent = "";
    computerChoice.textContent = "";
    newPara.textContent = "";
    game();
  });
}

game();
