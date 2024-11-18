import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./css/home.css";
import banner from "../images/banner1.jpg";
import img1 from "../images/img1.jpg";
import brand1 from "../images/brand1.jpg";
import brand2 from "../images/brand2.jpg";
import brand3 from "../images/brand3.jpg";
import logo from "../images/logo.jpg";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover", // Ensures the image covers the full area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling of the background
          width: "100vw", // Full width of the viewport
          height: "100vh", // Full height of the viewport
        }}
      >
        <div
          className="container text-center text-white d-flex flex-column justify-content-center align-items-center"
          style={{
            height: "100%", // Makes the text container take up the full height of the section
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adds a semi-transparent overlay for text readability
          }}
        >
          <h1>Welcome to Bawarchi</h1>
          <p className="hero-description">
            With over two decades of service, Bawarchi captures the essence of
            Indo-Chinese cuisine, offering a rich and diverse range of flavors
            that reflect the vibrant culinary traditions of the region.
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            <Link to="/menu" className="text-white text-decoration-none">
              Explore Our Menu
            </Link>
          </Button>
        </div>
      </section>

      {/* ................... */}
      {/* Featured Items Section */}
      <section className="featured-items py-5">
        <div className="container">
          <h2 className="text-center mb-4">Featured Menu Items</h2>
          <div className="row">
            {/* Item 1 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="Featured Item 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Sada Chawal</h5>
                  <p className="card-text">Rs 320</p>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="Featured Item 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Chicken Biryani</h5>
                  <p className="card-text">Rs 550</p>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="Featured Item 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Paneer Butter Masala</h5>
                  <p className="card-text">Rs 450</p>
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <div className="container py-5">
        <div className="text-center">
          <h2>About Us</h2>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={logo}
              className="img-fluid about-us-image"
              alt="Bawarchi Brand Logo"
            />
          </div>
          <div className="col-md-7">
            <p>
              Bawarchi, with over two decades of excellence, brings the rich,
              diverse, and authentic flavors of Indo-Chinese cuisine to your
              doorstep. Our extensive menu combines tradition and innovation,
              offering something for every palate. Whether you're craving spicy
              Indo-Chinese dishes or comforting rice and roti options, Bawarchi
              is here to deliver a memorable dining experience.
            </p>
          </div>
        </div>
      </div>

      {/* Our Brands Section */}
      {/* Our Brands Section */}

      <div class="container">
        <div className="text-center">
          <h2>Our Brand</h2>
        </div>
        <div class="row">
          <div class="col-sm">
            <img src={brand1} className="card-img-top" alt="brand 1" />
          </div>
          <div class="col-sm">
            {" "}
            <img src={brand2} className="card-img-top" alt="brand 1" />
          </div>
          <div class="col-sm">
            {" "}
            <img src={brand3} className="card-img-top" alt="brand 1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
