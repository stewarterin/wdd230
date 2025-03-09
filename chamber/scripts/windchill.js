let temp = document.getElementById('temp').innerText;
let speed = document.getElementById('speed').innerText;
let chill = document.getElementById('chill');

function calculateWC(temp, speed) {
    if (temp > 50 || speed <= 3) {
        return null;
    }

    const wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    return Math.round(wc);

}

function updateWC() {
    let tempNum = parseFloat(temp);
    let speedNum = parseFloat(speed);

    let wc = calculateWC(tempNum, speedNum);

    if (wc === null) {
        chill.innerHTML = "N/A";
    } else {
        chill.innerHTML = `${wc}`
    }
}

window.onload = updateWC;