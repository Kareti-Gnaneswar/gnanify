import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Blogs.css'; // Import the Blogs.css file

const TutorialsPointLayout = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubtopic, setActiveSubtopic] = useState(null);
  const [expandedSubtopic, setExpandedSubtopic] = useState(null);

  const categories = {
    "Web Development": ["HTML", "CSS", "JavaScript", "React"],
    "Programming Languages": ["C++", "Java", "Python", "Go"],
    "Data Science": ["Pandas", "NumPy", "Machine Learning"]
  };

  const recentPosts = [
    "How to use useEffect in React",
    "HTML5 Semantic Elements",
    "NumPy vs Pandas: Key Differences",
    "Java Interfaces Explained"
  ];

  const blogData = [
    {
      id: 1,
      title: "Getting Started with HTML",
      category: "Web Development",
      subtopic: "HTML",
      summary: "A beginner's guide to structuring web pages using HTML."
    },
    {
      id: 2,
      title: "Understanding React useEffect",
      category: "Web Development",
      subtopic: "React",
      summary: "Learn how to use side effects in functional components."
    },
    {
      id: 3,
      title: "Intro to Java",
      category: "Programming Languages",
      subtopic: "Java",
      summary: "Understand Java basics: variables, classes, and OOP."
    }
  ];

  const subtopicContent = {
    HTML: {
      title: "HTML Tags Introduction",
      content: (
        <div>
          <p>HTML (HyperText Markup Language) is the standard language used to create webpages. HTML tags are the building blocks of web pages.</p>
        </div>
      ),
      tags: ["<div>", "<p>", "<h1>", "<a>", "<img>"]
    },
    React: {
      title: "Introduction to React",
      content: (
        <div>
          <p>React is a JavaScript library for building user interfaces. It allows developers to build reusable UI components and manage the state of an application.</p>
        </div>
      ),
      tags: []
    },
    Java: {
      title: "Introduction to Java",
      content: (
        <div>
          <p>Java is a popular programming language that is widely used for building desktop, web, and mobile applications. It follows the object-oriented paradigm.</p>
        </div>
      ),
      tags: []
    }
  };

  const filteredBlogs = blogData.filter((blog) => {
    if (!activeSubtopic) return false;
    return blog.subtopic === activeSubtopic;
  });

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null); // Deselect if it's already active
      setActiveSubtopic(null);  // Reset subtopic when deselecting category
      setExpandedSubtopic(null); // Collapse all tags
    } else {
      setActiveCategory(category);
      setActiveSubtopic(null); // Reset the subtopic when selecting a new category
      setExpandedSubtopic(null); // Collapse all tags
    }
  };

  const handleSubtopicClick = (subtopic) => {
    setActiveSubtopic((prevSubtopic) =>
      prevSubtopic === subtopic ? null : subtopic
    );
    setExpandedSubtopic(subtopic === expandedSubtopic ? null : subtopic);
  };

  const handleTagClick = (tag) => {
    setActiveSubtopic(tag);
  };

  return (
    <>
      {/* Top Navbar with Subjects */}
      <nav className="navbar">
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className={`navItem ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </nav>

      {/* Layout */}
      <div className="container">
        {/* Left Sidebar: Subtopics */}
        <aside className="leftSidebar">
          <h3>Subtopics</h3>
          {activeCategory ? (
            categories[activeCategory].map((sub) => (
              <div key={sub}>
                <div
                  onClick={() => handleSubtopicClick(sub)}
                  className={`subtopic ${activeSubtopic === sub ? 'active' : ''}`}
                >
                  {sub}
                </div>
                {expandedSubtopic === sub && subtopicContent[sub]?.tags && (
                  <ul className="tagList">
                    {subtopicContent[sub]?.tags.map((tag) => (
                      <li
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`tagItem ${activeSubtopic === tag ? 'active' : ''}`}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p>Select a subject above</p>
          )}
        </aside>

        {/* Main Content */}
        <main className="contentArea">
          <h2>
            {activeSubtopic
              ? `Tutorials on ${activeSubtopic}`
              : "Select a subtopic from the left"}
          </h2>
          {activeSubtopic && (
            <div className="contentBox">
              <h3>{subtopicContent[activeSubtopic]?.title}</h3>
              <div>{subtopicContent[activeSubtopic]?.content}</div>
            </div>
          )}
          {filteredBlogs.length ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="blogCard">
                <h3 className="blogTitle">{blog.title}</h3>
                <p>{blog.summary}</p>
                <Link to={`/blogs/${blog.id}`}>Read More</Link>
              </div>
            ))
          ) : (
            activeSubtopic && (
              <p style={{ color: "#777" }}>No tutorials available yet.</p>
            )
          )}
        </main>

        {/* Right Sidebar */}
        <aside className="rightSidebar">
          <h3>Recent Posts</h3>
          <ul>
            {recentPosts.map((post, index) => (
              <li key={index} className="recentPost">
                {post}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default TutorialsPointLayout;
