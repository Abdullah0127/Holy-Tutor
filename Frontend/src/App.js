import "./App.css";
// import Courses from "./components/Courses";
import Coursess from "./components/Coursess";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singlecourse from "./components/Singlecourse";
import SingleInstitution from "./components/SingleInstitution";
import SingleTutor from "./components/SingleTutor";
import Login from "./components/Login";
import { useState } from "react";
import Signup from "./components/Signup";
import { motion, AnimatePresence } from "framer-motion";





function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Router>
        <div className="header">
          <Navbar openLogin={() => setShowLogin(true)} />
        </div>

      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Coursess />} />
          <Route path="/courses/:slug" element={<Singlecourse/>} />
          <Route path="/institution/:slug" element={<SingleInstitution/>} />
          <Route path="/tutor/:slug" element={<SingleTutor/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>

        {/* 🔥 LOGIN POPUP */}
<AnimatePresence>
  {showLogin && (
    <>
      {/* Backdrop */}
      <motion.div
        className="modal-backdrop fade show"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="modal fade show d-block"
        initial={{ opacity: 0, y: -40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -40, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button
                className="btn-close"
                onClick={() => setShowLogin(false)}
              />
            </div>

            <div className="modal-body">
              <Login onLoginSuccess={() => setShowLogin(false)} />
            </div>

          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>

        <div className="Footer">
          <Footer />
        </div>
      </Router>
    </>
  );
}


export default App;
