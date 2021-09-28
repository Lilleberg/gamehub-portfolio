const mainSection = document.querySelector(".main-content");
//const containerUsed = document.querySelector(".used-games");
//const containerNew = document.querySelector(".new-releases");
//const cartIcon = document.querySelector("#cart-icon");
//const buttons = document.querySelectorAll(".add-to-cart");
//const cartContainer = document.querySelector(".cart-container");
//const cart = document.querySelector(".cart");
//const sumTotal = document.querySelector(".total-sum");
const cartItems = JSON.parse(localStorage.getItem("cart"));

//let productsCart = [];
//let price = 0;
//let priceItems = 0;
//let total = 0;
//let gameObj = {};

async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    for (let i = 0; i < products.length; i++) {
      const game = products[i];

      if (game.tags[0].name === "used") {
        containerUsed.innerHTML += `
          <div class="game">
            <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"</a>
            <div class="sub-content">
              <a href="product.html?id=${game.id}">${game.name}</a>
              <p class="price">${game.price_html}</p>
              <button class="button add-to-cart" data-game="${game.name}" data-price="${game.prices.price}" data-image="${game.images[0].src}">${game.add_to_cart.text}</button>
            </div>
          </div>`;
      }
      if (game.tags[0].name === "new") {
        containerNew.innerHTML += `
          <div class="game">
            <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"</a>
              <div class="sub-content">
                <a href="product.html?id=${game.id}">${game.name}</a>
                <p class="price">${game.price_html}</p>
                <button class="button add-to-cart" data-game="${game.name}" data-price="${game.prices.price}" data-image="${game.images[0].src}">${game.add_to_cart.text}</button>
              </div>
          </div>`;
      }
    }

    const buttons = document.querySelectorAll(".add-to-cart");

  } catch (error) {
    console.log("ERROR:" + error);
    mainSection.innerHTML += errorMessage();
  }
}

getProducts("https://gamehub-maria.digital/wp-json/wc/store/products");

