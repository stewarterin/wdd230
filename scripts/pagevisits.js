const countDisplay = document.querySelector(".visits");
let numVisists = Number(window.localStorage.getItem("numVisists-1s")) || 0;

if (numVIsist !== 0) {
    countDisplay.textContent = numVisists;
} else {
    countDisplay.textContent = 'Your first visit - Welcome';
}

numVisists++;

localStorage.setItem("numVisits-1s", numVisists);