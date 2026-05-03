const { StatusCodes } = require('../constants');

const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    const message = err.message || 'Lỗi Server';

    return res.status(statusCode).json({
        success: false,
        message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};

const notFoundMiddleware = (req, res, next) => {
    const error = new Error(`Không tìm thấy: ${req.originalUrl}`);
    error.statusCode = StatusCodes.NOT_FOUND;
    next(error);
};

module.exports = { errorMiddleware, notFoundMiddleware };
