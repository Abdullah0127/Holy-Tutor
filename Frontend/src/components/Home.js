import React from "react";
import book from "../assests/book.png";
import square from "../assests/square.png";
import notebook from "../assests/notebook.png";
import Courses from "./Courses";
import CountUp from "react-countup";
import { useState } from "react";




import Work from "./Work";
import Feedback from "./Feedback";
import Certified from "./Certified";
import Scholarships from "./Scholarships";
import { motion } from "framer-motion";
import Tutorsection from "../pages/Tutorsection";
import { coursesData } from "../pages/data";
import Institutesection from "../pages/Institutesection";




function Home(props) {


 

 



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
    <div className="body">
      <motion.div className="hero-section d-flex flex-column justify-content-center align-items-center text-center" 
       initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  >
        <h1 style={{ color: "white" }}>
          Learn Quran & Islamic Knowledge Online
        </h1>
        <p style={{ color: "white" }}>
          From{" "}
          <a style={{ color: "white" }} href="/">
            Noorani Qaida
          </a>{" "}
          to{" "}
          <a style={{ color: "white" }} href="/">
            Tafseer
          </a>{" "}
          Learn from anywhere, at your own pace
        </p>
        <motion.div
          className="filter-div bg-white d-flex   justify-content-between"
          initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
          style={{ width: "795px", height: "85px", marginTop: "40px" }}
        >
          <div className="course-study  ">
            <div className="image-box gap-2 d-flex flex-row">
              <img src={book} alt="book" height="30px" width="30px" />
              <h5>Quranic Study</h5>
            </div>
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
          </div>
          <div className="course-language">
            <div className="image-box gap-2 d-flex flex-row">
              <img src={square} alt="square" height="30px" width="30px" />
              <h5>Hafiz ul Quran</h5>
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
          </div>
          <div className="course-location">
            <div className="image-box gap-2 d-flex flex-row">
              <img src={notebook} alt="sqaure" height="30px" width="30px" />
              <h5>Pakistan</h5>
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

          <div className="course-search">
            <form className="example" action="action_page.php">
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      <div
        className="number-projects bg-white d-flex justify-content-center text-center"
        style={{ padding: "40px 0px" }}
      >
        <div
          className="visitors d-flex justify-content-between "
          style={{ width: "775px", height: "77px" }}
        >
          <div className="unique">
            <h4>
              <CountUp start={0} end={50} duration={5} />+
            </h4>
            <p>Unique Visitos</p>
          </div>
          <div className="teachers">
            <h4>
              <CountUp start={0} end={300} duration={5} />+
            </h4>
            <p>Verified Teachers</p>
          </div>
          <div className="students">
            <h4>
              {" "}
              <CountUp start={0} end={10000} duration={7} separator="," /> +
            </h4>
            <p>Students</p>
          </div>
          <div className="languages">
            <h4>
              {" "}
              <CountUp start={0} end={20} duration={5} />+
            </h4>
            <p>Languages</p>
          </div>
        </div>
      </div>

      {/* Here I call the course coponent  */}

      <div className="explore-courses ">
        <h4>Explore Courses</h4>
        <p style={{ marginBottom: "40px" }}>
          Learn Quran & Islamic Knowledge Online with Verified Tutors
        </p>
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

      {/* Here I add the institution component  */}

           <div className="Institution-comp">
             <Institutesection/>
           </div>

      {/* Here I add the Tutor Component */}

              <div className="tutor-camp">
              <Tutorsection/>
              </div>
            
            

        {/* Here I add Work componenets  */}
        <Work/>


        {/* Here I add the Feedback Component  */}
        <Feedback/>

            {/* Here I add the Cerified Component  */}
            <Certified/>

            {/* Here I add the scholorship component  */}
            <Scholarships/>
    </div>
  );
}

export default Home;
