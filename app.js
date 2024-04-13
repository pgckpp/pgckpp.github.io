Element.offsetWidth - Element.clientWidth

function toggleColorMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function exitColorMode() {
    var element = document.body;
    element.classList.remove("dark-mode");
}

function switchTheme(e) {
    var logo = document.querySelector('.logo')
    logo.classList.toggle("invert");
    if (e.target.checked) {
        toggleColorMode();
    }
    else {
        exitColorMode();
    }
}

const toggleSwitch = document.querySelector('.switch');
toggleSwitch.addEventListener("input", (e) => switchTheme(e));





const fontSizeSlider = document.getElementById("textslider");
const displayText = document.getElementById("textsize");

fontSizeSlider.addEventListener("input", () => {
    const fontSize = fontSizeSlider.value;
    displayText.style.fontSize = `${fontSize}px`;
});


