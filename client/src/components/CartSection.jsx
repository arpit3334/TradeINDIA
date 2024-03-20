import React from 'react';
import'./CartSection.css';
function Cart({ cartItems, removeFromCart, onProceedToPayment }) {
  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price} ETH</p>
                  </div>
                </div>
                <button className='remove-button' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p>Total: {totalPrice.toFixed(2)} ETH</p>
            <a href='/payment'>
            <button onClick={onProceedToPayment}>Proceed to Payment</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
