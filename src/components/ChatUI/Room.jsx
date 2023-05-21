// import io from "socket.io-client";
// import { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// const socket = io.connect("http://localhost:3001");

// function ChatRoom() {
//   const { state } = useLocation();
//   const { room, username } = state;
//   // const { room, username } = useParams;
//   // const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//     console.log("test");
//   };
//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);

//   return (
//     <>
//       <h1> Chat Room</h1>

//       <input
//         type="text"
//         placeholder="message"
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       ></input>
//       <button onClick={sendMessage}>send msg</button>
//       <h1>Message:</h1>
//       {messageReceived}
//     </>
//   );
// }
// export default ChatRoom;
