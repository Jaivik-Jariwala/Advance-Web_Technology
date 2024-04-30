const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Formdb';

async function setupMongoConnection(app) {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Define schema
    const formSchema = new mongoose.Schema({
      // Define your schema fields here
    });

    // Create model
    const FormModel = mongoose.model('Form', formSchema);

    // Add model to app locals
    app.locals.FormModel = FormModel;

    // Middleware to handle connection
    app.use((req, res, next) => {
      req.app.locals.FormModel = FormModel;
      next();
    });

    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

module.exports = setupMongoConnection;
