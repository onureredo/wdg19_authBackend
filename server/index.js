import express from 'express';
import './db/server.js';
import authRouter from './routes/authRouter.js';
import postsRouter from './routes/postsRouter.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import config from './config/config.js';

const app = express();
const PORT = 8000;

// 3rd
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
