import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import { InstitutionData } from "../pages/data";
import Coursesection from "../pages/Coursesection";
import Tutorsection from "../pages/Tutorsection";
import Work from "./Work";
import Feedback from "./Feedback";
import Certified from "./Certified";
import Scholarships from "./Scholarships";

function SingleInstitution() {
  const { slug } = useParams();

  const institute = InstitutionData.find(
    (e) => e.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!institute) return <p>institution not found</p>;

  return (
    <div className="singleInstitute">
      <motion.div
        className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "50vh" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={{ color: "white", paddingTop: "100px" }}>
          {institute.title}
        </h1>
        <p style={{ color: "white" }}>
          Learn {institute.title} with certified tutors worldwide.
        </p>
      </motion.div>

      <div className="field-data">
        <h3> {institute.title}</h3>
        <p>{institute.description}</p>
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
              {institute.language}
            </p>
          </div>
        </div>
      </div>

      {/* Here I add the courseSection  */}
      <Coursesection/>

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

export default SingleInstitution;
