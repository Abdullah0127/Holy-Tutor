import React from "react";
import { TutorData } from "./data";
import { useState } from "react";
import Tutor from "../components/Tutor";

function Tutorsection() {
  const [tutorCourse, settutorCourse] = useState("all");
  const [selectGender, setselectGender] = useState("all");
  const [selecttutorLang, setselecttutorLang] = useState("all");

  const filterTutor = TutorData.filter(
    (tutor) =>
      (tutorCourse === "all" || tutor.courses.includes(tutorCourse)) &&
      (selectGender === "all" || tutor.gender === selectGender) &&
      (selecttutorLang === "all" || tutor.languages.includes(selecttutorLang))
  );

  const uniqueTutorCourses = [
    ...new Set(TutorData.flatMap((tutor) => tutor.courses)),
  ];
  const uniquetutorLnag = [
    ...new Set(TutorData.flatMap((tutor) => tutor.languages)),
  ];

  const uniquegender = [...new Set(TutorData.map((tutor) => tutor.gender))];

  return (
    <div className="tutorsection">
      <div className="explore-tutor">
        <div className="tutor-title">
          <h4>Find A Tutor</h4>
          <p style={{ marginBottom: "40px" }}>
            Advance in your career with recognized credentials across levels.
          </p>
        </div>
        <div className="tutor-filter">
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {tutorCourse === "all" ? "Select Course" : tutorCourse}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => settutorCourse("all")}
                  className="dropdown-item"
                >
                  All Courses
                </button>
              </li>
              {uniqueTutorCourses.map((course, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => settutorCourse(course)}
                  >
                    {course}
                  </button>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectGender === "all" ? "Select Gender" : selectGender}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => setselectGender("all")}
                  className="dropdown-item"
                >
                  All Genders
                </button>
              </li>
              {uniquegender.map((gender, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => setselectGender(gender)}
                  >
                    {gender}
                  </button>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selecttutorLang === "all" ? "Select Language " : selecttutorLang}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => setselecttutorLang("all")}
                  className="dropdown-item"
                >
                  All Languages
                </button>
              </li>
              {uniquetutorLnag.map((lang, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => setselecttutorLang(lang)}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="tutor-component"
          style={{
            justifyContent:
              filterTutor.length === TutorData.length
                ? "space-between"
                : "flex-start",
          }}
        >
          {filterTutor.map((tutor, Tutorkey) => (
            <Tutor
              key={Tutorkey}
              featuredimage={tutor.featuredimage}
              title={tutor.title}
              description={tutor.description}
              review={tutor.review}
              languages={tutor.languages}
              courses={tutor.courses}
            />
          ))}
        </div>
        <div className="tutor-btn " style={{ marginTop: "40px" }}>
          <button
            type="button"
            className="btn "
            style={{
              backgroundColor: "#1C1B4B",
              color: "white",
              padding: "15px 30px",
            }}
          >
            Explore Tutors
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tutorsection;
