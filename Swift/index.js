function updateClock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    let date = now.toDateString();

document.getElementById('clock').textContent = time;
document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock();