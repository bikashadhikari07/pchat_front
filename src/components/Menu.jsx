import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/menu.css";

// Sample menu items
const menuItems = [
  {
    category: "NAAN & ROTI",
    items: [
      {
        id: 1,
        name: "Atta Tandoori Roti",
        price: 90,
        image: "../images/img1.jpg",
      },
      {
        id: 2,
        name: "Pyaz Mirchi Ki Roti",
        price: 140,
        image: "../images/img1.jpg",
      },
      { id: 3, name: "Missi Roti", price: 180, image: "../images/img1.jpg" },
    ],
  },
  {
    category: "LIZZAT~E~BIRYANI",
    items: [
      { id: 4, name: "Sada Chawal", price: 320, image: "../images/img1.jpg" },
      { id: 5, name: "Jeera Pulao", price: 390, image: "../images/img1.jpg" },
    ],
  },
  {
    category: "RAITA AND SALAD",
    items: [
      { id: 6, name: "Raita", price: 380, image: "../images/img1.jpg" },
      {
        id: 7,
        name: "Garden Green Salad",
        price: 490,
        image: "../images/img1.jpg",
      },
    ],
  },
];

function Menu({ addToCart }) {
  window.onload = function () {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  };
  const location = useLocation();
  const navigate = useNavigate();
  const { deliveryType, address } = location.state || {}; // Get deliveryType and address
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems.flatMap((category) => category.items)
      : menuItems.find((category) => category.category === selectedCategory)
          ?.items || [];

  const goToCart = () => {
    navigate("/cart", {
      state: { deliveryType, address }, // Pass deliveryType and address to Cart
    });
  };

  return (
    <div className="container mt-4 menu-container">
      <div className="header">
        <h2 className="mb-0">Food Menu</h2>
        <p className="mb-0">
          <strong>Delivery Type:</strong> {deliveryType}
        </p>
        <p className="mb-0">
          <strong>Address:</strong> {address}
        </p>
      </div>

      {/* Category Buttons */}
      <div className="category-buttons">
        <button
          className={`btn ${
            selectedCategory === "All" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setSelectedCategory("All")}
        >
          Show All
        </button>
        {menuItems.map((category) => (
          <button
            key={category.category}
            className={`btn ${
              selectedCategory === category.category
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(category.category)}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Render Menu Items */}
      <div className="row menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={item.image}
                alt={item.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Rs {item.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart(item)} // Add item to cart
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Go to Cart Button */}
      <div className="go-to-cart-button text-center mt-4 mb-10">
        <button className="btn btn-success" onClick={goToCart}>
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default Menu;
