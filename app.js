// app.js
const sentences = [
  "ខ្ញុំស្រឡាញ់ភាសាខ្មែរ។",
  "សូមស្វាគមន៍មកកាន់ហ្គេមវាយអក្សរ។",
  "វាយអក្សរឱ្យត្រឹមត្រូវ!",
];

let currentText = "";
let startTime = null;

function startGame() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  currentText = sentences[randomIndex];
  document.getElementById("target-text").innerText = currentText;
  document.getElementById("user-input").value = "";
  document.getElementById("speed").innerText = "0";
  document.getElementById("accuracy").innerText = "100";
  startTime = null;
}

document.getElementById("user-input").addEventListener("input", function () {
  const input = this.value;
  if (!startTime) startTime = new Date();

  const elapsedMinutes = (new Date() - startTime) / 1000 / 60;

  let correctChars = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === currentText[i]) {
      correctChars++;
    }
  }

  const accuracy = (correctChars / input.length) * 100 || 0;
  const wpm = (correctChars / 5) / elapsedMinutes || 0;

  document.getElementById("accuracy").innerText = accuracy.toFixed(0);
  document.getElementById("speed").innerText = wpm.toFixed(0);
});

startGame();
