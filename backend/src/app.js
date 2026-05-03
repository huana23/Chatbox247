const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { connectDB, corsConfig } = require('./config');
const { errorMiddleware, notFoundMiddleware } = require('./middlewares');
const { authRoutes } = require('./modules/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(corsConfig);

connectDB();

app.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'ChatBox247 API is running',
        version: '1.0.0',
    });
});

app.use('/api/auth', authRoutes);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
