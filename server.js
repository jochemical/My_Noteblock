// Express.js Backend Server

// Loading modules
const express = require('express');
const cors = require('cors');
const jsonServer = require('json-server');
const path = require('path');

// Check loading modules
console.log('Modules loaded successfully!');

// Create Express application
const app = express();

// Enable CORS (make frontend (React-app) accesible for the backebd API, also when they run on different servers)
app.use(cors());

// Transfer JSON tot JS-objects
app.use(express.json());

// Set up JSON Server to use db.json
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// All routes starting with /api must be send to the JSON-server-router
app.use('/api', router);

// Server responds to port 3001
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});