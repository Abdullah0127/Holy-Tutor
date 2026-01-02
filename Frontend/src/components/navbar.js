import React from "react";
import Frame from "../assests/Frame.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ openLogin }) {
  let navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div className=" Navbar ">
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom ">
        <div className="container-fluid  align-items-center">
          <div className="logo d-flex align-items-center">
            <img src={Frame} alt="Frame" width="34" height="40" />
            <Link className="navbar-brand ms-2" to="/">
              THE HOLY TUTOR
            </Link>
          </div>
          <div className="Menu">
            {/* Toggle Button (Mobile) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span
                className="navbar-toggler-icon"
                style={{ color: "white !important" }}
              ></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">
                    Tutors
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {!localStorage.getItem("token") ? (
            <form className="navbtns d-flex" >
              <button
                type="button"
                className="btn btn-primary mx-1"
                onClick={openLogin}
              >
                Login
              </button>

              <Link to="/signup" className="btn btn-primary mx-1">
                Register
              </Link>
            </form>
          ) : (
            <button className="logout btn btn-primary" onClick={handlelogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
