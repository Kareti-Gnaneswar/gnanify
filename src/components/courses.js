import React, { useState, useEffect } from "react";
import "../styles/Courses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Courses = () => {
  // Dummy data for courses
  const [courses, setCourses] = useState([
    {
      _id: "1",
      title: "React Basics",
      topics: [
        {
          title: "Introduction to React",
          subtopics: [
            {
              title: "What is React?",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example1" },
                youtube: { link: "https://youtube.com/example1" },
                article: { link: "https://example.com/article1" },
              },
            },
            {
              title: "Setting up React",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example2" },
                youtube: { link: "https://youtube.com/example2" },
                article: { link: "https://example.com/article2" },
              },
            },
          ],
        },
        {
          title: "React Components",
          subtopics: [
            {
              title: "Class Components",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example3" },
                youtube: { link: "https://youtube.com/example3" },
                article: { link: "https://example.com/article3" },
              },
            },
            {
              title: "Functional Components",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example4" },
                youtube: { link: "https://youtube.com/example4" },
                article: { link: "https://example.com/article4" },
              },
            },
          ],
        },
      ],
    },
    {
      _id: "2",
      title: "JavaScript Fundamentals",
      topics: [
        {
          title: "Introduction to JavaScript",
          subtopics: [
            {
              title: "What is JavaScript?",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example5" },
                youtube: { link: "https://youtube.com/example5" },
                article: { link: "https://example.com/article5" },
              },
            },
            {
              title: "Basic Syntax",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example6" },
                youtube: { link: "https://youtube.com/example6" },
                article: { link: "https://example.com/article6" },
              },
            },
          ],
        },
        {
          title: "JavaScript ES6",
          subtopics: [
            {
              title: "Arrow Functions",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example7" },
                youtube: { link: "https://youtube.com/example7" },
                article: { link: "https://example.com/article7" },
              },
            },
            {
              title: "Destructuring",
              resources: {
                pdf: { link: "https://drive.google.com/file/d/example8" },
                youtube: { link: "https://youtube.com/example8" },
                article: { link: "https://example.com/article8" },
              },
            },
          ],
        },
      ],
    },
  ]);

  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [openTopicIndex, setOpenTopicIndex] = useState(null);
  const [loading, setLoading] = useState(false); // Setting to false since we're using dummy data

  // Normally would fetch data from an API, but since we're using dummy data, we don't need this now.
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/api/courses");
  //       const data = await response.json();
  //       setCourses(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchCourses();
  // }, []);

  const getPreviewLink = (link) => {
    const match = link.match(/\/file\/d\/(.*?)\//);
    if (match) {
      const fileId = match[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return link;
  };

  if (loading) return <p>Loading courses...</p>;
  if (!courses.length) return <p>No courses available.</p>;

  const activeCourse = courses[activeCourseIndex];

  return (
    <div className="course-layout">
      {/* Sidebar to display the list of courses */}
      <aside className="sidebar">
        <h3>Courses</h3>
        <ul>
          {/* Iterating over the courses to create a list */}
          {courses.map((course, index) => (
            <li
              key={course._id}
              className={activeCourseIndex === index ? "active" : ""}
              onClick={() => {
                setActiveCourseIndex(index);
                setOpenTopicIndex(null);
              }}
            >
              {course.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content area to display the active course details */}
      <main className="course-content">
        <h2>{activeCourse.title}</h2>
        
        {/* Iterating over the topics of the active course */}
        {activeCourse.topics.map((topic, index) => (
          <div key={index} className="topic">
            <div
              className="topic-header"
              onClick={() =>
                setOpenTopicIndex(openTopicIndex === index ? null : index) // Toggle visibility of the topic
              }
            >
              <h3>
                {topic.title} {openTopicIndex === index ? "▲" : "▼"} {/* Toggle the arrow */}
              </h3>
            </div>

            {/* If the topic is open, show the subtopics and resources */}
            {openTopicIndex === index && (
              <table className="resource-table">
                <thead>
                  <tr>
                    <th>Subtopic</th>
                    <th>Notes</th>
                    <th>Video link</th>
                    <th>Article</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Iterating over the subtopics */}
                  {topic.subtopics.map((sub, idx) => (
                    <tr key={idx}>
                      <td>{sub.title}</td>
                      <td>
                        {sub.resources.pdf?.link && (
                          <a
                            href={getPreviewLink(sub.resources.pdf.link)}
                            rel="noopener noreferrer"
                            title={sub.resources.pdf.title}
                          >
                            <i className="fas fa-file-pdf"></i> {/* PDF icon */}
                          </a>
                        )}
                      </td>
                      <td>
                        {sub.resources.youtube?.link && (
                          <a
                            href={sub.resources.youtube.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={sub.resources.youtube.title}
                          >
                            <i className="fab fa-youtube"></i> {/* YouTube icon */}
                          </a>
                        )}
                      </td>
                      <td>
                        {sub.resources.article?.link && (
                          <a
                            href={sub.resources.article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={sub.resources.article.title}
                          >
                            <i className="fas fa-globe"></i> {/* Article icon */}
                          </a>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Courses;
