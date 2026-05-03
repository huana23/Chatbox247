const { authUser } = require('./auth.middleware');
const { asyncHandler } = require('./asyncHandler.middleware');
const { errorMiddleware, notFoundMiddleware } = require('./error.middleware');
const { validate } = require('./validate.middleware');
const {
    apiLimiter,
    authLimiter,
    otpLimiter,
    registerLimiter,
    passwordResetLimiter,
    sensitiveOperationLimiter,
} = require('./rateLimit.middleware');
const securityMiddleware = require('./security.middleware');

module.exports = {
    authUser,
    asyncHandler,
    errorMiddleware,
    notFoundMiddleware,
    validate,
    apiLimiter,
    authLimiter,
    otpLimiter,
    registerLimiter,
    passwordResetLimiter,
    sensitiveOperationLimiter,
    securityMiddleware,
};
