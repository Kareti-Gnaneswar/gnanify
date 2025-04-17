import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/BlogDetail.css";


const blogData = [
    {
        id: 1,
        title: "5 Tips to Study Smarter, Not Harder",
        author: "Jane Doe",
        date: "April 10, 2025",
        content: `
        1. Set Clear Goals
        2. Use Active Recall
        3. Teach What You Learn
        4. Take Smart Breaks
        5. Stay Consistent
        `
    },
    {
        id: 2,
        title: "Top 10 Free Learning Resources in 2025",
        author: "John Smith",
        date: "March 28, 2025",
        content: `
        - Coursera
        - edX
        - FreeCodeCamp
        - Khan Academy
        - Harvard Online
        `
    },
    {
        id: 3,
        title: "How to Stay Motivated During Online Learning",
        author: "Emily Davis",
        date: "February 15, 2025",
        content: `
        - Set a routine
        - Reward yourself
        - Track progress
        - Join online groups
        `
    }
];

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogData.find(b => b.id === parseInt(id));

    // Like, dislike, and comments state
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    if (!blog) return <div><h2>Blog not found</h2></div>;

    return (
        <div className="blog-detail">
            <button onClick={() => navigate(-1)} className="back-btn">← Back</button>
            <h1>{blog.title}</h1>
            <p><strong>By:</strong> {blog.author} | <em>{blog.date}</em></p>

            <div className="blog-content">
                {blog.content.split("\n").map((line, idx) =>
                    line.trim() && <p key={idx}>{line.trim()}</p>
                )}
            </div>

            {/* Actions */}
            <div className="blog-actions">
                <button onClick={() => setLikes(likes + 1)}>❤️ Like ({likes})</button>
                <button onClick={() => setDislikes(dislikes + 1)}>👎 Dislike ({dislikes})</button>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)}>🔗 Share</button>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Comments</h3>
                <form onSubmit={handleCommentSubmit}>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write a comment..."
                        rows="3"
                    />
                    <button type="submit">Post Comment</button>
                </form>

                {comments.length > 0 ? (
                    <ul className="comment-list">
                        {comments.map((cmt, idx) => (
                            <li key={idx}>💬 {cmt}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
