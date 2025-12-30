import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [credintials, setcredintials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: check if password and confirm password match
    if (credintials.password !== credintials.cpassword) {
      alert("Passwords do not match!");
      return;
    }

    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credintials.name,
        email: credintials.email,
        password: credintials.password,
      }),
    });

    const json = await response.json();

    if (json.status === "success") {
      localStorage.setItem("token", json.data.token);
      navigate("/"); // Navigate to home after successful signup
    } else {
      alert(json.message || "Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setcredintials({ ...credintials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container signup-form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credintials.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={credintials.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={credintials.password}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="cpassword"
            value={credintials.cpassword}
            onChange={onChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
