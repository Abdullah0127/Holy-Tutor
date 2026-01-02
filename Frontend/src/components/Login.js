import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [credintials, setcredintials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://holy-tutor-tumx.vercel.app/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credintials),
    });

    const json = await response.json();

    if (json.status === "success") {
      localStorage.setItem("token", json.data.token);
      onLoginSuccess(); // close the modal
      navigate("/"); // navigate to home
    } else {
      alert(json.message || "Invalid Credentials");
    }
  };

  const onChange = (e) => {
    setcredintials({ ...credintials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container login-form">
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
