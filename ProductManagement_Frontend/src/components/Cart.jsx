import React from "react";
import axios from "axios";
const Cart = ({ cartItems, username }) => {
    const handleOrder = async (e) => {
        e.preventDefault();
        const order = {
          username: username,
          status: "SUCCESS",
          productIds: cartItems.map((item) => item.id),
        };
        console.log(order); 
        try {
          const response = await axios.post("http://localhost:8083/orders", order);
          console.log(response); 
          localStorage.removeItem("cart");
          alert("Order placed successfully");
          window.location.reload();
        } catch (error) {
          console.error("Error during order placement", error);
        }
      };
      
  return (
    <div className="cart-container bg-light p-3 rounded">
      <h2 className="text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="d-flex flex-column p-2">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item card mb-3 p-3">
              <p>
                <strong>Product:</strong> {item.name}
              </p>
              <p>
                <strong>Price:</strong> {item.price}
              </p>
              <p>
                <strong>Quantity:</strong> 1
              </p>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-primary p-2" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Cart;
