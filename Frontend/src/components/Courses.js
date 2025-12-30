import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Courses(props) {
  const { title, description } = props;

  const slug = props.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      className="courses"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="card" style={{ width: "426px", padding: "30px" }}>
        <button
          type="button"
          style={{
            height: "60px",
            width: "60px",
            border: "1px solid #DEE2E6",
            borderRadius: "50%",
            backgroundColor: "white",
          }}
        >
          <i className="fa fa-search"></i>
        </button>
        <div
          className="card-body "
          style={{ paddingLeft: "0px", marginLeft: "0px" }}
        >
          <h5
            className="card-title"
            style={{
              fontFamily: "Product Sans",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={`/courses/${slug}`}
            >
              {title}
            </Link>
          </h5>
          <p className="card-text">{description}</p>
          <div className="custom-fields d-flex justify-content-between mt-3 ">
            <div className="d-flex align-items-center gap-2">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <p style={{ fontSize: "14px" }}>4 Weeks (5 Classes/week)</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <p style={{ fontSize: "14px" }}>1-on-1</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Courses;
