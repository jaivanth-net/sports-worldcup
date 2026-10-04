const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { connectDB } = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/cricket', require('./routes/cricket'));
app.use('/api/football', require('./routes/football'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Sports World Cup API is running' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🏆 Sports World Cup Website is live!`);
  console.log(`👉 Live website URL: https://sports-worldcup.onrender.com\n`);
});

