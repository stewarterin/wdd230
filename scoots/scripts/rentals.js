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
    vehicles.forEach((vehicle) => {
        const type = vehicle.type;
        const prices = vehicle.prices;

        document.getElementById(`${type}-one`).textContent = prices.reserve - half;
        document.getElementById(`${type}-two`).textContent = prices.reserve - full;
        document.getElementById(`${type}-three`).textContent = prices.walk - half;
        document.getElementById(`${type}-four`).textContent = prices.walk - full;
    });
}