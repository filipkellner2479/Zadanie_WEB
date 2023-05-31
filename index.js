const menu = document.querySelector(".navigation");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".hamburger--close");
const menuIcon = document.querySelector(".hamburger--icon");
const win = document.querySelector(".header");
let cos = true;

function changeMenuElements() {
    if(cos) {
        menu.style.transform = "translateY(-100%)";
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } 
    else {
        menu.style.transform = "translateY(0)";
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

function toggleMenu() {
    cos = !cos;
    changeMenuElements();
}

function displayMenu() {
    if(win.offsetWidth >= 760) menu.style.transform = "translateY(0)";
    else changeMenuElements();
}
displayMenu();

hamburger.addEventListener("click", toggleMenu);
new ResizeObserver(displayMenu).observe(menu);

