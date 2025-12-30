import React from "react";

function Certified() {
  return (
    <div className="certified">
      <div className="main-container d-flex justify-content-between">
        <div className="title-container d-flex flex-column gap-3">
          <h3>Become The Holy Tutor</h3>
          <p>
            Join our global team of certified Quran and Islamic Studies
            teachers. Teach online, inspire students, and earn from the comfort
            of your home.
          </p>
          <div className="container ml-2">
            <li>Teach Quran, Tajweed, Hifz, or Islamic Studies</li>
            <li>Set your own schedule & availability</li>
            <li>Work from anywhere in the world</li>
            <li>Get access to smart teaching tools & LMS</li>
            <li>Join a global network of certified teachers</li>
          </div>
          <div className="btn mt-3" style={{padding: "0px"}}>
            <button>Become A Tutor</button>
          </div>
        </div>
        <div className="vedio-container d-flex flex-column justify-content-center text-center">

            <i className="fa fa-play-circle" style={{fontSize: "64px", color: "white"}}></i>
        </div>
      </div>
    </div>
  );
}

export default Certified;
