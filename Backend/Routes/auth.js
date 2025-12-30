import express from 'express'
import { Register, Login } from '../Controller/Login.js'

const router = express.Router();

// Route for user registration 
router.post('/register', Register)

// Routes for user Login 
router.post('/login', Login)

export default router;