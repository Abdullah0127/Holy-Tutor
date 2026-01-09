import express from 'express'
import {  Register } from '../Controller/StudentLogin.js';

const studentrouter = express.Router();

studentrouter.post('/register', Register)


export default studentrouter;