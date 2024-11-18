import React from "react";
import logo from "../images/logo.jpg";

function About() {
  return (
    <div>
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
    </div>
  );
}

export default About;
