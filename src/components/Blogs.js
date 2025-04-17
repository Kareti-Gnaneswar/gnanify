import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import "../styles/Blogs.css";

const blogData = [
    {
        id: 1,
        title: "5 Tips to Study Smarter, Not Harder",
        author: "Jane Doe",
        date: "April 10, 2025",
        summary: "Discover effective study techniques to boost your learning and retention with less stress."
    },
    {
        id: 2,
        title: "Top 10 Free Learning Resources in 2025",
        author: "John Smith",
        date: "March 28, 2025",
        summary: "Check out the best platforms offering free courses, ebooks, and tutorials."
    },
    {
        id: 3,
        title: "How to Stay Motivated During Online Learning",
        author: "Emily Davis",
        date: "February 15, 2025",
        summary: "Struggling with focus? These motivation hacks will help you push through the distractions."
    }
];

const Blogs = () => {
    return (
        <div className="blogs-container">
            <h2>Our Latest Blogs</h2>
            <div className="blog-list">
                {blogData.map(blog => (
                    <div key={blog.id} className="blog-card">
                        <h3>{blog.title}</h3>
                        <p><strong>By:</strong> {blog.author} | <em>{blog.date}</em></p>
                        <p>{blog.summary}</p>
                        {/* Updated Button */}
                        <Link to={`/blogs/${blog.id}`}>
                            <button className="read-more">Read More</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
