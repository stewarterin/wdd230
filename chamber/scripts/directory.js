const baseURL = "https://stewarterin.github.io/wdd230/";
const linksURL = "https://stewarterin.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

async function getMemberData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let logo = document.createElement('img');
        let website = document.createElement('a');

        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;
        website.href = member.website;

        logo.setAttribute('src', member.icon);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', 'auto');
        logo.setAttribute('height', '100');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
