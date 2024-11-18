import React, { useState } from "react";
import { Route, Routes } from "react-router-dom"; // No Router import needed here

// Components
import Nbar from "./components/Nbar";
import About from "./components/About";
import Account from "./components/Account";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex > -1) {
      // Item exists in the cart, update its quantity
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1; // Increase quantity
        return newCart;
      });
    } else {
      // Item doesn't exist in the cart, add it
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to change item quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent negative quantities
    setCart((prevCart) => {
      const newCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      return newCart;
    });
  };
  return (
    <>
      <Nbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="menu"
          element={
            <Menu
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } // Pass the addToCart function to Menu
        />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } // Pass the cart state to Cart
        />
        <Route path="account" element={<Account />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
