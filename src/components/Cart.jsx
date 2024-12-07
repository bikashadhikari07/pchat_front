import React, { useState } from "react";
import "./Cart.css";
import { useLocation } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQuantity }) {
  const location = useLocation();
  const { deliveryType, address } = location.state || {};
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    specialRequest: "",
    paymentOption: "Cash on Delivery",
  });

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrderNow = () => {
    setShowForm(true); // Show the form modal
  };

  const handleConfirmOrder = () => {
    const whatsappNumber = "9829028293";

    // Prepare cart items for WhatsApp message
    const cartDetails = cart
      .map(
        (item) =>
          `${item.name} - Rs ${item.price} x ${item.quantity} = Rs ${
            item.price * item.quantity
          }`
      )
      .join("\n");

    // Prepare order message
    const message = `
🛒 Order Details:
${cartDetails}

Total: Rs ${calculateTotal()}

📋 Customer Details:
Name: ${formData.name}
Phone: ${formData.phone}

Special Request: ${formData.specialRequest}
Payment Option: ${formData.paymentOption}
📦 Delivery Information:
Delivery Type: ${deliveryType}
Address: ${address}
    `;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    // Optionally, close the form modal
    setShowForm(false);
  };

  return (
    <div className="cart-container">
      <div className="container mt-4">
        <h2>Your Cart</h2>
        <p>Delivery Type: {deliveryType}</p>
        <p>Address: {address}</p>

        {/* Cart Items */}
        <div className="row">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="col-md-12 mb-3">
                <div className="d-flex align-items-center border p-2 rounded cart-item">
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  {/* Item Details */}
                  <div className="d-flex justify-content-between w-100">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        Rs {item.price} x {item.quantity}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="btn btn-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="btn btn-danger btn-sm ml-2"
                      onClick={() => removeFromCart(item.id)} // Remove item
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Total */}
        {cart.length > 0 && (
          <div className="mt-4">
            <h4>Total: Rs {calculateTotal()}</h4>
            <button className="btn btn-success" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        )}

        {/* Order Form Modal */}
        {showForm && (
          <div
            className="modal show d-block"
            style={{ background: "#00000090" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Your Order</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowForm(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Special Request</label>
                      <textarea
                        name="specialRequest"
                        className="form-control"
                        rows="3"
                        value={formData.specialRequest}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Payment Option</label>
                      <select
                        name="paymentOption"
                        className="form-select"
                        value={formData.paymentOption}
                        onChange={handleInputChange}
                      >
                        <option>Cash on Delivery</option>
                        <option>eSewa</option>
                        <option>Khalti</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowForm(false)}
                  >
                    Close
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleConfirmOrder}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
