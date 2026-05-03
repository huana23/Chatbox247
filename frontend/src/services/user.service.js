import { get, post } from './api';

/**
 * User Service - handles all user related API calls
 */

export const userService = {
  /**
   * Get all users (admin only)
   */
  getAllUsers: async (params = {}) => {
    return get('/users', params);
  },

  /**
   * Get user by ID
   */
  getUserById: async (id) => {
    return get(`/users/${id}`);
  },

  /**
   * Update user profile
   */
  updateProfile: async (data) => {
    return put('/users/profile', data);
  },

  /**
   * Update user avatar
   */
  updateAvatar: async (formData) => {
    return post('/users/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  /**
   * Delete user account
   */
  deleteAccount: async () => {
    return del('/users/account');
  },

  /**
   * Deactivate user account
   */
  deactivateAccount: async () => {
    return post('/users/deactivate');
  },

  /**
   * Get user settings
   */
  getSettings: async () => {
    return get('/users/settings');
  },

  /**
   * Update user settings
   */
  updateSettings: async (data) => {
    return put('/users/settings', data);
  },

  /**
   * Get user activity log
   */
  getActivityLog: async (params = {}) => {
    return get('/users/activity', params);
  },

  /**
   * Export user data (GDPR)
   */
  exportData: async () => {
    return post('/users/export');
  },
};

export default userService;
