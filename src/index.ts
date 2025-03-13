import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/TodoRoutes';

dotenv.config();

const app: Application = express();
app.use(cors());
app.use(express.json());

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://admin:admin@localhost:27017/';


mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));

app.use('/todos', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
