let clones = 0;
let totalPPS = 0;
let sacrificed = false;
let crisprUnlocked = false;

const cloneDisplay = document.getElementById("count"); // Lucas clones counter
const clickButton = document.getElementById("clickButton");
const sacrificeSection = document.getElementById("sacrificeSection");
const sacrificeButton = document.getElementById("sacrificeButton");
const sacrificeMessage = document.getElementById("sacrificeMessage");
const crisprTree = document.getElementById("crisprTree");
const crisprUnlock = document.getElementById("crisprUnlock");

// Manual click to gain clones
clickButton.addEventListener("click", () => {
  clones++;
  updateDisplay();
});

// Passive generation every second
setInterval(() => {
  clones += totalPPS;
  updateDisplay();
  checkForCrisprUnlock();
}, 1000);

function updateDisplay() {
  cloneDisplay.textContent = `LUCAS Clones: ${clones}`;

  if (clones >= 1000000 && !sacrificed) {
    sacrificeSection.style.display = "block";
  }
}

function checkForCrisprUnlock() {
  if (clones >= 900000 && !crisprUnlocked) {
    crisprUnlock.style.display = "block";
    crisprUnlock.title = "He watches. Prove your dedication.";
  }
}

sacrificeButton.addEventListener("click", () => {
  if (clones >= 1000000 && !sacrificed) {
    clones -= 1000000;
    sacrificed = true;
    updateDisplay();
    sacrificeSection.style.display = "none";
    crisprTree.style.display = "block";
    sacrificeMessage.textContent = "You feel their pain echo through the void...";
  }
});

crisprUnlock.onclick = function () {
  if (clones >= 1000000 && !crisprUnlocked) {
    let confirmSacrifice = confirm("Are you prepared to sacrifice 1,000,000 clones to unlock the forbidden CRISPR Tree?");
    if (confirmSacrifice) {
      clones = 0;
      crisprUnlocked = true;
      updateDisplay();
      crisprUnlock.style.display = "none";
      crisprTree.style.display = "block";
      alert("The sacrifice has been accepted. The CRISPR Tree awakens...");
    }
  } else {
    alert("You are not yet worthy.");
  }
};

updateDisplay(); // Initial call

