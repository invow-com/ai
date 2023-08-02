import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import phrasesRoutes from './routes/phrases.routes.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/phrases", phrasesRoutes);
connectDB();
app.listen(port, () => {
  console.log('running')
})