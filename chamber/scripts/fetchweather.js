let currentTempValue;
let windSpeedValue;

const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#speed');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.66&lon=-116.68&units=imperial&appid=275d941af1b238d3c15a744f987c1760';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTempValue = data.main.temp;
    windSpeedValue = data.wind.speed;

    currentTemp.innerHTML = `${Math.round(currentTempValue)}&deg;F`;
    windSpeed.innerHTML = `${Math.round(windSpeedValue)} mph`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}