import React from "react";
import "../styles/Courses.css";

const Courses = () => {
    const playlists = [
        { title: "Probability and Statistics", url: "https://www.youtube.com/playlist?list=XYZ" },
        { title: "Calculus and Optimization", url: "https://www.youtube.com/playlist?list=ABC" },
        { title: "Linar Algebra", url: "https://www.youtube.com/playlist?list=123" },
        { title: "DBMS", url: "https://www.youtube.com/playlist?list=DBMS123" },
        { title: "Machine Learning", url: "https://www.youtube.com/playlist?list=LA123" },
        { title: "DSA", url: "https://www.youtube.com/playlist?list=CAL123" },
        { title: "Aptitude", url: "https://www.youtube.com/playlist?list=APT123" },
        { title: "AI", url: "https://www.youtube.com/playlist?list=AI123" },
        { title: "Machine Learning", url: "https://www.youtube.com/playlist?list=PS123" }
    ];

    return (
        <div className="courses-container">
            <h2>Available Playlists</h2>
            <div className="cards-container">
                {playlists.map((playlist, index) => (
                    <div className="course-card" key={index}>
                        <h3>{playlist.title}</h3>
                        <a href={playlist.url} target="_blank" rel="noopener noreferrer">
                            <button className="course-btn">Go to Playlist</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
