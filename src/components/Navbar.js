import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = ({ onLogout, userData }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [showProfileCard, setShowProfileCard] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        setIsLoggedIn(!!token);
    }, []);

    // Don't render Navbar on 'signin' or 'signup' pages
    if (location.pathname === "/signin" || location.pathname === "/signup") {
        return null; // Do not render the Navbar on these pages
    }

    const toggleNav = () => setIsNavOpen(!isNavOpen);
    const toggleProfileCard = () => setShowProfileCard(!showProfileCard);

    const handleLogout = () => {
        localStorage.removeItem("userToken"); // Remove token on logout
        localStorage.removeItem("username");
        setShowProfileCard(false);
        setIsLoggedIn(false);
        onLogout();  // Calling the onLogout function passed from App component
        navigate("/");  // Redirect to home after logout
    };

    const handleProfileClick = () => {
        navigate("/profile"); // Redirect to Profile page
        setShowProfileCard(false); // Close the profile card
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">
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
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                        {/* Profile Icon or Sign In */}
                        {isLoggedIn ? (
                            <li className="profile" onClick={toggleProfileCard}>
                                <FaUserCircle size={24} />
                                {showProfileCard && (
                                    <div className="profile-card">
                                        <p>Hello, {userData?.username}</p>
                                        <button onClick={handleProfileClick}>Profile</button>
                                        <button onClick={handleLogout}>Logout</button>
                                    </div>
                                )}
                            </li>
                        ) : (
                            <li><Link to="/signin">Sign In</Link></li>
                        )}
                    </ul>
                </div>
            </nav>

            {/* Styling */}
            <style jsx>{`
                .navbar {
                    background-color: #1a1a1a;
                    color: #fff;
                    padding: 20px;
                    display: flex;
                    justify-content: center; /* Center the content */
                    align-items: center;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .navbar-content {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    max-width: 1200px;
                    align-items: center;
                    padding: 0 20px;
                }

                .navbar h1 {
                    font-size: 24px;
                    font-weight: bold;
                    cursor: pointer;
                    margin: 0;
                }

                .nav-links {
                    list-style-type: none;
                    display: flex;
                    gap: 20px;
                    align-items: center;
                }

                .nav-links.open {
                    display: block;
                    position: absolute;
                    top: 70px;
                    left: 0;
                    background-color: #333;
                    padding: 20px;
                    width: 100%;
                }

                .nav-links li a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 16px;
                }

                .nav-links li a:hover {
                    color: #ffcc00;
                }

                .hamburger {
                    display: none;
                    cursor: pointer;
                    flex-direction: column;
                    gap: 4px;
                }

                .hamburger .line {
                    width: 25px;
                    height: 3px;
                    background-color: #fff;
                }

                .profile {
                    position: relative;
                    cursor: pointer;
                }

                .profile-card {
                    position: absolute;
                    top: 35px;
                    right: 0;
                    background-color: #fff;
                    color: #000;
                    padding: 10px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }

                .profile-card button {
                    background-color: #ffcc00;
                    border: none;
                    padding: 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .profile-card button:hover {
                    background-color: #f9b300;
                }

                /* Media Query for Mobile */
                @media (max-width: 768px) {
                    .hamburger {
                        display: flex;
                    }

                    .nav-links {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
