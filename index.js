import express from 'express';
import './db/server.js';
import authRouter from './routes/authRouter.js';
import postsRouter from './routes/postsRouter.js';

const app = express();
const PORT = 8000;

// 3rd
app.use(cors());
app.use(express.json());

// ROUTES
app.use('/auth', authRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));