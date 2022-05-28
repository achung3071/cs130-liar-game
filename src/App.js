import { Routes, Route } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.min.css";
import Home from "./components/Home";
import Reveal from "./components/Reveal";
import Round from "./components/Round";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reveal-word" element={<Reveal />} />
            <Route path="/play-game" element={<Round />} />
        </Routes>
    );
}

export default App;
