const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seaconds = String(date.getSeconds()).padStart(2, '0');
    const now = `${hours}:${minutes}:${seaconds}`;
    clock.innerText = now;
}

getClock();
setInterval(getClock, 1000);