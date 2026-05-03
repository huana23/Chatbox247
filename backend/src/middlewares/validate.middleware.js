const { validationResult } = require('express-validator');
const ErrorResponse = require('../cores/error.response');

/**
 * Middleware to validate request using express-validator rules
 * Returns early with 400 error if validation fails
 */
const validate = (validations) => {
  return async (req, res, next) => {
    // Run all validations
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // Format errors for response
    const extractedErrors = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
      value: err.value,
    }));

    return next(
      new ErrorResponse.BadRequest('Dữ liệu không hợp lệ', extractedErrors)
    );
  };
};

/**
 * Check if validation passed without running validations
 * Use this to skip validation for optional fields
 */
const checkValidation = (req) => {
  const errors = validationResult(req);
  return errors.isEmpty();
};

module.exports = {
  validate,
  checkValidation,
};
