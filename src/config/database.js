const mongoose = require('mongoose');

const dbURI = 'your_mongo_db_connection_string_here'; // Replace with your MongoDB connection string

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 5, // Maintain up to 5 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
};

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, options);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;