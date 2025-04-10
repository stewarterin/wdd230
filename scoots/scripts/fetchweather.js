const highTemp = document.getElementById('high');
const temp = document.getElementById('tempurature');
const humid = document.getElementById('humidity')
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');
const fore = document.getElementById('forecast');

const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.91&units=imperial&appid=275d941af1b238d3c15a744f987c1760';
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.91&units=imperial&appid=275d941af1b238d3c15a744f987c1760';

async function apiFetch() {
    try {
        const [response1, repsonse2] = await Promise.all([
            fetch(url1),
            fetch(url2)]);
        if (response1.ok || repsonse2.ok) {
            const data1 = await response1.json();
            const data2 = await repsonse2.json();
            displayResults(data1, data2);
        } else {
            throw Error(await response1.text() || await repsonse2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data1, data2) {
    highTemp.innerHTML = `${Math.round(data1.main.temp_max)}&deg;F`;
    temp.innerHTML = `${Math.round(data1.main.temp)}&deg;F`;
    humid.innerHTML = `${Math.round(data1.main.humidity)} %`;
    fore.innerHTML = `${Math.round(data2.list[10].main.temp)}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${data1.weather[0].icon}.png`;
    let desc = `${data1.weather[0].main}, ${data1.weather[0].description}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}