import React, { useState, useEffect } from "react";
import "../styles/Courses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const [openSubtopicIndex, setOpenSubtopicIndex] = useState({});
  const [completed, setCompleted] = useState({});
  const [loading, setLoading] = useState(true);

  const getPreviewLink = (link) => {
    const match = link.match(/\/file\/d\/(.*?)\//);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : link;
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/course/courses`);
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

  const activeCourse = courses[activeCourseIndex];

  useEffect(() => {
    if (!activeCourse?._id) return;
    const courseKey = `completed_${activeCourse._id}`;
    const stored = localStorage.getItem(courseKey);
    setCompleted(stored ? JSON.parse(stored) : {});
  }, [activeCourseIndex, courses, activeCourse?._id]);

  const handleCheck = (key) => {
    const updated = {
      ...completed,
      [key]: !completed[key],
    };
    setCompleted(updated);
    if (activeCourse?._id) {
      const courseKey = `completed_${activeCourse._id}`;
      localStorage.setItem(courseKey, JSON.stringify(updated));
    }
  };

  const toggleSubtopicDropdown = (subtopicTitle) => {
    setOpenSubtopicIndex((prev) => ({
      ...prev,
      [subtopicTitle]: !prev[subtopicTitle],
    }));
  };

  const calculateProgress = () => {
    if (!activeCourse) return 0;
    const totalSubtopics = activeCourse.subtopics?.length || 0;
    const completedSubtopics = activeCourse.subtopics?.filter((sub) =>
      sub.subsubtopics?.every((subsub) => completed[subsub.title])
    ).length || 0;

    return totalSubtopics === 0 ? 0 : Math.floor((completedSubtopics / totalSubtopics) * 100);
  };

  const progress = calculateProgress();

  if (loading || !activeCourse) {
    return <div className="loading">Loading course data...</div>;
  }

  return (
    <div className="course-layout">
      <aside className="sidebar">
        <h3>Courses</h3>
        <ul>
          {courses.map((course, index) => (
            <li
              key={course._id}
              className={activeCourseIndex === index ? "active" : ""}
              onClick={() => setActiveCourseIndex(index)}
            >
              {course.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="course-content">
        <h2>{activeCourse.title}</h2>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}% Completed</p>

        {activeCourse.subtopics?.map((sub, index) => (
          <div key={index} className="subtopic">
            <div
              className="subtopic-header"
              onClick={() => toggleSubtopicDropdown(sub.title)}
            >
              <h3>
                {sub.title} {openSubtopicIndex[sub.title] ? "▲" : "▼"}
              </h3>
            </div>

            {openSubtopicIndex[sub.title] && (
              <div className="subsubtopics">
                <table className="resource-table">
                  <thead>
                    <tr>
                      <th>✔</th>
                      <th>Title & Notes</th>
                      <th>PDF</th>
                      <th>Video</th>
                      <th>Article</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sub.subsubtopics?.map((subsub) => (
                      <tr key={subsub._id}>
                        <td>
                          <input
                            type="checkbox"
                            checked={!!completed[subsub.title]}
                            onChange={() => handleCheck(subsub.title)}
                          />
                        </td>
                        <td>
                          <strong>{subsub.title}</strong><br />
                          <small>{subsub.notes}</small>
                        </td>
                        <td>
                          {subsub.pdfUrl && (
                            <a
                              href={getPreviewLink(subsub.pdfUrl)}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View PDF"
                            >
                              <i className="fas fa-file-pdf"></i>
                            </a>
                          )}
                        </td>
                        <td>
                          {subsub.videoLink && (
                            <a
                              href={subsub.videoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Watch Video"
                            >
                              <i className="fab fa-youtube"></i>
                            </a>
                          )}
                        </td>
                        <td>
                          {subsub.article && (
                            <a
                              href={subsub.article}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Read Article"
                            >
                              <i className="fas fa-globe"></i>
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Courses;
