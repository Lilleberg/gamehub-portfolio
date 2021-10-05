const container = document.querySelector(".products");

async function getSearchResults(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      const game = products[i];

      const categories = game.categories;

      for (let j = 0; j < categories.length; j++) {
        const category = categories[j];

        document.querySelector("h1").innerHTML = j + " results for 'action'";

        if (category.name === "Action") {
          createHTML(game);
        }
      }
    }

    addProducts();

    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(function (button) {
      button.onclick = async function (event) {
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
    console.log("ERROR: " + error);
    container.innerHTML = errorMessage();
  }
}

getSearchResults("https://gamehub-maria.digital/wp-json/wc/store/products");

function createHTML(game) {
  container.innerHTML +=
    `<div class="product_item">
      <a href="product.html?id=${game.id}"><img src="${game.images[0].src}"></a>
      <div>
        <a href="product.html?id=${game.id}" class="prod_name">${game.name}</a>
        <div class="products_buy">
          <p class="price">${game.price_html}</p>
          <div><button class="button add-to-cart" data-product="${game.id}">Buy</button></div>
        </div>
      </div>
    </div>`;
}

