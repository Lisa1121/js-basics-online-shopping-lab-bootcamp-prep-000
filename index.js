var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor((Math.random()*100)+1)
 cart.push({[item]:price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  if (cart.length){
    return(`Your shopping cart is empty.`)
  }
  else if(cart.length===1){
    return(`In your cart, you have ${cart[0].itemName} at \$${cart[0].itemPrice}.`)
  }
  else if(cart.length=>2){
    
  }
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
