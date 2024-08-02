import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Login from '../pages/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

// Create a root and render your component
const root = createRoot(appDiv);
root.render(<App />);