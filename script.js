let count = 0;
const countDisplay = document.getElementById("count");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
let lucasCount = 0;
let sacrificed = false;

const lucasDisplay = document.getElementById("lucasCount");
const clickButton = document.getElementById("clickButton");
const sacrificeSection = document.getElementById("sacrificeSection");
const sacrificeButton = document.getElementById("sacrificeButton");
const sacrificeMessage = document.getElementById("sacrificeMessage");
const crisprTree = document.getElementById("crisprTree");

clickButton.addEventListener("click", () => {
  lucasCount++;
  updateDisplay();
});

function updateDisplay() {
  lucasDisplay.textContent = `LUCAS Clones: ${lucasCount}`;

  if (lucasCount >= 1000000 && !sacrificed) {
    sacrificeSection.style.display = "block";
  }
}

sacrificeButton.addEventListener("click", () => {
  if (lucasCount >= 1000000 && !sacrificed) {
    lucasCount -= 1000000;
    sacrificed = true;
    updateDisplay();
    sacrificeSection.style.display = "none";
    crisprTree.style.display = "block";
    sacrificeMessage.textContent = "You feel their pain echo through the void...";
  }
});

updateDisplay(); // Initial call
