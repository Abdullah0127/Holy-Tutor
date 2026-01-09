import React from "react";
import MultiSteps from "./MultiSteps";

function Final({ formData, prevStep, nextStep }) {

  const Previousclick = (e) => {
    e.preventDefault();
    prevStep(); // go back to Introvedio step
  };

  const handleclick = (e) => {
    e.preventDefault();
    nextStep(); // final submission handled in MultiStemform
  };

  return (
    <div className="final page">
      <MultiSteps />

      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Review & Confirm</h6>
          <p>
            Please check your details before submitting your tutor profile. Make
            sure all information is correct, especially your courses, packages,
            and intro video.
          </p>

          <div className="form-inputs d-flex flex-column gap-3 mt-3 mb-3">
            <div className="d-flex justify-content-between">
              <label className="form-label fw-bold">Personal Info</label>
              <i className="bi bi-check "></i>
            </div>
            <div className="d-flex justify-content-between">
              <label className="form-label fw-bold">Teaching Subjects</label>
              <i className="bi bi-check "></i>
            </div>
            <div className="d-flex justify-content-between">
              <label className="form-label fw-bold">Packages & Pricing</label>
              <i className="bi bi-check "></i>
            </div>
            <div className="d-flex justify-content-between">
              <label className="form-label fw-bold">Availability</label>
              <i className="bi bi-check "></i>
            </div>
            <div className="d-flex justify-content-between">
              <label className="form-label fw-bold">Intro Video</label>
              <i className="bi bi-check "></i>
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={Previousclick}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleclick}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Final;
