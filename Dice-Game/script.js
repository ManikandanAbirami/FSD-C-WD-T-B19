const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollButton = document.getElementById("rollDice");
const winnerText = document.getElementById("winner");
const resetButton = document.getElementById("resetGame");

function rollDice() {
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  dice1.src = `./assets/dice${roll1}.svg.png`;
  dice2.src = `./assets/dice${roll2}.svg.png`;

  if (roll1 > roll2) {
    winnerText.textContent = " 🎉 Player 1 wins!";
  } else if (roll1 < roll2) {
    winnerText.textContent = " 🎉 Player 2 wins!";
  } else {
    winnerText.textContent = " 🙋 It's a tie!";
  }
}

function resetGame() {
  dice1.src = "./assets/dice1.svg.png";
  dice2.src = "./assets/dice1.svg.png";
  winnerText.textContent = "";
}

rollButton.addEventListener("click", rollDice);
resetButton.addEventListener("click", resetGame);
