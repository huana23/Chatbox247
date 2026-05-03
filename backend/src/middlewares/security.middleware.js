const helmet = require('helmet');

/**
 * Security middleware configuration
 * Sets various HTTP headers for security
 */
const helmetMiddleware = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
      scriptSrc: ["'self'", 'https://accounts.google.com'],
      frameSrc: ["'self'", 'https://accounts.google.com'],
      connectSrc: ["'self'", 'https://accounts.google.com', 'https://oauth2.googleapis.com'],
    },
  },
  crossOriginEmbedderPolicy: false, // Disable for fonts.googleapis.com compatibility
});

/**
 * Force HTTPS in production
 */
const forceHttps = (req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(`https://${req.get('Host')}${req.url}`);
  }
  next();
};

/**
 * Prevent clickjacking
 */
const preventClickjacking = (req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
};

/**
 * Prevent MIME type sniffing
 */
const preventMimeSniffing = (req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
};

/**
 * Enable XSS filter
 */
const enableXSSFilter = (req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
};

/**
 * Referrer Policy
 */
const referrerPolicy = (req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
};

/**
 * Permissions Policy
 */
const permissionsPolicy = (req, res, next) => {
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=()'
  );
  next();
};

/**
 * Remove powered by header
 */
const removePoweredBy = (req, res, next) => {
  res.removeHeader('X-Powered-By');
  next();
};

/**
 * HSTS (HTTP Strict Transport Security)
 */
const hstsMiddleware = (req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    );
  }
  next();
};

/**
 * Combine all security middlewares
 */
const securityMiddleware = [
  helmetMiddleware,
  forceHttps,
  preventClickjacking,
  preventMimeSniffing,
  enableXSSFilter,
  referrerPolicy,
  permissionsPolicy,
  removePoweredBy,
  hstsMiddleware,
];

module.exports = securityMiddleware;
