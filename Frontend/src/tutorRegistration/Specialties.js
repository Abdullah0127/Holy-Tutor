import MultiSteps from "./MultiSteps";
import { useState, useEffect } from "react";

function Specialties({ formData, setFormData, nextStep, prevStep }) {
  // Local courses state
 const [courses, setCourses] = useState(
  formData?.courses?.length > 0
    ? formData.courses
    : [
        {
          open: false,
          coursename: "",
          agegroup: [],
          oneonone: false,
          sharedclass: false,
          custompackage: false,
        },
      ]
);

  // Sync local courses with parent formData
  useEffect(() => {
    setFormData(prev => ({ ...prev, courses }));
  }, [courses, setFormData]);

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  const toggleDropdown = (index) => {
    const updated = [...courses];
    updated[index].open = !updated[index].open;
    setCourses(updated);
  };

  const handleCourseChange = (index, value) => {
    const updated = [...courses];
    updated[index].coursename = value;
    setCourses(updated);
  };

  const handleCheckbox = (index, value) => {
    const updated = [...courses];
    const groups = updated[index].agegroup;

    if (groups.includes(value)) {
      updated[index].agegroup = groups.filter((g) => g !== value);
    } else {
      updated[index].agegroup.push(value);
    }
    setCourses(updated);
  };

  const toggleSwitch = (index, key) => {
    const updated = [...courses];
    updated[index][key] = !updated[index][key];
    setCourses(updated);
  };

  const addCourse = (e) => {
    e.preventDefault();
    setCourses([
      ...courses,
      {
        open: false,
        coursename: "",
        agegroup: [],
        oneonone: false,
        sharedclass: false,
        custompackage: false,
      },
    ]);
  };

  const Previousclick = (e) => {
    e.preventDefault();
    prevStep(); // Use parent prevStep
  };

  const Nextclick = (e) => {
    e.preventDefault();
    nextStep(); // Use parent nextStep
  };

  return (
    <div className="specification page">
      <MultiSteps />

      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Courses & Specialties</h6>
          <p>Your progress will be saved automatically.</p>

          {courses.map((course, index) => (
            <div
              key={index}
              className="mb-3 p-3"
              style={{ border: "1px solid #ddd", borderRadius: "15px" }}
            >
              {/* HEADER */}
              <div
                className="d-flex justify-content-between align-items-center"
                style={{ cursor: "pointer" }}
                onClick={() => toggleDropdown(index)}
              >
                <strong>Course {index + 1}</strong>

                <div>
                  <i
                    className="bi bi-trash text-danger mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCourse(index);
                    }}
                  ></i>
                  <span>{course.open ? "▲" : "▼"}</span>
                </div>
              </div>

              {/* BODY */}
              {course.open && (
                <div className="mt-3">
                  <div className="mb-3">
                    <label className="form-label">Course Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter course name"
                      value={course.coursename}
                      onChange={(e) =>
                        handleCourseChange(index, e.target.value)
                      }
                    />
                  </div>

                  <label className="form-label">Age Group Preference</label>
                  <div className="d-flex flex-wrap gap-4 mb-3">
                    {["3–10", "11–15", "16–20", "21–25", "All Age Groups"].map(
                      (age) => (
                        <div className="form-check" key={age}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={course.agegroup.includes(age)}
                            onChange={() => handleCheckbox(index, age)}
                          />
                          <label className="form-check-label">{age}</label>
                        </div>
                      )
                    )}
                  </div>

                  <div className="form-check form-switch d-flex justify-content-between ms-0 ps-0">
                    <label className="form-check-label fw-bold">1-On-1</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={course.oneonone}
                      onChange={() => toggleSwitch(index, "oneonone")}
                    />
                  </div>

                  {course.oneonone && (
                    <table className="table mt-4">
                      <thead>
                        <tr>
                          <th className="table-secondary">Basic</th>
                          <th className="table-warning">Standard</th>
                          <th className="table-info">Premium</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Classes/week</td>
                          <td>Classes/week</td>
                          <td>Classes/week</td>
                        </tr>
                        <tr>
                          <td>Duration (months)</td>
                          <td>Duration (months)</td>
                          <td>Duration (months)</td>
                        </tr>
                        <tr>
                          <td>Price/month</td>
                          <td>Price/month</td>
                          <td>Price/month</td>
                        </tr>
                      </tbody>
                    </table>
                  )}

                  <div className="form-check form-switch d-flex justify-content-between ms-0 ps-0 mt-3">
                    <label className="form-check-label fw-bold">Shared Class</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={course.sharedclass}
                      onChange={() => toggleSwitch(index, "sharedclass")}
                    />
                  </div>

                  <div className="form-check form-switch d-flex justify-content-between ms-0 ps-0">
                    <label className="form-check-label fw-bold">Custom Package</label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={course.custompackage}
                      onChange={() => toggleSwitch(index, "custompackage")}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          <p>
            +{" "}
            <a
              href="/"
              onClick={addCourse}
              style={{ color: "#1A2E55", textDecoration: "none" }}
            >
              Add another course
            </a>
          </p>

          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary" onClick={Previousclick}>
              Back
            </button>
            <button className="btn btn-primary" onClick={Nextclick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Specialties;
