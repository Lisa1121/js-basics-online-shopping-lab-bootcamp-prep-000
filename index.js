var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj={}
  obj["itemName"] =item
  obj["itemPrice"]=Math.floor((Math.random()*100)+1)
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  
}
function total() {
  
}

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  
}