const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/Formdb';
const dbName = 'Formdb';

async function setupMongoConnection(app) {
  // MongoDB Connection Middleware
  app.use(async (req, res, next) => {
    try {
      const collection = await connectToMongo();
      req.app.locals.collection = collection; // Set the collection in locals
      next();
    } catch (error) {
      // Handle MongoDB connection error
      res.status(500).send('Internal Server Error');
    }
  });

  async function connectToMongo() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
      await client.connect();
      console.log('Connected to MongoDB');
      const database = client.db(dbName);
      const collection = database.collection('form'); // Replace with your actual collection name
      return collection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  return connectToMongo(); // Return the connection promise
}

module.exports = setupMongoConnection;
