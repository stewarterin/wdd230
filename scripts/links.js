const baseURL = "https://stewarterin.github.io/wdd230/";
const linksURL = "https://stewarterin.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lessons);
    displayLinks(data.lessons);
}

getLinks();

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        let list = document.createElement('li');
        let title = document.createElement('h4');

        title.textContent = `${lesson.lesson}: `;
        list.appendChild(title);

        lesson.links.forEach((link) => {
            let linkEntry = document.createElement('li');
            let anchor = document.createElement('a');

            anchor.href = link.url;
            anchor.textContent = link.title;

            linkEntry.appendChild(anchor);
            list.appendChild(linkEntry);
        });

        document.getElementById('links').appendChild(list);
    });
}