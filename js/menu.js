const burger = document.querySelector(".mobile_menu_nav .burger");
const nav = document.querySelector(".mobile_menu_nav nav");
const menu = document.querySelector(".mobile_menu_nav .menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
