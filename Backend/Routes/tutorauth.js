// Routes/tutorauth.js
import express from "express";
import { TutorRegister } from "../Controller/TutorLogin.js";
import multer from "multer";

const tutorrouter = express.Router();

// Setup multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Accept introVideo and recitationAudio files
tutorrouter.post(
  "/tutorregister",
  upload.fields([
    { name: "introVideo", maxCount: 1 },
    { name: "recitationAudio", maxCount: 1 },
  ]),
  TutorRegister
);

export default tutorrouter;
