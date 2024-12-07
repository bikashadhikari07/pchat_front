import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./css/home.css";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
import img1 from "../images/img1.jpg";
import brand1 from "../images/brand1.jpg";
import brand2 from "../images/brand2.jpg";
import brand3 from "../images/brand3.jpg";
import logo from "../images/nobglogo.png";
import nobglogo from "../images/nobglogo.png";
import bgop from "../images/bgopacityimage.png";

import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  window.onload = function () {
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  };

  const navigate = useNavigate(); // Initialize useNavigate

  const handleOrderNowClick = () => {
    navigate("/orderonline"); // Navigate to the specified route
  };

  const handleKnowMoreClick = () => {
    navigate("/about"); // Navigate to the specified route
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{ textAlign: "center" }}>
        {" "}
        {/* Center align the content */}
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={banner1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
        {/* Centered button */}
        <Button
          variant="warning"
          style={{ marginTop: "20px" }} // Add space between carousel and button
          onClick={handleOrderNowClick} // Example button action
        >
          Order Now
        </Button>
      </div>

      {/*  */}
      <div className="py-5 about-us-section">
        <Row className="text-center mb-4">
          <Col>
            <h2>About Us</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={2} className="text-center"></Col>
          <Col md={5} className="text-center">
            <div className="about-us-image-container">
              <img
                src={img1}
                className="img-fluid about-us-image"
                alt="Bawarchi Brand Logo"
              />
              <div className="cart-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          </Col>
          <Col md={4} className="about-us-text">
            <p>
              Bawarchi, with over two decades of excellence, brings the rich,
              diverse, and authentic flavors of Indo-Chinese cuisine to your
              doorstep. Our extensive menu combines tradition and innovation,
              offering something for every palate. Whether you're craving spicy
              Indo-Chinese dishes or comforting rice and roti options, Bawarchi
              is here to deliver a memorable dining experience.
            </p>
            <Button
              variant="warning"
              size="lg"
              className="know-more-btn"
              onClick={handleKnowMoreClick}
            >
              Know More
            </Button>
          </Col>
          <Col md={1} className="text-center"></Col>
        </Row>
      </div>
      {/* resturent service */}
      <div style={{ backgroundColor: "black", padding: "50px 0" }}>
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2 style={{ color: "white", fontWeight: "bold" }}>
                Restaurant Services
              </h2>
            </Col>
          </Row>
          <Row className="align-items-center">
            {/* Services Column */}
            <Col md={2}></Col>
            <Col md={6}>
              <Row>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>01. Healthy Food</strong>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>04. Pop Up Events</strong>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>02. Quality Service</strong>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>05. Best Deals Every Thursday</strong>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>03. Delivery And Pick Up</strong>
                  </Card>
                </Col>
                <Col md={6} className="mb-3">
                  <Card className="p-3">
                    <strong>06. Corporate Orders</strong>
                  </Card>
                </Col>
              </Row>
            </Col>

            {/* Image Column */}
            <Col md={3} className="text-center">
              <img src={img1} alt="Food Skewer" className="img-fluid" />
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </div>

      {/* Featured Items Section */}
      <section className="featured-items py-5">
        <div className="container-fluid">
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
                  <Button variant="warning" onClick={handleOrderNowClick}>
                    Order Online
                  </Button>
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
                  <Button variant="warning" onClick={handleOrderNowClick}>
                    Order Online
                  </Button>
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
                  <Button variant="warning" onClick={handleOrderNowClick}>
                    Order Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
