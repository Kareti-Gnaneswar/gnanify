import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate
import axios from "axios"; 

function Signin() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // initialize navigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signin', formData);
            const { token, username } = res.data; // assuming backend returns username also
            localStorage.setItem('userToken', token); // save token
            localStorage.setItem('username', username); // save username
            setMessage('Login successful!');
            navigate("/"); // redirect to home
        } catch (err) {
            // Check if the error is from the response, otherwise a network issue
            const errorMessage = err.response?.data?.message || 'Signin failed. Please try again.';
            setMessage(errorMessage);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-form">
                <h2>Signin</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        required 
                    />
                    <button type="submit">Signin</button>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="signup-link">
                    Don't have an account yet? <span onClick={() => navigate("/signup")}>Sign up here</span>
                </p>
            </div>

            {/* Internal CSS */}
            <style jsx="true">{`
                .auth-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f4f4f9;
                }

                .auth-form {
                    background-color: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 400px;
                    text-align: center;
                }

                .auth-form h2 {
                    margin-bottom: 20px;
                    font-size: 24px;
                    font-weight: 600;
                }

                .auth-form input {
                    width: 100%;
                    padding: 12px;
                    margin: 8px 0;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 16px;
                }

                .auth-form button {
                    width: 100%;
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                }

                .auth-form button:hover {
                    background-color: #0056b3;
                }

                .message {
                    color: #f00;
                    margin-top: 10px;
                }

                .signup-link {
                    margin-top: 15px;
                    font-size: 14px;
                }

                .signup-link span {
                    color: #007bff;
                    cursor: pointer;
                }

                .signup-link span:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
}

export default Signin;
