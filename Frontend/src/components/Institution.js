import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Institution(props) {
  const { title, description, featuredimage, smallImg, location } = props;

  const slug = props.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div className="Institutioins"
    initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}>
      <div
        className="card text-start"
        style={{
          width: "302px",

          padding: "0px",
          border: "none",
        }}
      >
        <div className="features-img">
          <img
            src={featuredimage}
            alt="featuredimage shows issue"
            style={{
              width: "302px",
              height: "150px",
              borderRadius: "10px 10px 0px 0px",
            }}
          />
        </div>
        <div
          className="main-insti"
          style={{ backgroundColor: "#F5F5F5", padding: "18px" }}
        >
          <div
            className="inst-image d-flex justify-content-center text-center "
            style={{
              backgroundColor: "#E9ECEF",
              borderRadius: "50%",
              height: "80px",
              width: "80px",
            }}
          >
            <img
              className="align-self-center"
              src={smallImg}
              alt={smallImg}
              style={{ height: "60px", width: "53px" }}
            />
          </div>

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
                to={`/institution/${slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {title}
              </Link>
            </h5>
            <div className="insti-location d-flex align-items-center gap-2 ">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p style={{ fontSize: "14px" }}>{location}</p>
            </div>
            <p className="card-text">{description}</p>
            <div className="custom-fields d-flex justify-content-between mt-3 ">
              <div className="d-flex align-items-center gap-2">
                <p style={{ fontSize: "14px" }}>
                  Total Students : <b>900+</b>
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <p style={{ fontSize: "14px" }}>
                  Tutors: <b>47</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Institution;
