const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes'); // path might vary

app.use(express.json());
app.use('/api/auth', authRoutes); // e.g., /api/auth/register

module.exports = app;

