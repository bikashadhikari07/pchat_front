import "./navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import logo1 from "../images/brand1.jpg";
import logo2 from "../images/brand2.jpg";
import logo3 from "../images/brand3.jpg";

function Nbar() {
  const navigate = useNavigate();
  return (
    <Navbar expand="sm" className="navbar shadow-sm fixed-top">
      <div className="container-sm">
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            alt="Logo"
            src={logo1}
            width="60"
            height="60"
            className="navbar-logo d-inline-block align-top me-2 "
          />
          <img
            alt="Logo"
            src={logo2}
            width="60"
            height="60"
            className="navbar-logo d-inline-block align-top me-2 "
          />
          <img
            alt="Logo"
            src={logo3}
            width="60"
            height="60"
            className="navbar-logo d-inline-block align-top me-2 "
          />

          <span className="fw-bold text-danger">Bawarchi</span>
          <span> </span>
          <span className="fw-bold text-dark"> Nepal</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          {/* Center Navigation Links */}
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              className="mx-3 fw-bold"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Home
            </Nav.Link>
            {/* <Nav.Link
              as={NavLink}
              to="/menu"
              className="mx-3 fw-bold"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Menu
            </Nav.Link> */}
            <Nav.Link
              as={NavLink}
              to="/cart"
              className="mx-3 fw-bold"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="mx-3 fw-bold"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="mx-3 fw-bold"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <div className="d-flex align-items-start navbar-buttons">
            <Button
              variant="warning"
              className="me-2 fw-bold text-dark"
              onClick={() => navigate("/orderonline")}
            >
              Order Now
            </Button>
            {/* <Button
              variant="warning"
              className="fw-bold text-dark"
              onClick={() => navigate("/contact")}
            >
              +977 14498970
            </Button> */}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Nbar;
