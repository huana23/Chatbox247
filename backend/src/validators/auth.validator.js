const { body, param, query, header } = require('express-validator');
const ErrorResponse = require('../cores/error.response');

// ============================================
// AUTH VALIDATORS
// ============================================

const registerValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email không hợp lệ')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('Email quá dài'),

  body('password')
    .trim()
    .isLength({ min: 8, max: 128 })
    .withMessage('Mật khẩu phải từ 8 đến 128 ký tự')
    .matches(/[A-Z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ hoa')
    .matches(/[a-z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ thường')
    .matches(/[0-9]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 số')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'),

  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Mật khẩu xác nhận không khớp');
      }
      return true;
    }),

  body('fullName')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Họ tên phải từ 2 đến 100 ký tự')
    .matches(/^[a-zA-ZÀ-ỹ\s]+$/)
    .withMessage('Họ tên không được chứa ký tự đặc biệt'),
];

const loginValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email không hợp lệ')
    .normalizeEmail(),

  body('password')
    .trim()
    .notEmpty()
    .withMessage('Mật khẩu là bắt buộc'),
];

const forgotPasswordValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email không hợp lệ')
    .normalizeEmail(),
];

const verifyOtpValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email không hợp lệ')
    .normalizeEmail(),

  body('otp')
    .trim()
    .isLength({ min: 6, max: 6 })
    .withMessage('Mã OTP phải có 6 ký tự')
    .isNumeric()
    .withMessage('Mã OTP chỉ chứa số'),
];

const resetPasswordValidation = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Email không hợp lệ')
    .normalizeEmail(),

  body('otp')
    .trim()
    .isLength({ min: 6, max: 6 })
    .withMessage('Mã OTP phải có 6 ký tự')
    .isNumeric()
    .withMessage('Mã OTP chỉ chứa số'),

  body('newPassword')
    .trim()
    .isLength({ min: 8, max: 128 })
    .withMessage('Mật khẩu phải từ 8 đến 128 ký tự')
    .matches(/[A-Z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ hoa')
    .matches(/[a-z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ thường')
    .matches(/[0-9]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 số')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'),

  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Mật khẩu xác nhận không khớp');
      }
      return true;
    }),
];

const changePasswordValidation = [
  body('currentPassword')
    .trim()
    .notEmpty()
    .withMessage('Mật khẩu hiện tại là bắt buộc'),

  body('newPassword')
    .trim()
    .isLength({ min: 8, max: 128 })
    .withMessage('Mật khẩu phải từ 8 đến 128 ký tự')
    .matches(/[A-Z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ hoa')
    .matches(/[a-z]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 chữ thường')
    .matches(/[0-9]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 số')
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage('Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt'),

  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Mật khẩu xác nhận không khớp');
      }
      return true;
    }),
];

// ============================================
// USER VALIDATORS
// ============================================

const updateProfileValidation = [
  body('fullName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Họ tên phải từ 2 đến 100 ký tự')
    .matches(/^[a-zA-ZÀ-ỹ\s]+$/)
    .withMessage('Họ tên không được chứa ký tự đặc biệt'),

  body('phone')
    .optional()
    .trim()
    .matches(/^[0-9]{10,11}$/)
    .withMessage('Số điện thoại không hợp lệ (10-11 số)'),

  body('dateOfBirth')
    .optional()
    .isISO8601()
    .withMessage('Ngày sinh không hợp lệ'),

  body('gender')
    .optional()
    .isIn(['male', 'female', 'other'])
    .withMessage('Giới tính không hợp lệ'),
];

const userIdValidation = [
  param('id')
    .isMongoId()
    .withMessage('ID người dùng không hợp lệ'),
];

// ============================================
// COMMON VALIDATORS
// ============================================

const paginationValidation = [
  query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page phải là số nguyên dương')
    .toInt(),

  query('limit')
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage('Limit phải từ 1 đến 100')
    .toInt(),

  query('sort')
    .optional()
    .isIn(['asc', 'desc', 'ASC', 'DESC'])
    .withMessage('Sort phải là asc hoặc desc'),
];

module.exports = {
  // Auth
  registerValidation,
  loginValidation,
  forgotPasswordValidation,
  verifyOtpValidation,
  resetPasswordValidation,
  changePasswordValidation,

  // User
  updateProfileValidation,
  userIdValidation,

  // Common
  paginationValidation,
};
