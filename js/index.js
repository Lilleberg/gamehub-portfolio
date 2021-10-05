const mainSection = document.querySelector(".main-content");
const containerNew = document.querySelector(".new-releases");
const containerUsed = document.querySelector(".used-games");

async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      const game = products[i];

      if (game.tags[0].name === "used") {
        createHTML(containerUsed, game);
      }

      if (game.tags[0].name === "new") {
        createHTML(containerNew, game);
      }
    }

    addProducts();
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(function (button) {
      button.onclick = function (event) {
        const addItems = products.find(item => item.id === parseInt(event.target.dataset.product));

        productsCart.push(addItems);
        localStorage.setItem("cart", JSON.stringify(productsCart));

        cart.innerHTML = "";
        price = 0;
        total = 0;
        addProducts();

        cartContainer.style.display = "block";
        setTimeout(() => {
          cartContainer.style.display = "none";
        }, 5000);
      }
    });
  } catch (error) {
    console.log("ERROR:" + error);
    mainSection.innerHTML += errorMessage();
  }
}

getProducts("https://gamehub-maria.digital/wp-json/wc/store/products");

function createHTML(container, game) {
  container.innerHTML += `
    <div class="game">
      <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"</a>
      <div class="sub-content">
        <a href="product.html?id=${game.id}">${game.name}</a>
        <p class="price">${game.price_html}</p>
        <button class="button add-to-cart" data-product="${game.id}">${game.add_to_cart.text}</button>
      </div>
    </div>`;
}