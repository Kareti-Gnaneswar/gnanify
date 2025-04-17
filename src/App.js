import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slogan from "./components/Slogan";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Courses from "./components/courses";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import Blogs from "./components/Blogs"; // ✅ Blogs component import
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import "./styles/App.css";

function App() {
    const [adminAuthenticated, setAdminAuthenticated] = useState(false);

    return (
        <div className="app-container">
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="app-container">
                            <Slogan />
                            <Blogs/>
                            <VideoList />
                            <Founder />
                            <Footer />
                        </div>
                    }
                />

                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} /> {/* ✅ Blogs Route */}
                
<Route path="/blogs/:id" element={<BlogDetail />} />
                <Route
                    path="/admin"
                    element={<AdminLogin setAdminAuthenticated={setAdminAuthenticated} />}
                />

                <Route
                    path="/admin-dashboard"
                    element={
                        adminAuthenticated ? (
                            <AdminDashboard />
                        ) : (
                            <Navigate to="/admin" replace />
                        )
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
