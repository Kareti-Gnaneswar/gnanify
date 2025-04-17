import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setAdminAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to navigate to another page

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make the POST request to the login API
      const response = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // On success, set the admin authentication status
        setAdminAuthenticated(true);
        setLoginError('');
        navigate('/admin-dashboard'); // Redirect to dashboard on successful login
      }
    } catch (error) {
      setLoginError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <h1>Admin Login</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}

      <style jsx>{`
        .admin-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f4f4f4;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        form {
          display: flex;
          flex-direction: column;
          width: 300px;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        input {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        button {
          padding: 10px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:disabled {
          background-color: #ccc;
        }

        button:hover {
          background-color: #218838;
        }

        p {
          color: red;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;
