import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import Login from '../pages/Login';
import Home from "../pages/Home";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Router>

        );
    }
}

const appDiv = document.getElementById("app");

// Create a root and render your component
const root = createRoot(appDiv);
root.render(<App />);