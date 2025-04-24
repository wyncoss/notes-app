import express from 'express';
import cors from 'cors';

const app = express();

app.use(json());
app.use(
  cors({
    origin: '*',
    methos: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use('/api');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
