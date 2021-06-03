require('dotenv').config();
const mongoose = require('mongoose');

/**
 * connecting the db using mongo key (from .env file) and mongoose
 */

const db = process.env.MONGO_KEY;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    return mongoose;
  } catch (err) {
    console.error(err.message);
    // exit process if cannot connect!
    process.exit(1);
  }
};

module.exports = connectDB;
