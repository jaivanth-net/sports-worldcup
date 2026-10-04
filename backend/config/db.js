const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.log('ℹ️ No MONGODB_URI provided. Using built-in datasets.');
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`⚠️ MongoDB connection warning (${error.message}). Using built-in datasets.`);
  }
};

module.exports = connectDB;



