import React, { useEffect, useState } from "react";
import "../styles/Slogan.css";

const slogans = [
    "Learnify, Simplify, Gnanify!",
    "Techify, Amplify, Gnanify!",
    "Clarify, Identify, Gnanify!",
    "Educify, Intensify, Gnanify!",
    "Motivate, Simplify, Gnanify!",
    "Simplify, Beautify, Gnanify!",
    "Identify, Amplify, Gnanify!",
    "Techify, Clarify, Gnanify!",
    "Verify, Magnify, Gnanify!",
    "Simplify, Verify, Gnanify!",
    "Educify, Modify, Gnanify!",
    "Clarify, Techify, Gnanify!",
    "Motivate, Electrify, Gnanify!",
    "Simplify, Unify, Gnanify!",
    "Amplify, Intensify, Gnanify!",
    "Beautify, Simplify, Gnanify!",
    "Identify, Simplify, Gnanify!",
    "Magnify, Simplify, Gnanify!",
    "Techify, Verify, Simplify!",
    "Simplify, Certify, Gnanify!",
    "Clarify, Testify, Gnanify!",
    "Motivate, Electrify, Simplify!",
    "Amplify, Verify, Gnanify!",
    "Techify, Amplify, Beautify!",
    "Simplify, Identify, Gnanify!",
    "Educify, Testify, Gnanify!",
    "Verify, Modify, Gnanify!",
    "Motivate, Amplify, Gnanify!",
    "Identify, Modify, Gnanify!",
    "Techify, Magnify, Gnanify!",
    "Simplify, Quantify, Gnanify!",
    "Clarify, Beautify, Gnanify!",
    "Motivate, Verify, Gnanify!",
    "Amplify, Simplify, Identify!",
    "Techify, Simplify, Clarify!",
    "Simplify, Identify, Verify!",
    "Magnify, Amplify, Gnanify!",
    "Educify, Identify, Gnanify!",
    "Simplify, Quantify, Certify!",
    "Techify, Simplify, Magnify!",
    "Clarify, Magnify, Electrify!",
    "Motivate, Verify, Simplify!",
    "Amplify, Certify, Gnanify!",
    "Educify, Magnify, Gnanify!",
    "Simplify, Beautify, Verify!",
    "Identify, Beautify, Gnanify!",
    "Motivate, Unify, Gnanify!",
    "Techify, Electrify, Gnanify!",
    "Simplify, Techify, Certify!",
    "Identify, Techify, Magnify!",
    "Educify, Amplify, Verify!",
    "Clarify, Testify, Beautify!",
    "Motivate, Beautify, Simplify!",
    "Techify, Simplify, Magnify!",
    "Amplify, Certify, Magnify!",
    "Simplify, Unify, Techify!",
    "Verify, Motivate, Gnanify!",
    "Identify, Simplify, Beautify!",
    "Techify, Magnify, Electrify!",
    "Simplify, Certify, Techify!",
    "Magnify, Certify, Gnanify!",
    "Motivate, Identify, Amplify!",
    "Educify, Simplify, Techify!",
    "Verify, Amplify, Techify!",
    "Motivate, Simplify, Certify!",
    "Simplify, Testify, Gnanify!"
];

const Slogan = () => {
    const [slogan, setSlogan] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * slogans.length);
        setSlogan(slogans[randomIndex]);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== "") {
            const query = encodeURIComponent(searchQuery);
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
        }
    };

    return (
        <div className="slogan-container">
            {/* 🔍 Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search anything (e.g., GeeksforGeeks, React JS)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {/* 🎯 Random Slogan */}
            <h2 className="slogan">{slogan}</h2>
            <p className="slogan-description">
                Welcome to <strong>Gnanify</strong>! 🚀 I teach AI, Machine Learning, GATE Data Science, 
                and cutting-edge technology concepts to help you master competitive exams and stay ahead in the tech world. 
                Subscribe to my <a href="https://www.youtube.com/channel/YOUR_CHANNEL_LINK" target="_blank" rel="noopener noreferrer">YouTube channel</a> 
                for high-quality learning content here!
            </p>
        </div>
    );
};

export default Slogan;
