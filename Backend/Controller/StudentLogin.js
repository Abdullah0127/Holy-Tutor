import StudentUser from "../Modal/StudentSchema.js";
import bcrypt from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For generating JWT tokens

export async function Register(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await StudentUser.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: "Failed",
        data: [],
        message: "It seems you already have an account, please log in instead."
      });
    }

    // Password Hashing
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new User 
    const newStudent = new StudentUser({
      name,
      email,
      password: hashedPassword
    });

    // Save user
    const savedStudent = await newStudent.save();

    // Exclude password
    const { password: pwd, ...user_data } = savedStudent._doc;

    res.status(200).json({
      status: "Success",
      data: [user_data],
      message: "Thank you for registering with us. Your account has been successfully created.",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      code: 500,
      data: [],
      message: "Internal Server Error",
    });
  }
}

