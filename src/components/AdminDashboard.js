import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/admin'); // Redirect back to login
  };

  return (
    <div>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          .admin-dashboard {
            display: flex;
            height: 100vh; /* Full viewport height */
          }

          .sidebar {
            width: 250px;
            background-color: #f4f4f4;
            padding: 20px;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
          }

          .sidebar button {
            margin-bottom: 15px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            border: none;
            background-color: #fff;
            border: 1px solid #ddd;
          }

          .sidebar button:hover {
            background-color: #eaeaea;
          }

          .dashboard-main {
            flex-grow: 1;
            padding: 20px;
            overflow-y: auto; /* Enables scrolling for content */
          }
        `}
      </style>

      <div className="admin-dashboard">
        <nav className="sidebar">
          <button onClick={() => navigate('/admin')}>🏠 Home</button>
          <button onClick={() => navigate('/admin/add-course')}>➕ Add Course</button>
          <button onClick={() => navigate('/admin/add-blog')}>📝 Add Blog</button>
          <button onClick={handleLogout} style={{ color: 'red' }}>
            🚪 Logout
          </button>
        </nav>

        <main className="dashboard-main">
          <h1>Welcome to the Admin Dashboard</h1>
          <div className="dashboard-actions">
            {/* Additional dashboard-specific actions or content go here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
