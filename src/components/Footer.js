import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "../styles/Footer.css"; // Ensure this file exists

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Address Section */}
                <div className="footer-section address">
                    <h3>📍 Contact Us</h3>
                    <p><strong>Gnanify EdTech Pvt Ltd</strong></p>
                    <p>Balaji Colony, Tirupati, Andhra Pradesh - 517501, India</p>
                    <p><FaEnvelope /> <a href="mailto:support@gnanify.com">support@gnanify.com</a></p>
                    <p><FaPhone /> <a href="tel:+919876543210">+91 98765 43210</a></p>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>🔗 Quick Links</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/courses">Courses</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section social">
                    <h3>🌍 Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024 Gnanify. All rights reserved. | <a href="/privacy">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;
