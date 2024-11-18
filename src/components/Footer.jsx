import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../images/nobglogo.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo on the left */}
        <div className="footer-logo d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span className="brand-name">Bawarchi</span>
        </div>

        {/* Copyright in the center */}
        <div className="footer-copyright text-center">
          <p className="mb-0">&copy; 2024 Bawarchi. All rights reserved.</p>
        </div>

        {/* Social links on the right */}
        <div className="social-icons d-flex">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-2"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
