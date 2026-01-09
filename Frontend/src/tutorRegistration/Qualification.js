import React from "react";
import MultiSteps from "./MultiSteps";

function Qualification({ formData, setFormData, nextStep, prevStep }) {
  const Previousclick = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleclick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="qualification page">
      <MultiSteps />

      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Qualification & Experience</h6>
          <p>
            {" "}
            Start creating your public tutor profile. Your progress will be
            automatically saved as you complete each section. You can return at
            any time to finish your registration.{" "}
          </p>

          <div className="form-inputs d-flex flex-wrap gap-2 mt-1">
            <div>
              <label>Are you Hafiz/Hafiza?</label>

              <div className="d-flex gap-4">
                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    name="hafiz"
                    value="hafiz"
                    checked={formData.hafiz === "hafiz"}
                    onChange={(e) =>
                      setFormData({ ...formData, hafiz: e.target.value })
                    }
                  />
                  <label>Hafiz</label>
                </div>

                <div className="d-flex gap-2">
                  <input
                    type="radio"
                    name="hafiz"
                    value="Not Hafiz"
                    checked={formData.hafiz === "Not Hafiz"}
                    onChange={(e) =>
                      setFormData({ ...formData, hafiz: e.target.value })
                    }
                  />
                  <label>Not Hafiz</label>
                </div>
              </div>
            </div>

            <div className="mb-3 w-100">
              <label>Teaching Experience</label>
              <input
                type="text"
                className="form-control"
                value={formData.teaching}
                onChange={(e) =>
                  setFormData({ ...formData, teaching: e.target.value })
                }
              />
            </div>

            <div className="mb-3 w-100">
              <label>Qira’at Styles</label>
              <textarea
                className="form-control"
                rows="4"
                value={formData.qirat}
                onChange={(e) =>
                  setFormData({ ...formData, qirat: e.target.value })
                }
              />
            </div>

            <div className="mb-3 w-100">
              <label>Recitation Level</label>
              <input
                type="text"
                className="form-control"
                value={formData.recitation}
                onChange={(e) =>
                  setFormData({ ...formData, recitation: e.target.value })
                }
              />
            </div>

            <div className="mb-3 w-100">
              <label>Upload Audio</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    recitationAudio: e.target.files[0],
                  })
                }
              />
            </div>
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary" onClick={Previousclick}>
              Back
            </button>

            <button className="btn btn-primary" onClick={handleclick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Qualification;
