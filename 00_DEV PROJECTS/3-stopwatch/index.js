let timer;
let elapsedTime = 0;
let isRunning = false;

function updateTimer() {
    const hours = Math.floor(elapsedTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((elapsedTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
}

document.getElementById('start-btn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            elapsedTime++;
            updateTimer();
        }, 1000);
    }
});

document.getElementById('pause-btn').addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    updateTimer();
});

updateTimer(); // Initialize timer display
