import React from "react";
import "../styles/VideoList.css";

const videoData = [
    {
        url: "https://www.youtube.com/embed/video_id_3",
        title: "Introduction to Machine Learning",
        description: "Learn the basics of Machine Learning and its applications."
    },
    {
        url: "https://www.youtube.com/embed/video_id_3",
        title: "Deep Learning Fundamentals",
        description: "A beginner-friendly guide to neural networks and deep learning."
    },
    {
        url: "https://www.youtube.com/embed/video_id_3",
        title: "Data Science with Python",
        description: "Explore the power of Python for Data Science and AI."
    }
];

const syllabusData = [
    {
        subject: "Probability and Statistics",
        topics: [
            { name: "Counting (permutation and combinations)", videoUrl: "https://www.youtube.com/embed/jvZVnaloiJY" },
            { name: "Probability axioms", videoUrl: "https://www.youtube.com/embed/5zvcIQAbACY" },
            { name: "Sample space, events, independent events, mutually exclusive events", videoUrl: "https://www.youtube.com/embed/video_id_3" },
            { name: "Marginal, conditional and joint probability", videoUrl: "https://www.youtube.com/embed/video_id_4" },
            { name: "Bayes Theorem", videoUrl: "https://www.youtube.com/embed/video_id_5" },
            { name: "Conditional expectation and variance", videoUrl: "https://www.youtube.com/embed/video_id_6" },
            { name: "Mean, median, mode and standard deviation", videoUrl: "https://www.youtube.com/embed/video_id_7" },
            { name: "Correlation, covariance", videoUrl: "https://www.youtube.com/embed/video_id_8" },
            { name: "Random variables, discrete random variables and probability mass functions", videoUrl: "https://www.youtube.com/embed/video_id_9" },
            { name: "Uniform, Bernoulli, binomial distribution", videoUrl: "https://www.youtube.com/embed/video_id_10" },
            { name: "Continuous random variables and probability distribution function", videoUrl: "https://www.youtube.com/embed/video_id_11" },
            { name: "Uniform, exponential, Poisson, normal, standard normal, t-distribution, chi-squared distributions", videoUrl: "https://www.youtube.com/embed/video_id_12" },
            { name: "Cumulative distribution function", videoUrl: "https://www.youtube.com/embed/video_id_13" },
            { name: "Conditional PDF", videoUrl: "https://www.youtube.com/embed/video_id_14" },
            { name: "Central limit theorem", videoUrl: "https://www.youtube.com/embed/video_id_15" },
            { name: "Confidence interval, z-test, t-test, chi-squared test", videoUrl: "https://www.youtube.com/embed/video_id_16" }
        ]
    },
    {
        subject: "Linear Algebra",
        topics: [
            { name: "Vector space", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Subspaces", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Linear dependence and independence of vectors", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "Matrices", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Projection matrix", videoUrl: "https://www.youtube.com/watch?v=jkl" },
            { name: "Orthogonal matrix", videoUrl: "https://www.youtube.com/watch?v=mno" },
            { name: "Idempotent matrix", videoUrl: "https://www.youtube.com/watch?v=pqr" },
            { name: "Partition matrix and their properties", videoUrl: "https://www.youtube.com/watch?v=stu" },
            { name: "Quadratic forms", videoUrl: "https://www.youtube.com/watch?v=vwx" },
            { name: "Systems of linear equations and solutions; Gaussian elimination", videoUrl: "https://www.youtube.com/watch?v=yza" },
            { name: "Eigenvalues and eigenvectors", videoUrl: "https://www.youtube.com/watch?v=abc123" },
            { name: "Determinant, rank, nullity", videoUrl: "https://www.youtube.com/watch?v=def456" },
            { name: "LU decomposition", videoUrl: "https://www.youtube.com/watch?v=ghi789" },
            { name: "Singular value decomposition", videoUrl: "https://www.youtube.com/watch?v=jkl012" }
        ]
    },
    {
        subject: "Calculus and Optimization",
        topics: [
            { name: "Functions of a single variable", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Limit, continuity, and differentiability", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Taylor series", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "Maxima and minima", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Optimization involving a single variable", videoUrl: "https://www.youtube.com/watch?v=jkl" }
        ]
    },
    {
        subject: "Programming, Data Structures and Algorithms",
        topics: [
            { name: "Programming in Python", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Basic data structures: stacks, queues, linked lists, trees, hash tables", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Search algorithms: linear search and binary search", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "Basic sorting algorithms: selection sort, bubble sort and insertion sort", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Divide and conquer: mergesort, quicksort", videoUrl: "https://www.youtube.com/watch?v=jkl" },
            { name: "Introduction to graph theory", videoUrl: "https://www.youtube.com/watch?v=mno" },
            { name: "Basic graph algorithms: traversals and shortest path", videoUrl: "https://www.youtube.com/watch?v=pqr" }
        ]
    },
    {
        subject: "Database Management and Warehousing",
        topics: [
            { name: "ER-model, relational model", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Relational algebra, tuple calculus, SQL", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Integrity constraints, normal form", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "File organization, indexing, data types", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Data transformation: normalization, discretization, sampling, compression", videoUrl: "https://www.youtube.com/watch?v=jkl" },
            { name: "Data warehouse modeling: schema for multidimensional data models", videoUrl: "https://www.youtube.com/watch?v=mno" },
            { name: "Concept hierarchies, measures, categorization and computations", videoUrl: "https://www.youtube.com/watch?v=pqr" }
        ]
    },
    {
        subject: "Machine Learning",
        topics: [
            { name: "Supervised Learning: regression and classification problems", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Simple linear regression, multiple linear regression", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Ridge regression, logistic regression", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "k-nearest neighbour, naive Bayes classifier", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Linear discriminant analysis, support vector machine", videoUrl: "https://www.youtube.com/watch?v=jkl" },
            { name: "Decision trees, bias-variance trade-off", videoUrl: "https://www.youtube.com/watch?v=mno" },
            { name: "Cross-validation methods", videoUrl: "https://www.youtube.com/watch?v=pqr" },
            { name: "Multi-layer perceptron, feed-forward neural network", videoUrl: "https://www.youtube.com/watch?v=stu" },
            { name: "Unsupervised Learning: clustering algorithms", videoUrl: "https://www.youtube.com/watch?v=vwx" },
            { name: "k-means/k-medoid, hierarchical clustering", videoUrl: "https://www.youtube.com/watch?v=yza" },
            { name: "Dimensionality reduction, principal component analysis", videoUrl: "https://www.youtube.com/watch?v=abc123" }
        ]
    },
    {
        subject: "AI",
        topics: [
            { name: "Search: informed, uninformed, adversarial", videoUrl: "https://www.youtube.com/watch?v=xyz" },
            { name: "Logic, propositional, predicate", videoUrl: "https://www.youtube.com/watch?v=abc" },
            { name: "Reasoning under uncertainty topics", videoUrl: "https://www.youtube.com/watch?v=def" },
            { name: "Conditional independence representation, exact inference through variable elimination", videoUrl: "https://www.youtube.com/watch?v=ghi" },
            { name: "Approximate inference through sampling", videoUrl: "https://www.youtube.com/watch?v=jkl" }
        ]
    }
];

const VideoList = () => {
    const openVideo = (url) => {
        window.open(url, "_blank"); // Opens the video URL in a new tab
    };

    return (
        <div className="video-list">
            {videoData.map((video, index) => (
                <div className="video-item" key={index} style={{ marginBottom: '20px' }}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                    <iframe
                        width="100%"
                        height="200"
                        src={video.url}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}

            {/* Syllabus Section */}
            <div className="syllabus-section" style={{ marginTop: '40px' }}>
                <h2 style={{ color: '#333', fontSize: '2rem' }}>Syllabus</h2>
                {syllabusData.map((subject, index) => (
                    <div key={index} className="syllabus-item" style={{ marginBottom: '30px' }}>
                        <h3 style={{ color: '#007bff', fontSize: '1.5rem' }}>{subject.subject}</h3>
                        <ul style={{ paddingLeft: '20px' }}>
                            {subject.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} style={{ marginBottom: '10px' }}>
                                    <button 
                                        onClick={() => openVideo(topic.videoUrl)}
                                        style={{
                                            cursor: "pointer",
                                            color: "white",
                                            background: 'none',
                                            border: 'none',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        {topic.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoList;
