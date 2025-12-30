import React from "react";

function Banner2(props) {
  const teachingData = [
    {
      title: "Verified Male & Female Tutors",
      description:
        " Learn with certified Islamic scholars, male and female tutors, handpicked from around the world.",
    },
    {
      title: "Verified Male & Female Tutors",
      description:
        " Learn with certified Islamic scholars, male and female tutors, handpicked from around the world.",
    },
    {
      title: "Verified Male & Female Tutors",
      description:
        " Learn with certified Islamic scholars, male and female tutors, handpicked from around the world.",
    },
    {
      title: "Verified Male & Female Tutors",
      description:
        " Learn with certified Islamic scholars, male and female tutors, handpicked from around the world.",
    },
    {
      title: "Verified Male & Female Tutors",
      description:
        " Learn with certified Islamic scholars, male and female tutors, handpicked from around the world.",
    },
  ];

   
  return (
    <div className="baneer2">
      <div className="support d-flex justify-content-between ">
        <div className="text">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <div className="options">
          <p>{props.text}</p>
          <div className=" btn btns-con">
            <button>Live Chat Support</button>
            <button>Islamic Chatbot (24/7)</button>
          </div>
          <p>
            or Email Us:
            <a href="mailto: info@theholytutors.com">info@theholytutors.com</a>
          </p>
        </div>
      </div>

      <div className="teaching">
        <div className="title">
          <h3>Why Learn With The Holy Tutors?</h3>
          <p>
            We’re not just teaching, we’re building a global Quran-learning
            experience.
          </p>
        </div>
       <div className="teaching-class d-flex flex-wrap justify-content-center gap-4">
        {teachingData.map((item, index)=>(
             <div className="card" key={index} style={{ width: "420px",  padding: "30px" }}>
          <button
            type="submit"
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
              {item.title}
            </h5>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
        ))}
       </div>
      </div>
    </div>
  );
}

export default Banner2;
