import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    userType: "student",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Decide endpoint based on user type
    let endpoint = "";
    if (credentials.userType === "tutor") {
      endpoint = "http://localhost:4000/api/tutorauth/login";
    } else if (credentials.userType === "student") {
      endpoint = "http://localhost:4000/api/studentauth/login";
    } else if (credentials.userType === "admin") {
      endpoint = "https://holy-tutor-tumx.vercel.app/api/auth/login";
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      const json = await response.json();

      if (json.status === "success") {
        localStorage.setItem("token", json.data.token);
        onLoginSuccess(); // close modal if any
        navigate("/"); // navigate to home or dashboard
      } else {
        alert(json.message || "Invalid Credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
            value={credentials.email}
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
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Login as</label>
          <select
            name="userType"
            value={credentials.userType}
            onChange={onChange}
            className="form-select"
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
