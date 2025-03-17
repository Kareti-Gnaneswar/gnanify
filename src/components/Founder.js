import React from "react";
import "../styles/Founder.css";

const Founder = () => {
    return (
        <section className="founder-section">
            <div className="founder-container">
                <div className="founder-card">
                    <img
                        src="https://yt3.ggpht.com/7WjKqybk6PZNUAKrLsr1S0_2Rgql8dEKYwTIPN52kp8l9dvN-Wd0POsEaJTkBKVlZE2KzBYRXA=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                        alt="Founder"
                        className="founder-img"
                    />
                    <div className="founder-info">
                        <h2>Gnaneswar Kareti</h2>
                        <h4>Founder, CEO & Lead Educator</h4>
                        <p>
                            Passionate about revolutionizing education through AI and ML, I founded
                            Gnanify to provide top-quality learning resources In Concepts reated to AI, Ml, Data Science.
                        </p>
                        <p>
                            With expertise in AI, ML, and Data Science, my vision is to create an
                            engaging and interactive platform for learners worldwide.
                        </p>
                        <div className="founder-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
