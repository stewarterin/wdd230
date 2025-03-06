const countDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-1s")) || 0;

if (numVisits !== 0) {
    countDisplay.textContent = numVisits;
} else {
    countDisplay.textContent = 'Your first visit - Welcome';
}

numVisits++;

localStorage.setItem("numVisits-1s", numVisits);