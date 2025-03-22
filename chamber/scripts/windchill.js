function calculateWC(temp, speed) {
    if (temp > 50 || speed <= 3) {
        return null;
    }

    const wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return Math.round(wc);
}

function updateWC() {
    let temp = currentTempValue;
    let speed = windSpeedValue;

    let wc = calculateWC(temp, speed);

    let chill = document.getElementById('chill');

    if (wc === null) {
        chill.innerHTML = "N/A";
    } else {
        chill.innerHTML = `${wc}&deg;F`
    }
}

window.onload = function () {
    setTimeout(updateWC, 500);
}