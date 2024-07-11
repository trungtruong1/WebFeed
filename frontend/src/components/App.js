import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./SignIn"; // Make sure the path is correct

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Vailon</h1>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

// Create a root and render your component
const root = createRoot(appDiv);
root.render(<App />);