import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./components/Home";
import Coursess from "./components/Coursess";
import Singlecourse from "./components/Singlecourse";
import SingleInstitution from "./components/SingleInstitution";
import SingleTutor from "./components/SingleTutor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

import Completetutor from "./tutorRegistration/Completetutor";
import StudentRegister from "./studentRegistration/StudentRegister";
import MultiStemform from "./tutorRegistration/MultiStemform";
import Tutorregistration from "./tutorRegistration/Tutorregistration";
import Tutorregister from "./tutorRegistration/Tutorregister";


function App() {
  const [modal, setModal] = useState(null); // "login" | "student" | "tutor" | null

  const closeModal = () => setModal(null);

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <Navbar openLogin={() => setModal("login")} />
      </div>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Coursess />} />
        <Route path="/courses/:slug" element={<Singlecourse />} />
        <Route path="/institution/:slug" element={<SingleInstitution />} />
        <Route path="/tutor/:slug" element={<SingleTutor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tutor-register" element={<MultiStemform />} />
        <Route path="/qualification" element={<MultiStemform />} />
        <Route path="/availibility" element={<MultiStemform />} />
        <Route path="/specification" element={<MultiStemform />} />
        <Route path="/introvedio" element={<MultiStemform />} />
        <Route path="/final" element={<MultiStemform />} />
        <Route path="/completetutor" element={<Completetutor />} />
        <Route path="/tutorregistration" element={<Tutorregistration />} />
        <Route path="/tutorregister" element={<Tutorregister />} />
       
      </Routes>

      {/* MODALS */}
      <AnimatePresence>
        {modal === "login" && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="modal-backdrop fade show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* LOGIN MODAL */}
            <motion.div
              className="modal fade show d-block"
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <div>
                      <h5 className="modal-title">Login</h5>
                      <p>
                        or Sign Up as a{" "}
                        <span
                          style={{ color: "#0d6efd", cursor: "pointer" }}
                          onClick={() => setModal("student")}
                        >
                          Student
                        </span>
                        ,{" "}
                        <span
                          style={{ color: "#0d6efd", cursor: "pointer" }}
                          onClick={() => setModal("tutor")}
                        >
                          Tutor
                        </span>
                      </p>
                    </div>
                    <button
                      className="btn-close"
                      onClick={closeModal}
                    />
                  </div>

                  <div className="modal-body">
                    <Login onLoginSuccess={closeModal} />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {modal === "student" && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="modal-backdrop fade show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* STUDENT REGISTER MODAL */}
            <motion.div
              className="modal fade show d-block"
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Student Sign Up</h5>
                    <button className="btn-close" onClick={closeModal} />
                  </div>
                  <div className="modal-body">
                    <StudentRegister closePopup={closeModal} />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        {modal === "tutor" && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="modal-backdrop fade show"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* TUTOR REGISTER MODAL */}
            <motion.div
              className="modal fade show d-block"
              initial={{ opacity: 0, y: -40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
               <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Tutor Sign Up</h5>
                    <button className="btn-close" onClick={closeModal} />
                  </div>
                  <div className="modal-body">
                    <Tutorregistration closePopup={closeModal} />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
