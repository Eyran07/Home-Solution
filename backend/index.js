const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user');

const app = express();

// Use CORS middleware for handling Cross-Origin Resource Sharing
app.use(cors({
  // Specify the origin of your frontend application
  origin: 'https://home-solution.vercel.app',
  // Alternatively, use '*' to allow all origins (not recommended for production)
  // origin: '*'
}));

// Middleware for parsing JSON bodies
app.use(express.json());

// User routes
app.use('/', userRoutes);

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error to MongoDB', err));

// Root Route
app.get('/', (req, res) => {
  res.send('Home Solution Server Running');
});

// Start the server
const PORT = process.env.PORT || 6060;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
