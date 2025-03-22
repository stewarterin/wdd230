const closeButton = document.querySelector('.close');
const banner = document.querySelector('#banner');
const weekDay = new Date().getDay();
const showDays = [1, 2, 3];

if (!showDays.includes(weekDay)) {
    banner.style.display = 'none';
}

closeButton.addEventListener('click', function () {
    banner.style.display = 'none';
});