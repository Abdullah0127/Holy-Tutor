import React from 'react'
import { coursesData } from "../pages/data";
import { useState } from "react";
import Courses from '../components/Courses';


function Coursesection() {

    const [selectedCategory, setselectedCategory] = useState("all");
    const [selectLanguage, setselectLanguage] = useState("all");
    const [selectLocation, setselectLocation] = useState("all");

    const filteredCourses = coursesData.filter(
      (course) =>
        (selectedCategory === "all" || course.category === selectedCategory) &&
        (selectLanguage === "all" || course.language === selectLanguage) &&
        (selectLocation === "all" || course.location === selectLocation)
    );
  
    const uniqueLanguages = [
      ...new Set(coursesData.map((course) => course.language)),
    ];
    const uniqueLocation = [
      ...new Set(coursesData.map((course) => course.location)),
    ];
  return (
    <div className='courseSection'>
          <div className="explore-courses text-start">
        <h4>Explore Courses</h4>
        <p style={{ marginBottom: "40px" }}>
          Learn Quran & Islamic Knowledge Online with Verified Tutors
        </p>
        <div className="tutor-filter">
                      <div className="dropdown">
                      <button
                        className="btn  dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedCategory === "all"
                          ? "Select Course"
                          : selectedCategory}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button
                            onClick={() => setselectedCategory("all")}
                            className="dropdown-item"
                          >
                            All Courses
                          </button>
                        </li>
                        {coursesData.map((course, index) => (
                          <li key={index}>
                            <button
                              className="dropdown-item"
                              onClick={() => setselectedCategory(course.category)}
                            >
                              {course.category}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                      <div className="dropdown">
              <button
                className="btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectLanguage === "all" ? "Select Language" : selectLanguage}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    onClick={() => setselectLanguage("all")}
                    className="dropdown-item"
                  >
                    All Languages
                  </button>
                </li>
                {uniqueLanguages.map((lang, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setselectLanguage(lang)}
                      className="dropdown-item"
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
              <div className="dropdown">
              <button
                className="btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Country
              </button>
              <ul className="dropdown-menu">
                <li>
                  <button
                    onClick={() => setselectLocation("all")}
                    className="dropdown-item"
                  >
                    All location
                  </button>
                </li>
                {uniqueLocation.map((loc, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setselectLocation(loc)}
                      className="dropdown-item"
                    >
                      {loc}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
        </div>
        <div
          className="course-component d-flex flex-wrap "
          style={{
            justifyContent:
              filteredCourses.length === coursesData.length
                ? "center"
                : "flex-start",
          }}
        >
          {filteredCourses.map((course, index) => (
            <Courses
              key={index}
              title={course.title}
              description={course.description}
              category={course.category}
              language={course.language}
              location={course.location}
            />
          ))}
        </div>
        <div className="course-btn " style={{ marginTop: "40px" }}>
          <button
            type="button"
            className="btn "
            style={{
              backgroundColor: "#1C1B4B",
              color: "white",
              padding: "15px 30px",
            }}
          >
            Explore Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default Coursesection
