import { TutorData } from "../pages/data";
import { useParams } from "react-router-dom";
import Feedback from "./Feedback";
import Work from "./Work";
import Certified from "./Certified";
import Scholarships from "./Scholarships";

function SingleTutor() {
  const { slug } = useParams();

  const tutor = TutorData.find(
    (e) => e.title.toLowerCase().replace(/\s+/g, "-") === slug
  );
  if (!tutor) return <p>Tutor not found</p>;
  return (
    <div className="singleTutor">
      <div className="field-data">
        <div className="container d-flex gap-4">
          <img src={tutor.featuredimage} alt="" />
          <div className="text">
            <h3> {tutor.title}</h3>
            <p>{tutor.description}</p>
            <div className="row">
              <div className="col-md-6">
                <p style={{ fontWeight: "medium", color: "black" }}>
                  {" "}
                  <i
                    className="fa fa-calendar"
                    style={{ fontWeight: "300", color: "#666666" }}
                  >
                    {" "}
                    Course :{" "}
                  </i>
                  {tutor.courses}
                </p>
              </div>{" "}
              <div className="col-md-6">
                <p style={{ fontWeight: "medium", color: "black" }}>
                  {" "}
                  <i
                    className="fa fa-calendar"
                    style={{ fontWeight: "300", color: "#666666" }}
                  >
                    {" "}
                    Languages :{" "}
                  </i>
                  {tutor.languages}
                </p>
              </div>
            </div>
            <div className="tutor-btns d-flex justify-content-start gap-4 mt-3 ">
              <div className="d-flex align-items-center gap-2">
                <button className="btn">
                  <a href="/" style={{ color: "white" }}>
                    Book Trail
                  </a>
                </button>
              </div>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn"
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  <a href="/">Chat Tutor</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tutor-cont">
        <div className="about">
          <h5>About the Tutor:</h5>
          <p>
            Assalamu Alaikum! I'm Ustadh Bilal, passionate about teaching Quran
            with Tajweed. I’ve helped 300+ students from around the world
            connect deeply with the words of Allah
          </p>
        </div>
        <div className="row d-flex">
          <div className="col-md-4">
            <h5>Availability</h5>
            <p>Monday-Friday</p>
            <p>3:00 PM - 7:30 PM</p>
          </div>{" "}
          <div className="col-md-4">
            <h5>Courses Offered</h5>
            <ul>
              {tutor.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>{" "}
          <div className="col-md-4">
            <h5>Certifications</h5>
            <p>
              Ijazah in Tajweed Alim Course from Jamia Ashrafia Verified by The
              Holy Tutors
            </p>
          </div>
        </div>
      </div>

      {/* Here add feedback component */}
      <Feedback/>

      {/* Here I add the Work componenet  */}
      <Work/>

     {/* Here I add certified component  */}
        <Certified/>

        {/* Here I add the scholorships componenet  */}
        <Scholarships/>
    </div>
  );
}

export default SingleTutor;
