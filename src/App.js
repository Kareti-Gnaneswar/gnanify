import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

// Pages
import Profile from "./pages/Profile";

import Courses from "./components/courses";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Founder from "./components/Founder";
import VideoList from "./components/VideoList";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

// Styles
import "./styles/App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);

    // Check login status and admin status on page load
    useEffect(() => {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
            setIsLoggedIn(true); // User is logged in if token exists
        }

        const adminAuthStatus = localStorage.getItem("adminAuthenticated");
        if (adminAuthStatus === 'true') {
            setAdminAuthenticated(true);
        }
    }, []);

    // Update login state
    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("userToken", "someUserToken"); // Example, replace with actual token logic
    };

    // Update admin login state
    const handleAdminLogin = () => {
        setAdminAuthenticated(true);
        localStorage.setItem("adminAuthenticated", "true");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("userToken");
    };

    const handleAdminLogout = () => {
        setAdminAuthenticated(false);
        localStorage.removeItem("adminAuthenticated");
    };

    return (
        <div className="app-container">
            <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={
                    <>
                        <Slogan />
                        <Blogs />
                        <VideoList />
                        <Founder />
                        <Footer />
                    </>
                } />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} /> 

                {/* Auth Routes */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin onLogin={handleLogin} />} />

                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin handleAdminLogin={handleAdminLogin} />} />
                <Route path="/admin-dashboard" element={
                    adminAuthenticated ? (
                        <AdminDashboard handleAdminLogout={handleAdminLogout} />
                    ) : (
                        <Navigate to="/admin" replace />
                    )
                } />

                {/* Restricted Route */}
                <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/signin" />} />
            </Routes>
        </div>
    );
}

export default App;
