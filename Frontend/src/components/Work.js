import React from "react";
import { motion } from "framer-motion";

function Work() {
  return (
    <motion.div
      className="Works"
      initial={{ x: "-100vw", opacity: 0 }} // Start off-screen and invisible
      animate={{ x: 0, opacity: 1 }} // Slide into view and become fully visible
      transition={{
        type: "spring", // Smooth and natural motion
        stiffness: 20,
        damping: 10,
      }}
    >
      <div className="work-title">
        <h4>How it works</h4>
        <p>Learn Quran & Islamic Knowledge Online with Verified Tutors</p>
      </div>
      <div className="Account">
        <div className="divider">
          <span className="arrow">→</span>
        </div>
        <div className="create">
          <div
            className="number blue-number"
            style={{ backgroundColor: "white" }}
          >
            <h5>01</h5>
          </div>
          <div>
            <h5 style={{ color: "white" }}>Create Your Free Account</h5>
            <p style={{ color: "#c8c0c0" }}>
              Register as a student or parent in just a few clicks.
            </p>
          </div>
          <div className="work-link">
            <a href="/" style={{ color: "white" }}>
              Register Now
            </a>
          </div>
        </div>{" "}
        <div className="create">
          <div className="number">
            <h5>02</h5>
          </div>
          <div>
            <h5 style={{ color: "white" }}>Choose a Course & Teacher</h5>
            <p style={{ color: "#c8c0c0" }}>
              Browse from multiple courses like Qaida, Tajweed, Hifz, and more.
            </p>
          </div>
          <div className="work-link">
            <a href="/" style={{ color: "white" }}>
              Explore Teachers
            </a>
          </div>
        </div>{" "}
        <div className="create">
          <div className="number">
            <h5>03</h5>
          </div>
          <div>
            <h5 style={{ color: "white" }}>Take a Free Trial Class</h5>
            <p style={{ color: "#c8c0c0" }}>
              Experience the class environment and teaching style before
              enrolling.
            </p>
          </div>
          <div className="work-link">
            <a href="/" style={{ color: "white" }}>
              Explore Courses
            </a>
          </div>
        </div>{" "}
        <div className="create">
          <div className="number">
            <h5>04</h5>
          </div>
          <div>
            <h5 style={{ color: "white" }}>Begin Your Learning Journey</h5>
            <p style={{ color: "#c8c0c0" }}>
              Start regular classes, track progress, earn certificates, and grow
              spiritually.
            </p>
          </div>
          <div className="work-link">
            <a href="/" style={{ color: "white" }}>
              Let’s Begin
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
