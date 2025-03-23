const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const article = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);