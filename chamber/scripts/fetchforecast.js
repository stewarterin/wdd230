const dayOne = document.querySelector('#one');
const dayTwo = document.querySelector('#two');
const dayThree = document.querySelector('#three');

const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.66&lon=-116.68&units=imperial&appid=275d941af1b238d3c15a744f987c1760';

async function apiFetch() {
    try {
        const response = await fetch(url1);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayForecast(data) {
    dayOne.innerHTML = `Hi: ${Math.round(data.list[0].main.temp_max)}&deg;F - Lo: ${Math.round(data.list[0].main.temp_min)}&deg;F`;
    dayTwo.innerHTML = `Hi: ${Math.round(data.list[1].main.temp_max)}&deg;F - Lo: ${Math.round(data.list[1].main.temp_min)}&deg;F`;
    dayThree.innerHTML = `Hi: ${Math.round(data.list[2].main.temp_max)}&deg;F - Lo: ${Math.round(data.list[2].main.temp_min)}&deg;F`;
}