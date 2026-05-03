const express = require('express');
const router = express.Router();
const { asyncHandler, authUser } = require('../../middlewares');

const authController = require('./auth.controller');

router.post('/register', asyncHandler(authController.register));
router.post('/login', asyncHandler(authController.login));
router.get('/logout', authUser, asyncHandler(authController.logout));
router.get('/auth', authUser, asyncHandler(authController.getCurrentUser));
router.get('/refresh-token', asyncHandler(authController.refreshToken));
router.post('/forgot-password', asyncHandler(authController.forgotPassword));
router.post('/verify-forgot-password', asyncHandler(authController.verifyForgotPassword));

module.exports = router;
