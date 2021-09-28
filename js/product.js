const productContainer = document.querySelector(".main-content");
const cartItems = JSON.parse(localStorage.getItem("cart"));

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  location.href = "index.html";
}

const url = "https://gamehub-maria.digital/wp-json/wc/store/products/" + id;

fetch(url)
  .then(response => response.json())
  .then(data => getProduct(data))
  .catch(error => productContainer.innerHTML = errorMessage());

function getProduct(results) {

  document.title = `Game Hub | ${results.name}`;

  let arr = [];
  const categories = results.categories;
  for (let i = 0; i < categories.length; i++) {
    arr.push(categories[i].name);
  }
  const category = arr.join(", ");

  if (results.tags[0].name === "used") {
    productContainer.innerHTML =
      `<div class="page-title">
        <h1>${results.name}</h1>
        <div class="categories">
          <p style.zIndex="-1">${category}<p>
        </div>
      </div>
      <div class="game-info>">
        <img class="product-image" src="${results.images[0].src}" alt="Product image of ${results.name}">
        <h2>Information</h2>
        <p>${results.description}</p>
      </div>
      <div class="payment-info">
        <p class="price">${results.price_html}</p>
        <button class="button add-to-cart" data-game="${results.name}" data-price="${results.prices.price}" data-image="${results.images[0].src}">Add to cart</button>
        <div>
          <p>Payment methods</p>
          <p>Credit card</p>
          <p>Debit card</p>
          <p>Vipps</p>
        </div>
      </div>
      <div class="about-seller">
        <div>
          <h3>About seller</h3>
          <p>Ola Nordmann</p>
        </div>
        <div class="member-since">
          <p>Member since:</p>
          <p>09.07.2017</p>
        </div>
        <div>
          <p class="rating">Rating</p>
          <div class="rating star">
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star-half-alt"></i></p>
          </div>
        </div>
        <div class="message">
          <p><i class="fas fa-comment-alt"></i></p>
          <p>Message seller</p>
        </div>
      </div>`;
  }

  if (results.tags[0].name === "new") {
    productContainer.innerHTML =
      `<div class="page-title">
        <h1>${results.name}</h1>
        <div class="categories">
          <p>${category}<p>
        </div>
      </div>
      <div class="game-info>">
        <img class="product-image" src="${results.images[0].src}" alt="Product image of ${results.name}">
        <h2>Information</h2>
        <p>${results.description}</p>
      </div>
      <div class="payment-info">
        <p class="price">${results.price_html}</p>
        <button class="button add-to-cart" data-game="${results.name}" data-price="${results.prices.price}" data-image="${results.images[0].src}">Add to cart</button>
        <div>
          <p>Payment methods</p>
          <p>Credit card</p>
          <p>Debit card</p>
          <p>Vipps</p>
        </div>
      </div>`
  }
}