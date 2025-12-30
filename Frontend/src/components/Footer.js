import React from "react";
import img1 from "../assests/image 47.png";
import img2 from "../assests/image 47 (1).png";
import { Link } from "react-router-dom";
import Frame from "../assests/Frame.png";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="containers d-flex justify-content-between">
        <div className="container1">
          <div className="logo d-flex align-items-center">
            <img src={Frame} alt="Frame" width="34" height="40" />
            
              <Link style={{color: "white", fontSize:  "20px"}} className="navbar-brand ms-2" to="/">
                THE HOLY TUTOR
              </Link>
            
          </div>
          <div className="social-icons">
            <div className="icon">
              <Link to="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook"></i>
              </Link>
            </div>
            <div className="icon">
              <Link to="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa fa-twitter"></i>
              </Link>
            </div>

            <div className="icon">
              {" "}
              <Link to="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </Link>
            </div>

            <div className="icon">
              <Link to="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="socialImg">
            <img src={img1} alt={img1} />
            <img src={img2} alt={img2} />
          </div>
        </div>

        <div className="container2">
          <h5 style={{ color: "white" }}>About</h5>

          <div className="links">
            <p>
              <Link to="/">Our Mission</Link>
            </p>
            <p>
              <Link to="/">Meet the Team </Link>
            </p>
            <p>
              <Link to="/">Become a Tutor</Link>
            </p>
            <p>
              <Link to="/">Scholarships & Rewards</Link>
            </p>
          </div>
        </div>
        <div className="container2">
          <h5 style={{ color: "white" }}>Quick Links</h5>

          <div className="links">
            <p>
              <Link to="/">Courses</Link>
            </p>
            <p>
              <Link to="/">Find a Tutor</Link>
            </p>
            <p>
              <Link to="/">Book Trial Class</Link>
            </p>
            <p>
              <Link to="/">Student Login</Link>
            </p>
            <p>
              <Link to="/">Teacher Login</Link>
            </p>
          </div>
        </div>
        <div className="container2">
          <h5 style={{ color: "white" }}>Islamic Resources</h5>

          <div className="links">
            <p>
              <Link to="/">Quran Recitation (Audio)</Link>
            </p>
            <p>
              <Link to="/">Islamic Blog</Link>
            </p>
            <p>
              <Link to="/">New Muslim Guide</Link>
            </p>
            <p>
              <Link to="/">Prayer Times</Link>
            </p>
            <p>
              <Link to="/">FAQs</Link>
            </p>
          </div>
        </div>
        <div className="container2">
          <h5 style={{ color: "white" }}>Contact & Social</h5>

          <div className="links">
            <p>
              Email:{" "}
              <Link to="maito:info@theholytutors.com">
                info@theholytutors.com
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link to="tel:info@theholytutors.com">
                info@theholytutors.com
              </Link>
            </p>
            <p>Address: Global & Online</p>
          </div>
        </div>
      </div>
     
    </div>
     <div className="last text-center">
        <p>© 2025 The Holy Tutors. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
