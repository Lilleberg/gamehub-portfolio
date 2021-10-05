const menu = document.querySelector(".navbar");
const hambIcon = document.querySelector("#hamburger-menu");
const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector(".cart-container");

hambIcon.onclick = function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

cartIcon.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}