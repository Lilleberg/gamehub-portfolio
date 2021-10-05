const cart = document.querySelector(".cart");
const sumTotal = document.querySelector(".total-sum");
cart.innerHTML = `<p style="font-style: italic;">Your cart is empty</p>`;

let productsCart = [];
let price = 0;
let total = 0;
let game = [];

if (JSON.parse(localStorage.getItem("cart")).includes(null)) {
  productsCart = [];

}
else {
  productsCart = JSON.parse(localStorage.getItem("cart"));
}

price = 0;
total = 0;

function addProducts() {
  if (productsCart.length) {
    for (let i = 0; i < productsCart.length; i++) {
      game = productsCart[i];
      price = parseInt(game.prices.price);
      total += price;
      createHTMLCart();
    }
  }
}

function createHTMLCart() {
  cart.innerHTML += `
  <div class="cart-item">
  <div><img src="${game.images[0].src}" alt="product image of ${game.name}" style="max-width: 80px";></div>
    <div class="cart-name-price">
      <p class="game-in-cart-name">${game.name}</p>
      <p class="game-in-cart-price">${game.prices.price},-</p>
    </div>
  </div>`;
  sumTotal.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
}
