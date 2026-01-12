import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Tutorregistration({ closePopup }) {
  const navigate = useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/tutorauth/tutorregister",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );

      const json = await response.json();

      if (json.status === "success") {
        alert(`${credentials.name} is registered Successfully`);

        // Clear form
        setcredentials({ name: "", email: "", password: "", cpassword: "" });

        // Close modal
        closePopup();

        // Redirect to next page after modal closes
        navigate("/tutorregister"); // or wherever you want to go next
      } else {
        alert(json.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [closePopup]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={onChange}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={onChange}
          required
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label>Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          value={credentials.cpassword}
          onChange={onChange}
          required
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Sign Up
      </button>
    </form>
  );
}

export default Tutorregistration;
