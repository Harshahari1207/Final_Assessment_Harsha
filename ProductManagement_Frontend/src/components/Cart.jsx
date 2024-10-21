import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container bg-light p-3 rounded">
      <h2 className="text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="d-flex flex-column p-2">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item card mb-3 p-3">
              <p><strong>Product:</strong> {item.name}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Quantity:</strong> 1</p>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-primary p-2">Place Order</button>
    </div>
  );
};

export default Cart;
