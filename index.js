var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1
  cart.push({[item]: itemPrice})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  
}
function total() {
  
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  
}