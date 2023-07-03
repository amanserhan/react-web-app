// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express app
const app = express();

// Set up the port
const port = 3000; 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://aman4:Fxh1M4sDJfp4mPU4@cluster0.ohpyldp.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // A route to retrieve videos
app.get('/videos', (req, res) => {
    Video.find()
      .then((videos) => {
        res.json(videos);
      })
      .catch((error) => {
        console.error('Error retrieving videos:', error);
        res.status(500).json({ error: 'Failed to retrieve videos' });
      });
  });
  