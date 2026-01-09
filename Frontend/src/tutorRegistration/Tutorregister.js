import { useNavigate } from "react-router-dom";
import MultiSteps from "./MultiSteps";

function Tutorregister({ formData, setFormData, nextStep }) {
  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();
    nextStep();
    navigate("/qualification");
  };

  const handleLanguageChange = (index, e) => {
    const { name, value } = e.target;
    const newLanguages = [...formData.languages];
    newLanguages[index][name] = value;

    setFormData({
      ...formData,
      languages: newLanguages,
    });
  };

  const handleAddLanguage = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      languages: [...formData.languages, { language: "", level: "" }],
    });
  };

  return (
    <div className="tutorRegister page">
      <MultiSteps />

      <div className="tutor-form ">
        <form
          className="container w-50 bg-white "
          style={{ borderRadius: "20px", padding: "20px" }}
        >
          <h6>Tell us about yourself</h6>
          <p>
            Start creating your public tutor profile. Your progress will be
            automatically saved as you complete each section.
          </p>

          <div className="form-inputs d-flex flex-wrap gap-2">

            {/* Full Name */}
            <div className="mb-3 w-100">
              <label className="form-label">Full Name</label>
              <input
                placeholder="Enter Full Name"
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Gender */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Gender</label>
              <input
                placeholder="Select Gender"
                type="text"
                className="form-control"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              />
            </div>

            {/* Nationality */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Nationality</label>
              <input
                placeholder="Enter Nationality"
                type="text"
                className="form-control"
                value={formData.nationality}
                onChange={(e) =>
                  setFormData({ ...formData, nationality: e.target.value })
                }
              />
            </div>

            {/* Residence */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Country of Residence</label>
              <input
                placeholder="Enter Country of Residence"
                type="text"
                className="form-control"
                value={formData.residence}
                onChange={(e) =>
                  setFormData({ ...formData, residence: e.target.value })
                }
              />
            </div>

            {/* Birth */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Country of Birth</label>
              <input
                type="date"
                className="form-control"
                value={formData.birth}
                onChange={(e) =>
                  setFormData({ ...formData, birth: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Phone */}
            <div className="mb-3" style={{ width: "49%" }}>
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            {/* Languages */}
            {formData.languages.map((lang, index) => (
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
              <a href="/" onClick={handleAddLanguage} style={{ color: "#1A2E55" }}>
                Add another Language
              </a>
            </p>

          </div>

          <button
            type="button"
            onClick={handleclick}
            className="btn btn-primary "
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Tutorregister;
