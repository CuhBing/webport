var text = document.querySelector(".header-1");
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    if(i == 3 || i == 7)
    {
        text.innerHTML += " ";
    }
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;

    if (char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}

document.addEventListener('DOMContentLoaded', function() {
    const scrollDownButton = document.getElementById('scroll-down');

    scrollDownButton.addEventListener('click', function() {
        // Scroll to the "about" section smoothly
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
});