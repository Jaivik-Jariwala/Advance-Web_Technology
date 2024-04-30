const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const setupMongoConnection = require('./mongoconnection');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the 'views' folder
app.use(express.static(path.join(__dirname, '../views')));

// MongoDB Connection Middleware
setupMongoConnection(app);

// Routes
const indexRoutes = require('../routes/index');
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 5252;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
