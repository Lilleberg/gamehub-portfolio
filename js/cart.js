const containerUsed = document.querySelector(".used-games");
const containerNew = document.querySelector(".new-releases");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart");
const sumTotal = document.querySelector(".total-sum");

let productsCart = [];

if (JSON.parse(localStorage.getItem("cart")).includes(null)) {
  productsCart = [];
  console.log("Tomt");
}
else {
  productsCart = JSON.parse(localStorage.getItem("cart"));
}

function addProducts() {
  if (productsCart.length) {
    for (let i = 0; i < productsCart.length; i++) {
      let game = productsCart[i];
      console.log(game);
      createHTML(cart, game);

      let price = game.prices.price;
      console.log(price);
      let total;
      total += price;
      sumTotal.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
    }
  }
}

addProducts();

function createHTML(cart, game) {
  cart.innerHTML += `
  <div class="cart-item">
  <div><img src="${game.images[0].src}" alt="product image of ${game.name}" style="max-width: 80px";></div>
    <div class="cart-name-price">
      <p class="game-in-cart-name">${game.name}</p>
      <p class="game-in-cart-price">${game.prices.price},-</p>
    </div>
  </div>`;
}