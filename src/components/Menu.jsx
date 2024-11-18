import React, { useState } from "react";

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
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter menu items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems.flatMap((category) => category.items)
      : menuItems.find((category) => category.category === selectedCategory)
          .items;

  return (
    <div className="container mt-4">
      <h2>Food Menu</h2>

      {/* Category Buttons */}
      <div className="mb-4 d-flex justify-content-center gap-3">
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

      {/* Render items of the selected category */}
      <div className="row">
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
                  onClick={() => addToCart(item)} // Call addToCart function
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
