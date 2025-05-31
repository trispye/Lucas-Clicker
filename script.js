let count = 0;
const countDisplay = document.getElementById("count");
const clicker = document.getElementById("clicker");

clicker.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
