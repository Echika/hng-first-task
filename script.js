function updateTime() {
    const timeElement = document.getElementById('timeDisplay');
    const currentTime = Date.now();
    timeElement.textContent = currentTime;
}

// Initialize time on page load
updateTime();

// Optional: Update time every second to show it's dynamic
setInterval(updateTime, 1000);

// Ensure time is accurate for tests
document.addEventListener('DOMContentLoaded', updateTime)