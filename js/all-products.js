const container = document.querySelector(".prod-container");
const buttonLowToHigh = document.querySelector(".lowhigh");
let newBox = document.querySelector("#new");
let used = document.querySelector("#used");
const removeFilters = document.querySelector(".remove-filters");
const cartItems = JSON.parse(localStorage.getItem("cart"));

let productArr = [];
let usedArr = [];
let newArr = [];
let game;
let usedClicked = false;
let newClicked = false;

async function getAllProducts(url) {

  try {
    game = [];
    productArr = [];
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      game = products[i];
      productArr.push(game);
    }

    createHTMLAll(productArr);

    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(function (button) {
      button.onclick = async function (event) {
        const addItems = products.find(item => item.id === parseInt(event.target.dataset.product));

        productsCart.push(addItems);
        localStorage.setItem("cart", JSON.stringify(productsCart));
      }
    });

  } catch (error) {
    console.log("ERROR: " + error);
    container.innerHTML = errorMessage();
  }
}

getAllProducts("https://gamehub-maria.digital/wp-json/wc/store/products");

function createHTMLAll(prodArray) {
  container.innerHTML = "";
  prodArray.forEach(function (game) {
    console.log(game, "hello");
    container.innerHTML +=
      `<div class="product">
      <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"></a>
      <div class="sub-content">
        <a href="product.html?id=${game.id}">${game.name}</a>
        <p class="price">${game.price_html}</p>
        <button class="button add-to-cart" data-product="${game.id}">Buy</button>
      </div>
    </div>`;
  });
}

function usedIsChecked() {
  usedArr = [];
  if (newBox.checked && used.checked) {
    newBox.checked = false;
    used.checked = false;
  }

  createHTML(productArr);
  if (this.checked) {
    listUsed();
  }
}

function newIsChecked() {
  newArr = [];
  if (newBox.checked && used.checked) {
    newBox.checked = false;
    used.checked = false;
  }

  createHTML(productArr);
  if (this.checked) {
    listNew();
  }
}

function listNew() {
  for (let i = 0; i < productArr.length; i++) {
    if (productArr[i].tags[0].name === "new") {
      newArr.push(productArr[i]);
      createHTML(newArr);
    }
  }
}

function listUsed() {
  for (let i = 0; i < productArr.length; i++) {
    if (productArr[i].tags[0].name === "used") {
      usedArr.push(productArr[i]);
      createHTML(usedArr);
    }
  }
}

function sortLowHigh() {
  newClicked = true;
  usedClicked = true;

  for (let i = 0; i < productArr.length; i++) {
    if (newBox.checked) {
      if (newClicked) {
        for (let j = 0; j < newArr.length; j++) {
          newArr.sort((a, b) => a.prices.price - b.prices.price);
        }
      }
      createHTML(newArr);
    }
    else if (used.checked) {
      if (usedClicked) {
        for (let j = 0; j < usedArr.length; j++) {
          usedArr.sort((a, b) => a.prices.price - b.prices.price);
        }
      }
      createHTML(usedArr);
    } else {
      productArr.sort((a, b) => a.prices.price - b.prices.price);
      createHTML(productArr);
    }
  }
}

function sortHighLow() {
  newClicked = true;
  usedClicked = true;

  for (let i = 0; i < productArr.length; i++) {
    if (newBox.checked) {
      if (newClicked) {
        for (let j = 0; j < newArr.length; j++) {
          newArr.sort((a, b) => b.prices.price - a.prices.price);
        }
      }
      createHTML(newArr);
    }
    else if (used.checked) {
      if (usedClicked) {
        for (let j = 0; j < usedArr.length; j++) {
          usedArr.sort((a, b) => b.prices.price - a.prices.price);
        }
      }
      createHTML(usedArr);
    } else {
      productArr.sort((a, b) => b.prices.price - a.prices.price);
      createHTML(productArr);
    }
  }
}

document.querySelector(".az").addEventListener("click", function () {
  for (let i = 0; i < productArr.length; i++) {
    productArr.sort(
      function (a, b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      }
    );
    createHTML(productArr);

    if (used.checked) {
      usedArr.sort(
        function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        }
      );
      createHTML(usedArr);
    } else if (newBox.checked) {
      newArr.sort(
        function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        }
      );
      createHTML(newArr);
    } else {
      createHTML(productArr);
    }
  }
});

document.querySelector(".za").addEventListener("click", function () {
  for (let i = 0; i < productArr.length; i++) {
    prodName = productArr[i];
    productArr.sort(
      function (a, b) {
        if (a.name > b.name) {
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      }
    );
    createHTML(productArr);

    if (used.checked) {
      usedArr.sort(
        function (a, b) {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      );
      createHTML(usedArr);
    } else if (newBox.checked) {
      newArr.sort(
        function (a, b) {
          if (a.name > b.name) {
            return -1;
          } else if (a.name < b.name) {
            return 1;
          } else {
            return 0;
          }
        }
      );
      createHTML(newArr);
    } else {
      createHTML(productArr);
    }
  }
});

removeFilters.addEventListener("click", function () {
  game = [];
  productArr = [];
  getAllProducts("https://gamehub-maria.digital/wp-json/wc/store/products");
  used.checked = false;
  newBox.checked = false;
});

used.addEventListener("change", usedIsChecked);
newBox.addEventListener("change", newIsChecked);
document.querySelector(".lowhigh").addEventListener("click", sortLowHigh);
document.querySelector(".highlow").addEventListener("click", sortHighLow);