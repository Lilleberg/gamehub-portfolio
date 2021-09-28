const container = document.querySelector(".products");
let id;
let game = "";

async function getSearchResults(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();
    //console.log(products);

    for (let i = 0; i < products.length; i++) {
      game = products[i];
      id = game.id;

      const categories = game.categories;

      for (let j = 0; j < categories.length; j++) {
        const category = categories[j];

        document.querySelector("h1").innerHTML = j + " results for 'action'";

        if (category.name === "Action") {
          createHTML();
        }
      }
    }
  } catch (error) {
    console.log("ERROR: " + error);
    container.innerHTML = errorMessage();
  }
}

getSearchResults("https://gamehub-maria.digital/wp-json/wc/store/products");

function createHTML() {
  container.innerHTML +=
    `<div class="product_item">
      <a href="product.html?id=${id}"><img src="${game.images[0].src}"></a>
      <div>
        <a href="product.html?id=${id}" class="prod_name">${game.name}</a>
        <div class="products_buy">
          <p class="price">${game.price_html}</p>
          <div><button class="button add-to-cart" data-game="${game.name}">buy</button></div>
        </div>
      </div>
    </div>`;
}

