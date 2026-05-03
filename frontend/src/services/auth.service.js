import { get, post, put, del } from './api';

/**
 * Auth Service - handles all authentication related API calls
 */

export const authService = {
  /**
   * Register a new user
   */
  register: async (data) => {
    return post('/auth/register', data);
  },

  /**
   * Login with email and password
   */
  login: async (email, password) => {
    return post('/auth/login', { email, password });
  },

  /**
   * Logout - invalidate tokens
   */
  logout: async () => {
    return post('/auth/logout');
  },

  /**
   * Request password reset (send OTP)
   */
  forgotPassword: async (email) => {
    return post('/auth/forgot-password', { email });
  },

  /**
   * Verify OTP code
   */
  verifyOtp: async (email, otp) => {
    return post('/auth/verify-otp', { email, otp });
  },

  /**
   * Resend OTP code
   */
  resendOtp: async (email) => {
    return post('/auth/resend-otp', { email });
  },

  /**
   * Reset password with OTP
   */
  resetPassword: async (email, otp, newPassword, confirmPassword) => {
    return post('/auth/reset-password', {
      email,
      otp,
      newPassword,
      confirmPassword,
    });
  },

  /**
   * Change password (when logged in)
   */
  changePassword: async (currentPassword, newPassword, confirmPassword) => {
    return post('/auth/change-password', {
      currentPassword,
      newPassword,
      confirmPassword,
    });
  },

  /**
   * Refresh access token
   */
  refreshToken: async (refreshToken) => {
    return post('/auth/refresh-token', { refreshToken });
  },

  /**
   * Get current user profile
   */
  getProfile: async () => {
    return get('/auth/me');
  },

  /**
   * Update user profile
   */
  updateProfile: async (data) => {
    return put('/users/profile', data);
  },

  /**
   * Verify email (if verification required)
   */
  verifyEmail: async (token) => {
    return post('/auth/verify-email', { token });
  },

  /**
   * Resend email verification
   */
  resendVerification: async (email) => {
    return post('/auth/resend-verification', { email });
  },

  /**
   * Google OAuth login
   */
  googleLogin: async (tokenId) => {
    return post('/auth/google', { tokenId });
  },
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('accessToken');
};

/**
 * Get access token
 */
export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

/**
 * Get refresh token
 */
export const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

/**
 * Store tokens
 */
export const storeTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

/**
 * Clear tokens
 */
export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export default authService;
