import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import LoginPage from '../pages/LoginPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginPage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");

// Create a root and render your component
const root = createRoot(appDiv);
root.render(<App />);