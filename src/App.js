//from react
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

//comp
import Nbar from "./components/Nbar";
import About from "./components/About";
import Account from "./components/Account";
import Chat from "./components/Chat";
import Home from "./components/Home";

//css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Nbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chat" element={<Chat />} />
        <Route path="account" element={<Account />} />

        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
