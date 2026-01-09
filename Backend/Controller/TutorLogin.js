import TutorProfile from "../Modal/TutorProfile.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function TutorRegister(req, res) {
  try {
    const { email, password, ...otherData } = req.body;

    // Get uploaded files
    const introVideoFile = req.files?.introVideo ? req.files.introVideo[0].path : null;
    const recitationAudioFile = req.files?.recitationAudio ? req.files.recitationAudio[0].path : null;

    const existUser = await TutorProfile.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "It seems you already have an account, please log in instead.",
      });
    }

    let hashedPassword;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    // Parse nested arrays if they come as JSON strings (FormData sends arrays as string)
    const languages = typeof otherData.languages === "string" ? JSON.parse(otherData.languages) : otherData.languages;
    const availability = typeof otherData.availability === "string" ? JSON.parse(otherData.availability) : otherData.availability;
    const courses = typeof otherData.courses === "string" ? JSON.parse(otherData.courses) : otherData.courses;

    const newTutor = new TutorProfile({
      ...otherData,
      email,
      ...(hashedPassword && { password: hashedPassword }),
      ...(introVideoFile && { introVideo: introVideoFile }),
      ...(recitationAudioFile && { recitationAudio: recitationAudioFile }),
      languages,
      availability,
      courses,
    });

    await newTutor.save();

    return res.status(201).json({
      status: "success",
      message: "Tutor registered successfully",
      data: newTutor,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
}
