const cartItems = JSON.parse(localStorage.getItem("cart"));
const gameInfo = document.querySelector(".info");
const costInfo = document.querySelector(".cost-info");
const continueShop = document.querySelector(".cont");

let itemCost = 0;

cartItems.forEach(function (item) {
  itemCost += parseInt(item.prices.price);

  gameInfo.innerHTML +=
    `<div class="game">
      <p>${item.name}</p>
      <p>1</p>
      <p>${item.prices.price},-</p>
    </div>`;
});

let totalSum = 0;
totalSum += itemCost;

costInfo.innerHTML +=
  `<div>
    <p>Item(s)</p>
    <p>${itemCost},-</p>
  </div>
  <div>
    <p>Shipping</p>
    <p>29,-</p>
  </div>
  <div class="total">
    <p>Total</p>
    <p>${totalSum},-</p>
  </div>`;

continueShop.onclick = function () {
  localStorage.clear();
}