const mongoose = require('mongoose');
const userModel = require('./userModel');

require('dotenv').config()
const connectDB = async () => {
    try {
        (await mongoose.connect(process.env.MONGODB_CONNECTION_STRING));
        console.log('Connected To DB..');
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { connectDB };