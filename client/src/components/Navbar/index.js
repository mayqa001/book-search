import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Navbar(){
  return(
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <span className="navbar-brand mb-1 h1">Book serach</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item">
          <Link className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} to="./search">Search</Link>
        </li>
        <li className="nav-item">
          <Link  className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} to="./saved">Saved</Link>
        </li>
      </ul>
    </div>
  </nav>
  )}

export default Navbar;
