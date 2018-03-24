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
    var itemName = ''
    var msg = 'In your cart, you have'
    for (var i in cart) {
      itemName = Object.keys(cart[i])
      msg += ` ${itemName} at $${cart[i][itemName]},`
    }
    console.log(msg.slice(0, -1) + '.')
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
