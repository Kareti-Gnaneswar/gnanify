import React from "react";
import "../styles/VideoList.css";

const videoData = [
    {
        url: "https://www.youtube.com/embed/jvZVnaloiJY",
        title: "Introduction to Machine Learning",
        description: "Learn the basics of Machine Learning and its applications."
    },
    {
        url: "https://www.youtube.com/embed/5zvcIQAbACY",
        title: "Deep Learning Fundamentals",
        description: "A beginner-friendly guide to neural networks and deep learning."
    },
    {
        url: "https://www.youtube.com/embed/video_id_3",
        title: "Data Science with Python",
        description: "Explore the power of Python for Data Science and AI."
    }
];

const VideoList = () => {
    return (
        <div className="video-list">
            {videoData.map((video, index) => (
                <div className="video-item" key={index}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <iframe
                        width="100%"
                        height="200"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default VideoList;
