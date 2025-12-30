import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';



import router from './Routes/auth.js';
import connectToMongo from './Connection/db.js';

dotenv.config();

// Connect to MongoDB
connectToMongo(process.env.mongodbURL);

const app = express();
const port = process.env.PORT || 4000;

// ✅ ADD CORS (IMPORTANT — before routes)
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/auth', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
