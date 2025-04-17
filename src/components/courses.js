import React, { useState, useEffect } from "react";
import "../styles/Courses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [openTopicIndex, setOpenTopicIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

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
      <aside className="sidebar">
        <h3>Courses</h3>
        <ul>
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

      <main className="course-content">
        <h2>{activeCourse.title}</h2>
        {activeCourse.topics.map((topic, index) => (
          <div key={index} className="topic">
            <div
              className="topic-header"
              onClick={() =>
                setOpenTopicIndex(openTopicIndex === index ? null : index)
              }
            >
              <h3>
                {topic.title} {openTopicIndex === index ? "▲" : "▼"}
              </h3>
            </div>

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
                            <i className="fas fa-file-pdf"></i>
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
                            <i className="fab fa-youtube"></i>
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
                            <i className="fas fa-globe"></i>
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
