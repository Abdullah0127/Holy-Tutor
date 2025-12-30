import User from "../Modal/Database.js";
import bcrypt from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For generating JWT tokens



// Register the user 

export async function Register(req, res) {
    const { name, email, password } = req.body;

    try {
        // Check if User exists 
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "It seems you already have an account, please log in instead."
            });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new User 
        const newUser = new User({
            name,
            email,
            password: hashedPassword, // hashed password
        });

        // Saved the new user in the database
        const savedUser = await newUser.save();

        // Exclude role (even if not present) and send user data
        const { role, ...user_data } = savedUser._doc;

        res.status(200).json({
            status: "success",
            data: [user_data],
            message:
                "Thank you for registering with us. Your account has been successfully created.",
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

export async function Login(req, res) {
    try {
        // 🔹 Debugging lines – put these first
        console.log("Login request body:", req.body);
        console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);

        // Destructure email and password
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "No account found with this email. Please register first."
            });
        }

        // Compare entered password with hashed password in DB
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({
                status: "failed",
                data: [],
                message: "Invalid password. Please try again."
            });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { id: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Exclude password and send user data
        const { password: pwd, ...user_data } = existingUser._doc;

        res.status(200).json({
            status: "success",
            data: { user: user_data, token },
            message: "Login successful.",
        });
      

    } catch (error) {
        console.error(error); // will show the actual error
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
}

