const closeButton = document.querySelector('.close');
const banner = document.querySelector('#banner');
const weekDay = new Date().getDay();
const showDays = [1, 2, 3];

const baseURL = "https://stewarterin.github.io/wdd230/";
const linksURL = "https://stewarterin.github.io/wdd230/chamber/data/members.json";
const spotlights = document.querySelector('#spotlights');

if (!showDays.includes(weekDay)) {
    banner.style.display = 'none';
}

closeButton.addEventListener('click', function () {
    banner.style.display = 'none';
});

async function getSpotData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    spotlightMembers(data.members);
}

getSpotData();

const spotlightMembers = (members) => {
    members.forEach((member) => {
        if (member.level === "gold") {

            let spotlight = document.createElement('section');
            let name = document.createElement('p');
            let logo = document.createElement('img');
            let website = document.createElement('a');

            name.textContent = member.name;
            website.textContent = member.website;
            website.href = member.website;

            logo.setAttribute('src', member.icon);
            logo.setAttribute('alt', `Logo for ${member.name}`);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', 'auto');
            logo.setAttribute('height', '120');

            spotlight.appendChild(name);
            spotlight.appendChild(website);
            spotlight.appendChild(logo);

            spotlights.appendChild(spotlight);
        }
    });
}