import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { coursesData } from "../pages/data";
import Tutorsection from "../pages/Tutorsection";
import Work from "./Work";
import Feedback from "./Feedback";
import Certified from "./Certified";
import Scholarships from "./Scholarships";

function Singlecourse() {
  const { slug } = useParams();

  // Convert slug to readable title
  const course = coursesData.find(
    (c) => c.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!course) return <p>Course not found</p>;
  return (
    <div className="singleCoursePage">
      <motion.div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "50vh" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ color: "white", paddingTop: "100px" }}>{course.title}</h1>
        <p style={{ color: "white" }}>
          Learn {course.title} with certified tutors worldwide.
        </p>
      </motion.div>

      <div className="field-data">
        <h3> {course.title}</h3>
        <p>{course.description}</p>
        <div className="row d-flex ">
          <div className="col-md-6 course-detail">
            <h5>Details</h5>
            <p style={{ fontWeight: "medium", color: "black" }}>
              {" "}
              <i
                className="fa fa-clock-o"
                style={{ fontWeight: "300", color: "#666666" }}
              >
                {" "}
                Students:{" "}
              </i>
              900+
            </p>
            <p style={{ fontWeight: "medium", color: "black" }}>
              {" "}
              <i
                className="fa fa-star"
                style={{ fontWeight: "300", color: "#666666" }}
              >
                {" "}
                Tutors:{" "}
              </i>
              47
            </p>
            <p style={{ fontWeight: "medium", color: "black" }}>
              {" "}
              <i
                className="fa fa-calendar"
                style={{ fontWeight: "300", color: "#666666" }}
              >
                {" "}
                Course Offer:{" "}
              </i>
              9
            </p>
            <p style={{ fontWeight: "medium", color: "black" }}>
              {" "}
              <i
                className="fa fa-clock-o"
                style={{ fontWeight: "300", color: "#666666" }}
              >
                {" "}
                Suitable for:{" "}
              </i>
              Kids, Beginners
            </p>
            <p style={{ fontWeight: "medium", color: "black" }}>
              {" "}
              <i
                className="fa fa-calendar"
                style={{ fontWeight: "300", color: "#666666" }}
              >
                {" "}
                Languages:{" "}
              </i>
              {course.language}
            </p>
          </div>
          <div className="col-md-6 learn">
            <h5>What You’ll Learn </h5>
            <ul>
              <li>Identify and pronounce Arabic letters correctly</li>
              <li>Learn joining of letters to form words</li>
              <li>Understand basic Tajweed rules</li>
              <li>Prepare for reading the Holy Quran</li>
              <li>Gain confidence in Quranic reading foundation</li>
              <li>Interactive lessons with practice exercises</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Here I add TutorSection  */}
      <Tutorsection/>

       {/* Here I add Work componenets  */}
        <Work/>

        {/* Here I add feedback component  */}
        <Feedback/>

        {/* Here I add certified component  */}
        <Certified />

        {/* Here I add scholorship componenet  */}
        <Scholarships/>
      
    </div>
  );
}

export default Singlecourse;
