$(document).ready(function () {
  const headerNav = document.getElementById("header-nav");
  const toggleButton = document.getElementById("menu-toggle");

  $(".quote-list").slick();

  $("button.slick-arrow.slick-prev")
    .addClass("fa fa-arrow-left arrow-icon")
    .text("");
  $("button.slick-arrow.slick-next")
    .addClass("fa fa-arrow-right arrow-icon")
    .text("");

  var isMenuToggled = false;
  window.addEventListener("click", (e) => {
    const menuClasses = e.target.classList.value;
    if (menuClasses.indexOf("menu-toggle") != -1) {
      if (isMenuToggled == false) {
        headerNav.classList.add("is-toggled");
        toggleButton.classList.add("outline-dash");
        isMenuToggled = true;
      } else {
        headerNav.classList.remove("is-toggled");
        toggleButton.classList.remove("outline-dash");
        isMenuToggled = false;
      }
    } else if (
      menuClasses.indexOf("header-nav-item") == -1 &&
      menuClasses.indexOf("header-nav-link") == -1
    ) {
      if (isMenuToggled == true) {
        headerNav.classList.remove("is-toggled");
        toggleButton.classList.remove("outline-dash");
        isMenuToggled = false;
      }
    }
  });
});
