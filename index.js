var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]:Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length===1){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart)[0][Object.keys(cart[0])]}.`)
  }
  else if (cart.length ===2){
    console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  }
  else {
    var message = 'In your cart, you have'
    for(var i=0; i<cart.length; i++){
      if(i===cart.length-1){
        message+= `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      }
      else {
        message += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
      }
    }
    console.log(message)
  }
}
function total() {
  var total =100
  for(var i=0; i<cart.length; i++){
    total+=cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  for(var i=0; i<cart.length;i++){
    if(cart[1].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
