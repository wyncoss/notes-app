const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
    methos: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use('/api');
