import { useState } from "react";
import Availibility from "./Availibility";
import Final from "./Final";
import Introvedio from "./Introvedio";
import Tutorregister from "./Tutorregister";
import Specialties from "./Specialties";
import Qualification from "./Qualification";
import { useNavigate } from "react-router-dom";

function MultiStemform() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    nationality: "",
    residence: "",
    birth: "",
    phone: "",
    languages: [{ language: "", level: "" }],
    hafiz: "",
    teaching: "",
    qirat: "",
    recitation: "",
    recitationAudio: null,
    availability: [],
    timezone: "",
    courses: [],
    introVideo: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Instead of submitting to backend, just show a "Data saved" message
  const saveProfileData = () => {
    alert("Your profile data has been saved successfully!");
    nextStep(); // Move to final step
  };

  switch (step) {
    case 1:
      return (
        <Tutorregister
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Qualification
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Availibility
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Specialties
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Introvedio
          formData={formData}
          setFormData={setFormData}
          nextStep={saveProfileData} // Save data AND go to final step
          prevStep={prevStep}
        />
      );
    default:
      return (
        <Final
          formData={formData}
          prevStep={prevStep}
          nextStep={() => navigate("/completetutor")} // navigate to complete page
        />
      );
  }
}

export default MultiStemform;
