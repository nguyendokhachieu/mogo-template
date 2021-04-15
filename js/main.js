const headerNav = document.getElementById("header-nav");
const toggleButton = document.getElementById("menu-toggle");

var isToggled = true;
toggleButton.addEventListener("click", () => {
    if (isToggled) {
        headerNav.classList.add("is-toggled");
        isToggled = false;
    } else {
        headerNav.classList.remove("is-toggled");
        isToggled = true;
    }
});