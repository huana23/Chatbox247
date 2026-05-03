const rateLimit = require('express-rate-limit');

/**
 * General API rate limiter
 * Prevents abuse and DDoS attacks
 */
const apiLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // 100 requests per window
  message: {
    status: 429,
    message: 'Quá nhiều yêu cầu từ IP này. Vui lòng thử lại sau.',
    retryAfter: Math.ceil((parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000) / 1000),
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting for health check
    return req.path === '/health';
  },
  keyGenerator: (req) => {
    // Use IP + user ID if authenticated
    const baseKey = req.ip;
    if (req.user?.id) {
      return `${baseKey}:${req.user.id}`;
    }
    return baseKey;
  },
  handler: (req, res, next, options) => {
    console.warn(`[RATE LIMIT] IP: ${req.ip} exceeded limit at ${req.path}`);
    res.status(429).json(options.message);
  },
});

/**
 * Strict rate limiter for authentication endpoints
 * Prevents brute force attacks
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.AUTH_RATE_LIMIT_MAX) || 5, // 5 attempts per window
  message: {
    status: 429,
    message: 'Bạn đã thử đăng nhập quá nhiều lần. Vui lòng thử lại sau 15 phút.',
    retryAfter: 900, // 15 minutes in seconds
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Don't count successful logins
  keyGenerator: (req) => {
    // Use IP + email to prevent distributed attacks
    return `${req.ip}:${req.body?.email || 'unknown'}`;
  },
  handler: (req, res, next, options) => {
    console.warn(`[AUTH RATE LIMIT] Failed login attempt from IP: ${req.ip}, Email: ${req.body?.email}`);
    res.status(429).json(options.message);
  },
});

/**
 * OTP request rate limiter
 * Prevents OTP abuse
 */
const otpLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 OTP requests per hour
  message: {
    status: 429,
    message: 'Bạn đã yêu cầu mã OTP quá nhiều lần. Vui lòng thử lại sau 1 giờ.',
    retryAfter: 3600,
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return `${req.ip}:${req.body?.email || req.query?.email || 'unknown'}`;
  },
  handler: (req, res, next, options) => {
    console.warn(`[OTP RATE LIMIT] OTP request limit exceeded for IP: ${req.ip}`);
    res.status(429).json(options.message);
  },
});

/**
 * Registration rate limiter
 * Prevents spam registrations
 */
const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 registrations per hour per IP
  message: {
    status: 429,
    message: 'Bạn đã đăng ký quá nhiều tài khoản. Vui lòng thử lại sau 1 giờ.',
    retryAfter: 3600,
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return `${req.ip}:register`;
  },
});

/**
 * Password reset rate limiter
 * Prevents password reset spam
 */
const passwordResetLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 password reset requests per hour per email
  message: {
    status: 429,
    message: 'Bạn đã yêu cầu đặt lại mật khẩu quá nhiều lần. Vui lòng thử lại sau 1 giờ.',
    retryAfter: 3600,
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return `${req.ip}:${req.body?.email || 'unknown'}:password-reset`;
  },
});

/**
 * Strict limiter for sensitive operations
 * Used for password change, account deletion, etc.
 */
const sensitiveOperationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 attempts per hour
  message: {
    status: 429,
    message: 'Bạn đã thực hiện thao tác này quá nhiều lần. Vui lòng thử lại sau 1 giờ.',
    retryAfter: 3600,
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  apiLimiter,
  authLimiter,
  otpLimiter,
  registerLimiter,
  passwordResetLimiter,
  sensitiveOperationLimiter,
};
