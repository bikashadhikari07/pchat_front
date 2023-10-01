import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./css/home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <h1>Secure Chat App</h1>
      </div>
      <div className="features-container">
        <h2>Features</h2>
        <ul>
          <li>Secure chat rooms with end-to-end encryption</li>
          <li>Customizable usernames and room names</li>
          <li>
            No data storage - all messages are deleted when you leave the room
          </li>
        </ul>
      </div>
      <div className="action-container">
        <h2>Join a Room</h2>
        <Link to="/chat" className="btn">
        <Button variant="outline-success">Start Chatting</Button>{' '}
          
        </Link>
      </div>
    </div>
  );
}
export default Home;
