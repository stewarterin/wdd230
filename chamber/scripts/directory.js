const baseURL = "https://stewarterin.github.io/wdd230/";
const linksURL = "https://stewarterin.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let logo = document.createElement('img');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        logo.setAttribute('src', member.icon);
        logo.setAttribute('alt', `Logo for ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}