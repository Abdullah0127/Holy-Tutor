import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';



import router from './Routes/auth.js';
import connectToMongo from './Connection/db.js';
import tutorrouter from './Routes/tutorauth.js';
import studentrouter from './Routes/studentauth.js';

dotenv.config();

// Connect to MongoDB
connectToMongo(process.env.mongodbURL);

const app = express();
const port = process.env.PORT || 4000;

// ✅ ADD CORS (IMPORTANT — before routes)
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://holy-tutor.vercel.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());

// Routes
app.use('/api/auth', router);

app.use('/api/tutorauth', tutorrouter)

app.use('/api/studentauth', studentrouter)

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
