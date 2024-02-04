const express = require('express');
const router = express.Router();
const setupMongoConnection = require('../server/mongoconnection');

const app = express(); // Create a new Express app

// ... (other middleware)

// MongoDB Connection Middleware
setupMongoConnection(app);

// Route to serve the HTML form
router.get('/', (req, res) => {
  res.sendFile('form.html', { root: 'views' });
});

// Route to handle form submission
router.post('/yourRoute', async (req, res) => {
  try {
    const result = await req.app.locals.collection.insertOne(req.body);
    console.log(`Inserted ${result.insertedCount} document`);
    // Your other MongoDB operations go here

    res.send('Success');
  } catch (error) {
    console.error('Error in MongoDB operation:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
