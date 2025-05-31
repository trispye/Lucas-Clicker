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
  let crisprUnlocked = false;

function checkForCrisprUnlock() {
  if (clones >= 900000 && !crisprUnlocked) {
    document.getElementById("crisprUnlock").style.display = "block";
    document.getElementById("crisprUnlock").title = "He watches. Prove your dedication.";
  }
}

document.getElementById("crisprUnlock").onclick = function () {
  if (clones >= 1000000 && !crisprUnlocked) {
    let confirmSacrifice = confirm("Are you prepared to sacrifice 1,000,000 clones to unlock the forbidden CRISPR Tree?");
    if (confirmSacrifice) {
      clones = 0;
      crisprUnlocked = true;
      updateCloneDisplay();
      document.getElementById("crisprUnlock").style.display = "none";
      document.getElementById("crisprTree").style.display = "block";
      alert("The sacrifice has been accepted. The CRISPR Tree awakens...");
      // Optional: trigger screen shake or glitch animation
    }
  } else {
    alert("You are not yet worthy.");
  }
};

updateDisplay(); // Initial call
