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
  else {
    var itemName = ' '"
    var message = `In your cart, you have`
    for (var i in cart)
    for (let i=0; i<cart.length; i++){
      for (var ke)
    }
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
