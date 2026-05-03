/**
 * Validation utility functions
 */

const mongoose = require('mongoose');

/**
 * Check if string is a valid MongoDB ObjectId
 */
const isValidObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

/**
 * Check if string is a valid email
 */
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Check if string is a valid URL
 */
const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Check if string is a valid phone number (Vietnamese format)
 */
const isValidPhone = (phone) => {
  const phoneRegex = /^(0[1-9])+([0-9]{8,9})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Check password strength
 */
const isStrongPassword = (password) => {
  const minLength = 8;
  const maxLength = 128;

  if (password.length < minLength || password.length > maxLength) {
    return {
      valid: false,
      message: `Mật khẩu phải từ ${minLength} đến ${maxLength} ký tự`,
    };
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasUpperCase) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa' };
  }
  if (!hasLowerCase) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất 1 chữ thường' };
  }
  if (!hasNumber) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất 1 số' };
  }
  if (!hasSpecialChar) {
    return { valid: false, message: 'Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt' };
  }

  return { valid: true, message: 'Mật khẩu hợp lệ' };
};

/**
 * Check if string contains only letters and spaces (supports Vietnamese)
 */
const isValidName = (name) => {
  const nameRegex = /^[a-zA-ZÀ-ỹ\s]+$/;
  return nameRegex.test(name);
};

/**
 * Sanitize string - remove dangerous characters
 */
const sanitizeString = (str) => {
  if (typeof str !== 'string') return str;

  return str
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .substring(0, 1000); // Limit length
};

/**
 * Generate random alphanumeric string
 */
const generateRandomString = (length = 32) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * Generate OTP code
 */
const generateOTP = (length = 6) => {
  const digits = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return result;
};

/**
 * Format file size to human readable
 */
const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Check allowed file types
 */
const isAllowedFileType = (mimeType, allowedTypes) => {
  return allowedTypes.includes(mimeType);
};

/**
 * Validate file size
 */
const isValidFileSize = (size, maxSizeInMB) => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return size <= maxSizeInBytes;
};

/**
 * Pagination helper
 */
const getPaginationParams = (query) => {
  const page = Math.max(1, parseInt(query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 10));
  const skip = (page - 1) * limit;
  const sort = query.sort || 'desc';

  return { page, limit, skip, sort };
};

/**
 * Build pagination response
 */
const buildPaginationResponse = (page, limit, total) => {
  const totalPages = Math.ceil(total / limit);

  return {
    page,
    limit,
    total,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };
};

module.exports = {
  isValidObjectId,
  isValidEmail,
  isValidUrl,
  isValidPhone,
  isStrongPassword,
  isValidName,
  sanitizeString,
  generateRandomString,
  generateOTP,
  formatFileSize,
  isAllowedFileType,
  isValidFileSize,
  getPaginationParams,
  buildPaginationResponse,
};
