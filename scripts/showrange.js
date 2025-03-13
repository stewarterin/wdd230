const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', showRange);
range.addEventListener('input', showRange);

function showRange() {
    rangevalue.innerHTML = range.value;
}