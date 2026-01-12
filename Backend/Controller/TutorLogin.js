import TutorUser from "../Modal/TutorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function TutorRegister(req, res) {
  try {
    const { email, password, ...otherData } = req.body;

    const introVideoFile = req.files?.introVideo ? req.files.introVideo[0].path : null;
    const recitationAudioFile = req.files?.recitationAudio ? req.files.recitationAudio[0].path : null;

    const existUser = await TutorUser.findOne({ email });
    if (existUser) {
      return res.status(400).json({
        status: "failed",
        message: "It seems you already have an account, please log in instead.",
      });
    }

    let hashedPassword;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    const languages = typeof otherData.languages === "string" ? JSON.parse(otherData.languages) : otherData.languages;
    const availability = typeof otherData.availability === "string" ? JSON.parse(otherData.availability) : otherData.availability;
    const courses = typeof otherData.courses === "string" ? JSON.parse(otherData.courses) : otherData.courses;

    const newTutor = new TutorUser({
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

    const { password: pwd, ...tutorData } = newTutor._doc; // exclude password

    return res.status(201).json({
      status: "success",
      message: "Tutor registered successfully",
      data: tutorData,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "Server error",
    });
  }
}

export async function Login(req, res) {
  try {
    const { email, password } = req.body;

    // Use correct schema
    const existingUser = await TutorUser.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "No account found with this email. Please register first."
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({
        status: "failed",
        data: [],
        message: "Invalid password. Please try again."
      });
    }

    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: pwd, ...user_data } = existingUser._doc;

    res.status(200).json({
      status: "success",
      data: { user: user_data, token },
      message: "Login successful.",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
}
