import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-heading">
                <h2 className="fade-in">Get in Touch</h2>
                <p className="fade-in">
                    We're here to assist you! Reach out with any questions or concerns.
                </p>
            </div>

            <div className="contact-info">
                <div className="info-item fade-in">
                    <h3>Email:</h3>
                    <p><a href="mailto:support@gnanify.com">support@gnanify.com</a></p>
                </div>
                <div className="info-item fade-in">
                    <h3>Phone:</h3>
                    <p>+1 234 567 890</p>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className="social-icons fade-in">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram-square"></i>
                </a>
            </div>

            <form onSubmit={handleSubmit} className="contact-form fade-in">
                <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
