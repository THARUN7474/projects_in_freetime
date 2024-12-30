let countdown;
let remainingTime = 0;
let isCountingDown = false;

function updateDisplay() {
  const hours = Math.floor(remainingTime / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((remainingTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (remainingTime % 60).toString().padStart(2, "0");
  document.getElementById(
    "timer-display"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById("start-btn").addEventListener("click", () => {
  // Stop the alarm sound if it was playing
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.pause();
  alarmSound.currentTime = 0; // Reset audio to the beginning
  if (!isCountingDown) {
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const seconds = parseInt(document.getElementById("seconds").value) || 0;

    remainingTime = hours * 3600 + minutes * 60 + seconds;

    if (remainingTime > 0) {
      isCountingDown = true;
      document.getElementById("input-section").classList.add("hidden");
      document.getElementById("txt").classList.add("hidden");
      document.getElementById("button-section").classList.add("hidden");

      countdown = setInterval(() => {
        if (remainingTime > 0) {
          remainingTime--;
          updateDisplay();
        } else {
          clearInterval(countdown);
          isCountingDown = false;
          // alert("Time's up!");
          // Show input and button sections again
        //   document.getElementById("alarm-sound").play();
          document.getElementById("input-section").classList.remove("hidden");
          document.getElementById("button-section").classList.remove("hidden");
          document.getElementById("txt").classList.remove("hidden");
          updateDisplay();
          // Play the alarm sound
          alarmSound.play();
        }
      }, 1000);
    }
  }
});

document.getElementById("pause-btn").addEventListener("click", () => {
  if (isCountingDown) {
    clearInterval(countdown);
    isCountingDown = false;
    document.getElementById("input-section").classList.remove("hidden");
    document.getElementById("txt").classList.remove("hidden");
    document.getElementById("button-section").classList.remove("hidden");
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  clearInterval(countdown);
  isCountingDown = false;
  remainingTime = 0;
  updateDisplay();

  // Stop the alarm sound if it was playing
  const alarmSound = document.getElementById('alarm-sound');
  alarmSound.pause();
  alarmSound.currentTime = 0; // Reset audio to the beginning

  document.getElementById("input-section").classList.remove("hidden");
  document.getElementById("txt").classList.remove("hidden");
  document.getElementById("button-section").classList.remove("hidden");
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
});

// Initialize the display to 00:00:00
updateDisplay();
