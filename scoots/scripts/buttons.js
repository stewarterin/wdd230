const close = document.querySelector('.close');
const message = document.querySelector('#hightemp-message');

close.addEventListener('click', function () {
    message.style.display = 'none';
});

document.querySelector('.reserve').onclick = () => window.location.href = "reservations.html";