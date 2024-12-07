import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../images/nobglogo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Logo Section */}
          <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>

          {/* Our Product Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="text-danger">Our Product</h5>
            <ul className="list-unstyled">
              <li>Snacks</li>
              <li>Curry</li>
              <li>Biryani</li>
              <li>Tandoori</li>
              <li>Naan Roti</li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="text-danger">Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="col-md-3 mb-3 mb-md-0">
            <h5 className="text-danger">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaPhoneAlt /> +977 14498970
              </li>
              <li>
                <FaPhoneAlt /> +977 4486347
              </li>
              <li>
                <FaEnvelope /> info@expresseats.com.np
              </li>
              <li>
                <FaMapMarkerAlt /> Mid Baneshwor, Kathmandu, Nepal
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-0">All Rights Reserved By Bawarchi Nepal @2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
