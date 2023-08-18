function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
}

function openCadastro() {
  const cadastroContainer = document.getElementById('cadastro-container');
  cadastroContainer.style.display = 'block';
}

function showErrorMessage(message) {
  alert(message);
}

var cartItems = [];

function addToCart(productId) {

cartItems.push({
  id: productId,
  name: "Fruta " + productId,
  price: 1.99   });

updateCart(); }

function updateCart() {
var cartItemsContainer = document.getElementById("cart-items");
var cartTotalContainer = document.getElementById("cart-total");
var cartItemsHTML = "";

var total = 0;

for (var i = 0; i < cartItems.length; i++) {
  var item = cartItems[i];

  cartItemsHTML += "<div class='cart-item'>";
  cartItemsHTML += "<p>" + item.name + "</p>";
  cartItemsHTML += "<p>R$ " + item.price.toFixed(2) + "</p>";
  cartItemsHTML += "</div>";

  total += item.price;
}

cartItemsContainer.innerHTML = cartItemsHTML;
cartTotalContainer.textContent = "Total: R$ " + total.toFixed(2);
}