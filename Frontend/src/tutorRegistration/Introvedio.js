import React, { useEffect } from "react";
import MultiSteps from "./MultiSteps";

function Introvedio({ formData, setFormData, nextStep, prevStep }) {
  const [videoURL, setVideoURL] = React.useState("");

  useEffect(() => {
    if (!formData.introVideo) {
      setVideoURL("");
      return;
    }
    const url = URL.createObjectURL(formData.introVideo);
    setVideoURL(url);

    return () => URL.revokeObjectURL(url);
  }, [formData.introVideo]);

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, introVideo: e.target.files[0] });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Simply go to the final page; no registration here
    nextStep();
  };

  return (
    <div className="introvedio page">
      <MultiSteps />
      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Introduce Yourself to Your Future Students!</h6>

          <input type="file" accept="video/*" onChange={handleVideoChange} />

          {videoURL && (
            <div className="mt-3">
              <p>Preview:</p>
              <video width="100%" controls>
                <source src={videoURL} type={formData.introVideo.type} />
              </video>
              <p>{formData.introVideo.name}</p>
            </div>
          )}

          <div className="d-flex justify-content-between mt-3">
            <button
              type="button"
              onClick={(e) => { e.preventDefault(); prevStep(); }}
              className="btn btn-outline-primary"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary"
              disabled={!formData.introVideo} // Optional: disable next if no video
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Introvedio;
