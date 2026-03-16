'use strict';

const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
module.exports = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get the token from the Authorization header

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Token is not valid' });
        }
        req.user = decoded; // Save the user data from the token to request object
        next(); // Proceed to the next middleware or route handler
    });
};
