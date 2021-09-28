const menu = document.querySelector(".navbar");
const hambIcon = document.querySelector("#hamburger-menu");
//const cartIcon = document.querySelector("#cart-icon");

hambIcon.onclick = function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}