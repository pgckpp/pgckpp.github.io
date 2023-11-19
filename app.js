Element.offsetWidth - Element.clientWidth


function toggleColorMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    
}
function exitColorMode() {
    var element = document.body;
    element.classList.remove("dark-mode");
    
    
}

const toggleSwitch = document.querySelector('.switch');

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

toggleSwitch.addEventListener('change', switchTheme, false);