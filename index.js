var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100)
  var itemName = {[item]:itemPrice};
  cart.push(itemName)
  console.log(`${item} has been added to your cart.`)
}

function viewCart() {
  
}
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
