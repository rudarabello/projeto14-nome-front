import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./contexts/Context";
import { useState } from "react";
import Home from "../src/components/Home"
import RegisterScreen from "./components/RegisterScreen";
import Login from "../src/components/Login"


export default function App() {
    const [data, setData] = useState([{}]);
    return (
        <Context.Provider value={{ data, setData }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<RegisterScreen />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}