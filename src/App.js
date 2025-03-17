import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Courses from "./components/courses"; // Ensure correct path
import "./styles/App.css";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                {/* Home Page */}
                <Route path="/" element={
                    <div className="app-container">
                        <Slogan />
                        <VideoList />
                        <Founder />
                        <Footer />
                    </div>
                } />

                {/* Courses Page */}
                <Route path="/courses" element={<Courses />} />
            </Routes>
        </div>
    );
}

export default App;
