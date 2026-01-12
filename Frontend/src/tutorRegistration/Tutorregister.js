import { useNavigate, useLocation } from "react-router-dom";
import MultiSteps from "./MultiSteps";
import React from "react";

function Tutorregister({ formData, setFormData, nextStep }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill name & email from state if available
  const initialFormData = {
    name: location.state?.name || "",
    email: location.state?.email || "",
    gender: formData?.gender || "",
    nationality: formData?.nationality || "",
    residence: formData?.residence || "",
    birth: formData?.birth || "",
    phone: formData?.phone || "",
    languages: formData?.languages || [{ language: "", level: "" }],
  };

  const [localFormData, setLocalFormData] = React.useState(initialFormData);

  const handleclick = (e) => {
    e.preventDefault();
    // Update parent formData if needed
    if (setFormData) setFormData(localFormData);

    // Move to next step and navigate
    if (nextStep) nextStep();
    navigate("/qualification", { state: { name: localFormData.name, email: localFormData.email } });
  };

  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    const newLanguages = [...localFormData.languages];
    newLanguages[index][name] = value;

    setLocalFormData({ ...localFormData, languages: newLanguages });
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    setLocalFormData({
      ...localFormData,
      languages: [...localFormData.languages, { language: "", level: "" }],
    });
  };

  return (
    <div className="tutorRegister page">
      <MultiSteps />
      <div className="tutor-form">
        <form
          className="container w-50 bg-white"
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Tell us about yourself</h6>
          <p>
            Start creating your public tutor profile. Your progress will be
            automatically saved as you complete each section.
          </p>

          <div className="form-inputs d-flex flex-wrap gap-2">
            <div className="mb-3 w-100">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Enter Full Name"
                type="text"
                className="form-control"
                value={localFormData.name}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, name: e.target.value })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Gender</label>
              <input
                placeholder="Select Gender"
                type="text"
                className="form-control"
                value={localFormData.gender}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, gender: e.target.value })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Nationality</label>
              <input
                placeholder="Enter Nationality"
                type="text"
                className="form-control"
                value={localFormData.nationality}
                onChange={(e) =>
                  setLocalFormData({
                    ...localFormData,
                    nationality: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Country of Residence</label>
              <input
                placeholder="Enter Country of Residence"
                type="text"
                className="form-control"
                value={localFormData.residence}
                onChange={(e) =>
                  setLocalFormData({
                    ...localFormData,
                    residence: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Country of Birth</label>
              <input
                type="date"
                className="form-control"
                value={localFormData.birth}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, birth: e.target.value })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={localFormData.email}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, email: e.target.value })
                }
              />
            </div>

            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={localFormData.phone}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, phone: e.target.value })
                }
              />
            </div>

            {(localFormData.languages || []).map((lang, index) => (
              <div
                key={index}
                className="lang-input w-100 d-flex flex-wrap gap-2 mb-3"
              >
                <div className="input-1" style={{ width: "69%" }}>
                  <label className="form-label">Language You Speak</label>
                  <input
                    type="text"
                    name="language"
                    className="form-control"
                    value={lang.language}
                    onChange={(e) => handleLanguageChange(index, e)}
                  />
                </div>
                <div className="input-2" style={{ width: "29%" }}>
                  <label className="form-label">Level</label>
                  <input
                    type="text"
                    name="level"
                    className="form-control"
                    value={lang.level}
                    onChange={(e) => handleLanguageChange(index, e)}
                  />
                </div>
              </div>
            ))}

            <p style={{ marginTop: "-10px", marginBottom: "20px" }}>
              +{" "}
              <a
                href="/"
                onClick={handleAddLanguage}
                style={{ color: "#1A2E55" }}
              >
                Add another Language
              </a>
            </p>
          </div>

          <button
            type="button"
            onClick={handleclick}
            className="btn btn-primary"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tutorregister;
