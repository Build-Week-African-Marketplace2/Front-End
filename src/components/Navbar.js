import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return(
        <nav id="navigation">
            <div className="logo">
                <h2>Sauti<span id="reddot">.</span></h2>
            </div>

            <div className="navbar-content">
                <a className="link" href="#">Home</a>
                <a className="link" href="#">Approach</a>
                <a className="link" href="#">Impact</a>
                <a className="link" href="#">Contact</a>
                <Link className="link" to="/login">Login</Link>
                <Link className="link" to="/register">Register</Link>
                <a href="#"><img className="twitter" src="https://raw.githubusercontent.com/samcode206/Marketing-Page/sameem-hadi/AfricanMarket/images/Ticon.png" alt="twitter logo"/></a>
            </div>
        </nav>
    )
};

export default Navbar;