const pwd1 = document.querySelector("#password1");
const pwd2 = document.querySelector("#password2");
const alert = document.querySelector("#alertmessage");

pwd2.addEventListener("focusout", checkMatch);

function checkMatch() {
    if (pwd1.value !== pwd2.value) {
        alert.textContent = "Passwords DO NOT match. Please try again.";
        alert.style.visibility = "show";
        alert.style.color = "#ff2d2d";
        pwd2.style.backgroundColor = "#ff7f7f2d";
        pwd2.value = "";
        pwd2.focus();
    } else {
        alert.style.display = "none";
    }
}