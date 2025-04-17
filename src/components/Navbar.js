import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar">
            <h1>Gnanify - Learn Smarter!</h1>

            {/* Hamburger Menu Icon */}
            <div className="hamburger" onClick={toggleNav}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {/* Navbar links */}
            <ul className={`nav-links ${isNavOpen ? "open" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/blogs">Blogs</Link></li> {/* New Blogs Link */}
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
