const containerUsed = document.querySelector(".used-games");
const containerNew = document.querySelector(".new-releases");
const cartIcon = document.querySelector("#cart-icon");
const buttons = document.querySelectorAll(".add-to-cart");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart");
const sumTotal = document.querySelector(".total-sum");


let productsCart = [];
let price = 0;
let priceItems = 0;
let total = 0;
let gameObj = {};

async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();

    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(item => {
      item.addEventListener("click", function (event) {

        console.log("ADDED TO CART", item);

        gameObj = {};

        gameObj = {
          name: item.dataset.game,
          price: item.dataset.price,
          image: item.dataset.image,
        };

        productsCart.push(gameObj);

        cartContainer.style.display = "block";

        setTimeout(function () {
          cartContainer.style.display = "none";
        }, 5000);

        let sum = parseInt(gameObj.price);
        total += sum;

        cart.innerHTML += `
            <div class="cart-item">
            <div><img src="${gameObj.image}" alt="product image of ${gameObj.name}" style="max-width: 80px";></div>
              <div class="cart-name-price">
                <p class="game-in-cart-name">${gameObj.name}</p>
                <p class="game-in-cart-price">${gameObj.price},-</p>
              </div>
            </div>`;
        sumTotal.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
        localStorage.setItem("cart", JSON.stringify(productsCart));
      });
    });

  } catch (error) {
    console.log("ERROR:" + error);
    mainSection.innerHTML += errorMessage();
  }
}

getProducts("https://gamehub-maria.digital/wp-json/wc/store/products");

cartIcon.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}