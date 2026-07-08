import express from 'express';
import dotenv from 'dotenv';

// Load env FIRST
dotenv.config();

import connectDB from './config/db.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import geminiResponse from './gemini.js';

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5174",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", userRouter);
app.use("/api/user", authRouter);

// Connect DB
connectDB();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`);
});