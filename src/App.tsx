import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import { MainRoutes } from "./app/routing/routes";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, background: "black", color: "white" }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/projects" style={{ padding: 5 }}>
          Projects
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
      </nav>
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
