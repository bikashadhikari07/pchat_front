import io from "socket.io-client";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid"; // import uuid
import moment from "moment"; // import moment

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

// import Login from "./ChatUI/login";
// import ChatRoom from "./ChatUI/Room";

import "./css/chat.css";

// const socket = io.connect("http://localhost:3001");
const socket = io.connect("https://pchat-j4ss.onrender.com");

function Chat() {
  const [chat, setChat] = useState([]);

  const [messageContainer, setMessageContainer] = useState([]);

  const [showFirstForm, setShowFirstForm] = useState(true);
  const [showSecondForm, setShowSecondForm] = useState(false);

  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  const [username, setUsername] = useState("");

  const messageReceived = document.querySelector(".messageReceived");

  const joinRoom = () => {
    if (room !== "" && username !== "") {
      socket.emit("join_room", room, username);
      // navigate("/chatroom");

      setShowFirstForm(false);
      setShowSecondForm(true);
      socket.emit({ username } + "connected to room");
    }
  };

  //old
  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  //   // console.log("test");
  // };
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  const sendMessage = () => {
    // if (message.trim() !== "") {
    //   const messageData = {
    //     room: room,
    //     author: username,
    //     text: message.trim(),
    //   };
    //   socket.emit("send_message", messageData);
    //   setMessage("");
    // }
    let data = {
      user: username,
      msg: message,
      room: room,
    };
    if (message !== "") {
      appendMessage(data, "right");
      socket.emit("chat_msg", data);
      setMessage("");
    }
  };
  function appendMessage(data, status) {
    let div = document.createElement("div");
    div.classList.add("inmsg", status);
    let content = `
    <h5>${data.user}</h5>
    <p>${data.msg}</p>
    
    `;
    div.innerHTML = content;
    messageReceived.appendChild(div);
  }

  // socket.on("message", (data) => {
  //   console.log("wen socket received");
  //   // return (null, data);
  //   // appendMessage(data, "left");
  // });

  useEffect(() => {
    socket.on("chat_msg", (data) => {
      if (data.user !== username) {
        const messageReceived = (
          <div key={uuid()} className={"inmsg left"}>
            <h5>{data.user}</h5>
            <p>{data.msg}</p>
            <span className="message-time">{moment().format("h:mm A")}</span>
          </div>
        );
        setMessageContainer([...messageContainer, messageReceived]);
      }
    });

    socket.emit("user_connected", { username, room });

    return () => {
      socket.off("chat_msg");
    };
  }, [socket, messageContainer, username, room]);

  // useEffect(() => {
  //   socket.on("chat_msg", (data) => {
  //     const messageReceived = (
  //       <div key={uuid()} className={"inmsg left"}>
  //         <h5>{data.user}</h5>
  //         <p>{data.msg}</p>
  //         {/* <span className="message-time">{moment().format("h:mm A")}</span> */}
  //       </div>
  //     );
  //     setMessageContainer([...messageContainer, messageReceived]);
  //   });

  //   socket.emit("user_connected", { username, room });

  //   return () => {
  //     socket.off("chat_msg");
  //   };
  // }, [socket, messageContainer, username, room]);
  //old
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     const messageDiv = (
  //       <div key={uuid()} className="inmsg left">
  //         <p>{data.message}</p>
  //         <span className="message-time">{moment().format("h:mm A")}</span>
  //       </div>
  //     );
  //     setMessageContainer([...messageContainer, messageDiv]);
  //   });

  //   return () => {
  //     socket.off("receive_message");
  //   };
  // }, [socket, messageContainer]);

  return (
    <>
      {showFirstForm && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Form style={{ maxWidth: "400px" }}>
            <Form.Group className="mb-3">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <Form.Text className="text-muted">
                Other user can only see username you provide{" "}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Room ID</Form.Label>
              <Form.Control
                type="numbers"
                placeholder="Room Id"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={joinRoom}>
              Join Room
            </Button>
          </Form>
        </div>
      )}
      {showSecondForm && (
        <div className="message_room">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Room ID:{room}</Form.Label>
              {/* {messageReceived} */}
              <div className="messageReceived">
                {messageContainer.map((message) => message)}
                {/* <div className="message-container">
                  {messageContainer.map((message) => message)}
                </div> */}
              </div>
              <Form.Control
                id="msgfld"
                type="text"
                placeholder="Enter message"
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
                value={message}
              />
            </Form.Group>

            <Button variant="primary" onClick={sendMessage}>
              Send Message
            </Button>
          </Form>
          {/* <h1>Message:</h1> */}
        </div>
      )}
    </>
  );
}
export default Chat;
