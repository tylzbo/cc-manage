'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(cors()); // Enable CORS
app.use(helmet()); // Add security headers
app.use(morgan('combined')); // Log requests to the console
app.use(express.json()); // Parse JSON bodies

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World! Ready to manage your services.');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
