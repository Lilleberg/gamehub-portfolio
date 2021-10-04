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

function buttonClick(allButtons, prodArr) {
  allButtons.forEach(function (button) {
    button.onclick = function (event) {
      const addItems = products.find(item => item.id === event.target.dataset.product);
      prodArr.push(addItems);
      localStorage.setItem("cart", JSON.stringify(prodArr));
    }
  });
}