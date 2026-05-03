import api from './api';
import { authService, isAuthenticated, storeTokens, clearTokens } from './auth.service';

/**
 * Chat Service - handles chat/API related calls
 */

export const chatService = {
  /**
   * Send a message
   */
  sendMessage: async (message) => {
    return post('/chat/message', { message });
  },

  /**
   * Get chat history
   */
  getHistory: async (params = {}) => {
    return get('/chat/history', params);
  },

  /**
   * Clear chat history
   */
  clearHistory: async () => {
    return del('/chat/history');
  },

  /**
   * Get conversation by ID
   */
  getConversation: async (id) => {
    return get(`/chat/conversation/${id}`);
  },
};

export const isUserAuthenticated = isAuthenticated;
export const storeAuthTokens = storeTokens;
export const clearAuthTokens = clearTokens;
export { authService, api };

export default {
  chatService,
  authService,
  userService: () => import('./user.service'),
  api,
};
