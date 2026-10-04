const mongoose = require('mongoose');

// Disable Mongoose command buffering so queries fail-fast if DB is down instead of hanging for 10s
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.log('ℹ️ No MONGODB_URI provided. Using built-in datasets.');
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 1000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`⚠️ MongoDB connection warning (${error.message}). Using built-in datasets instantly.`);
  }
};

const isDbConnected = () => mongoose.connection.readyState === 1;

module.exports = { connectDB, isDbConnected };




