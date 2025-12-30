import React from "react";
import award from "../assests/award.png";
import student from "../assests/student.png";
import { useState } from "react";

function Scholarships() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="scholorBody">
      <div className="scholarship d-flex flex-column gap-5">
        <div className="scholor-title text-center">
          <h3>Scholarships & Gifts</h3>
          <p>Learn Quran & Islamic Knowledge Online with Verified Tutors</p>
        </div>
        <div className="main-row d-flex flex-column gap-4">
          <div className="scholor-container  d-flex flex-wrap justify-content-center">
            <div
              className="scholor-cards"
              style={{ backgroundColor: "#F4F0DE" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Monthly Top Student Awards</h6>
                <p>
                  Get featured and rewarded for consistent performance in your
                  course.
                </p>
                <a href="/">Register Now</a>
              </div>
              <div
                className="scholor-img d-flex justify-content-end"
                style={{}}
              >
                <img
                  src={student}
                  alt={student}
                  style={{ borderRadius: "10px 0px 10px 0px" }}
                />
              </div>
            </div>{" "}
            <div
              className="scholor-cards"
              style={{ backgroundColor: "#DEF4E9" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Scholarship Programs</h6>
                <p>
                  Earn up to 100% scholarship on Quran and Tajweed courses based
                  on your test scores and commitment.
                </p>
              </div>
              <div className="scholor-img">
                <img
                  src={student}
                  alt={student}
                  style={{
                    width: "-webkit-fill-available",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>{" "}
            <div
              className="scholor-cards"
              style={{ backgroundColor: "#DEEFF4" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Certificates of Excellence</h6>
                <p>
                  Receive digital and printed certificates after course or exam
                  completion.
                </p>
              </div>
              <div className="scholor-img d-flex justify-content-start">
                <img
                  src={student}
                  alt={student}
                  style={{ borderRadius: "0px 10px 0px 10px" }}
                />
              </div>
            </div>
                <div
              className="scholor-cards"
              style={{ backgroundColor: "#DEEFF4" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Support for New Muslims</h6>
                <p>
                  Free courses and learning material with special care and
                  mentorship.
                </p>
              </div>
              <div className="scholor-img d-flex justify-content-start">
                <img
                  src={student}
                  alt={student}
                  style={{
                    height: "250px",
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "0px 10px 0px 10px",
                  }}
                />
              </div>
            </div>
            <div
              className="scholor-cards"
              style={{ backgroundColor: "#DEF4E9" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Special Islamic Events & Competitions</h6>
                <p>
                  Participate in online recitation contests, Islamic quizzes,
                  and Hifz competitions.
                </p>
              </div>
              <div
                className="scholor-img d-flex justify-content-end"
                style={{}}
              >
                <img
                  src={student}
                  alt={student}
                  style={{ height: "200px", borderRadius: "10px 0px 10px 0px" }}
                />
              </div>
            </div>{" "}
            <div
              className="scholor-cards"
              style={{ backgroundColor: "#F4F0DE" }}
            >
              <div className="singleCard">
                <img src={award} alt={award} />
                <h6>Scholarship Programs</h6>
                <p>
                  Earn up to 100% scholarship on Quran and Tajweed courses based
                  on your test scores and commitment.
                </p>
              </div>
              <div className="scholor-img d-flex justify-content-end">
                <img
                  src={student}
                  alt={student}
                  style={{
                    height: "250px",
                    width: "300px",
                    objectFit: "cover",
                    borderRadius: "10px 0px 10px 0px",
                  }}
                />
              </div>
            </div>{" "}
          </div>

         
        </div>
      </div>

      <div className="banner">
        <h3>Area or Banner for any Ayat or Quote</h3>
        <p>Learn Quran & Islamic Knowledge Online with Verified Tutors</p>
      </div>

      <div className="FAQ-main">
        <div className="faq-title">
          <h3>FAQ’s</h3>
          <p>Learn Quran & Islamic Knowledge Online with Verified Tutors</p>
        </div>

        <div className="accordian">
          {/* FAQ 1 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(0)}>
              <span>How do I register as a student or parent?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 0 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 0 && (
              <div className="panel">
                <p>
                  Yes, you can. There are 17815 online Master’s available on
                  AGSA, representing 19% of the total.
                </p>
              </div>
            )}
          </div>
          {/* FAQ 2 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(1)}>
              <span>Can I choose a male or female teacher?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 1 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 1 && (
              <div className="panel">
                <p>
                  Yes, all classes are conducted online with verified tutors.
                </p>
              </div>
            )}
          </div>
          {/* FAQ 3 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(2)}>
              <span>Are trial classes free of cost?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 2 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 2 && (
              <div className="panel">
                <p>Yes, certificates are provided after course completion.</p>
              </div>
            )}
          </div>{" "}
          {/* FAQ 4 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(2)}>
              <span>Do teachers speak different languages?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 2 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 2 && (
              <div className="panel">
                <p>Yes, certificates are provided after course completion.</p>
              </div>
            )}
          </div>
          {/* FAQ 5 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(2)}>
              <span>How can I become a tutor on the platform?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 2 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 2 && (
              <div className="panel">
                <p>Yes, certificates are provided after course completion.</p>
              </div>
            )}
          </div>
          {/* FAQ 6 */}
          <div className="faq-item">
            <button className="accordion" onClick={() => toggleAccordion(2)}>
              <span>What courses are available for beginners?</span>
              <i
                className={`fa fa-chevron-down ${
                  activeIndex === 2 ? "rotate" : ""
                }`}
              ></i>
            </button>

            {activeIndex === 2 && (
              <div className="panel">
                <p>Yes, certificates are provided after course completion.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scholarships;
