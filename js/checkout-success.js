const cartItems = JSON.parse(localStorage.getItem("cart"));
const gameInfo = document.querySelector(".info");
const costInfo = document.querySelector(".cost-info");
const continueShop = document.querySelector(".cont");

let sumItems = 0;

cartItems.forEach(function (item) {
  sumItems += parseInt(item.price);

  gameInfo.innerHTML +=
    `<div class="game">
      <p>${item.name}</p>
      <p>1</p>
      <p>${item.price},-</p>
    </div>`;
});

let totalSum = sumItems + 29;

costInfo.innerHTML +=
  `<div>
    <p>Item(s)</p>
    <p>${sumItems},-</p>
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