const jwt = require('jsonwebtoken');

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '1d',
        algorithm: 'HS256',
    });
};

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '7d',
        algorithm: 'HS256',
    });
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { createAccessToken, createRefreshToken, verifyToken };
