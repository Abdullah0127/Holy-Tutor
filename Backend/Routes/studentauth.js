import express from 'express'
import {  Login, Register } from '../Controller/StudentLogin.js';

const studentrouter = express.Router();

studentrouter.post('/register', Register)
studentrouter.post('/login', Login)


export default studentrouter;