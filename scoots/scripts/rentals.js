const baseURL = "https://stewarterin.github.io/wdd230/";
const linksURL = "https://stewarterin.github.io/wdd230/scoots/data/prices.json";
const metro = document.getElementById('metro-box');

async function getPrices() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayPrices(data.vehicles);
}

getPrices();

const displayPrices = (vehicles) => {
    metro.
}