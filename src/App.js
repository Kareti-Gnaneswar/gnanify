import React from "react";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer"; 
import "./styles/App.css";
import Founder from "./components/Founder";

function App() {
    return (
        <div className="app-container">
            <Navbar />
            <Slogan />
            <VideoList />
            <Founder/>
            <Footer/>
        </div>
    );
}

export default App;
