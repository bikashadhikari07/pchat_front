import io from "socket.io-client";
import { useState } from "react";
import ChatRoom from "./Room";
const socket = io.connect("http://localhost:3001");

function Login() {
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
      <ChatRoom />;
    }
  };

  return (
    <>
      <h1>Waiting Rooms</h1>
      <input
        placeholder="room id"
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />

      <button onClick={joinRoom}> join room</button>
    </>
  );
}
export default Login;
