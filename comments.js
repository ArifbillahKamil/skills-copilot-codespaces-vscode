// Create web server
// 1. Import required modules
// 2. Create an express application
// 3. Create a route
// 4. Start the server

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

// Create an express application
const app = express();

// Use middleware to parse the request body
app.use(bodyParser.json());

// Create a route
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.addComment(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

// Create an express application
const app = express();

// Use middleware to parse the request body
app.use(bodyParser.json());

// Create a route
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.addComment(comment);
  res.status(201).json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
