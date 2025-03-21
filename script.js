function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);

function toggleMode() {
    document.body.classList.toggle("dark-mode");
}

function checkMode() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const hour = now.getHours();
    const isSummerOrAutumn = month >= 6 && month <= 11;
    if (isSummerOrAutumn && (hour >= 6 && hour < 7) || (!isSummerOrAutumn && (hour >= 18 || hour < 7))) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}

function openLink(url) {
    window.open(url, "_blank");
}

updateClock();
checkMode();

let countdown = 10;
const countdownElement = document.getElementById("countdown");
const jumpButton = document.getElementById("jump-button");

function updateCountdown() {
    countdownElement.textContent = countdown--;
    if (countdown < 0) {
        clearInterval(interval);
        countdownElement.textContent = "彩蛋";
        openLink("https://yybh.github.io");
    }
}

const interval = setInterval(updateCountdown, 1000);

jumpButton.addEventListener("click", function(event) {
    clearInterval(interval);
    countdownElement.textContent = "彩蛋";
    openLink("https://yybh.github.io");
});