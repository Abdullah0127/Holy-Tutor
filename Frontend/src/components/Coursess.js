import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Courses from "./Courses";
import Banner2 from "./Banner2";
import Feedback from "./Feedback";
import Certified from "./Certified";
import Scholarships from "./Scholarships";

function Coursess() {
  const coursesData = [
    {
      title: "Basic Qaida",
      description:
        "Learn the Arabic alphabet, pronunciation rules, and basic word joining using Noorani Qaida",
      category: "Basic Qaida",
      language: "English",
      location: "pakistan",
    },
    {
      title: "Quran Reading (Nazra)",
      description:
        "Master the rules of Tajweed and recite the Quran beautifully as per the 7 Qira’at styles. ",
      category: "Quran Reading",
      language: "Urdu",
      location: "pakistan",
    },
    {
      title: "Hifz-ul-Quran",
      description:
        "Memorize the Quran step-by-step with daily goals, revision tracking, and progress reports.",
      category: "Hifz-ul-Quran",
      language: "Hindi",
      location: "India",
    },
    {
      title: "Tafseer Course",
      description:
        "Understand the meaning, and deep explanations of Quranic verses with certified scholars.",
      category: "Tafseer",
      language: "English",
      location: "Soudi Arabia",
    },
    {
      title: "Islamic Studies",
      description:
        "Learn Islamic beliefs, Fiqh, Hadith, Prophet’s life, duas, and more – tailored for all age groups.",
      category: "Islamic Studies",
      language: "Urdu",
      location: "Dubai",
    },
    {
      title: "Tajweed Course",
      description:
        "Master the rules of Tajweed and recite the Quran beautifully as per the 7 Qira’at styles.",
      category: "Tajweed",
      language: "Arabic",
      location: "India",
    },
  ];


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
    <div className="Course-Archive">
      <motion.div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center "
        style={{ height: "50vh" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ color: "white", paddingTop: "100px" }}>Explore Courses</h1>
        <p style={{ color: "white" }}>
          Choose from beginner to advanced Islamic courses taught <br /> by
          certified tutors in multiple languages.
        </p>
      </motion.div>

          <div className="explore-courses ">
             <div className="coursess ">
                <div className="tutor-filter">
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectedCategory === "all" ? "Select Course" : selectedCategory}
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
          </div>{" "}
          <div className="dropdown">
            <button
              className="btn  dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {selectLocation === "all" ? "Select Location" : selectLocation}
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  onClick={() => setselectLocation("all")}
                  className="dropdown-item"
                >
                  All Locations
                </button>
              </li>
              {uniqueLocation.map((loc, index) => (
                <li key={index}>
                  <button
                    className="dropdown-item"
                    onClick={() => setselectLocation(loc)}
                  >
                    {loc}
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
              {selectLanguage === "all" ? "Select Language " : selectLanguage}
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
                    className="dropdown-item"
                    onClick={() => setselectLanguage(lang)}
                  >
                    {lang}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
        <div
          className="course-component d-flex flex-wrap gap-2 "
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
       
      </div>

          {/* Here I add the Banner component    */}

      <div className="Banner2">
        <Banner2 title="Cant Decide?" description="Need guidance choosing a course or teacher? We're here for you." text="Support Options"/>
      </div>

      {/* Here I add the Feedback Component  */}
      <Feedback/>

       {/* Here I add the Cerified Component  */}
       <Certified/>

       {/* Here I add the scholorship component  */}
       <Scholarships/>

    </div>
  );
}

export default Coursess;
