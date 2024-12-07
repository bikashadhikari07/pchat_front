import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderOnline.css";
import nobglogo from "../images/nobglogo.png";
import image1 from "../images/image2.jpg";
import image2 from "../images/image3.jpg";
import image3 from "../images/image4.jpg";

function OrderOnline() {
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [address, setAddress] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Background carousel images
  const images = [image1, image2, image3];

  // Change the carousel image every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  const handleDeliveryChange = (type) => {
    setDeliveryType(type);
    setAddress(""); // Reset address when switching delivery type
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              const userAddress = data.display_name || "Address not found";
              setAddress(userAddress);
            })
            .catch((error) => {
              console.error("Error fetching location details:", error);
              setAddress("Error fetching address");
            });
        },
        (error) => {
          console.error("Error getting geolocation:", error);
          setAddress("Unable to retrieve location");
        }
      );
    } else {
      setAddress("Geolocation is not supported by this browser");
    }
  };

  const handleOrderNow = () => {
    // Navigate to the /menu route and pass the props
    navigate("/menu", { state: { deliveryType, address } });
  };

  return (
    <div
      className="order-online-container"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="order-card">
        <img src={nobglogo} alt="Indian Tadka Logo" className="logo" />
        <div className="delivery-options">
          <label>
            <input
              type="radio"
              name="deliveryType"
              value="pickup"
              checked={deliveryType === "pickup"}
              onChange={() => handleDeliveryChange("pickup")}
            />
            Pickup
          </label>
          <label>
            <input
              type="radio"
              name="deliveryType"
              value="delivery"
              checked={deliveryType === "delivery"}
              onChange={() => handleDeliveryChange("delivery")}
            />
            Home Delivery
          </label>
        </div>

        {deliveryType === "pickup" ? (
          <select className="branch-select">
            <option value="bawarchi">Bawarchi Babarmahal</option>
          </select>
        ) : (
          <div className="location-input-container">
            <input
              type="text"
              className="delivery-input"
              placeholder="Enter Your Apartment Name, Street Name"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="location-icon" onClick={handleGetLocation}>
              📍
            </button>
          </div>
        )}

        <button className="order-now-button" onClick={handleOrderNow}>
          Order Now
        </button>
      </div>
    </div>
  );
}

export default OrderOnline;
