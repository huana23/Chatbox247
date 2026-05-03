import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { authService, isAuthenticated, storeTokens, clearTokens } from '../services/auth.service';

const AuthContext = createContext(null);

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };

    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };

    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };

    case 'UPDATE_USER':
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  /**
   * Check if user is logged in on mount
   */
  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const response = await authService.getProfile();
          dispatch({
            type: 'AUTH_SUCCESS',
            payload: response.data,
          });
        } catch (error) {
          clearTokens();
          dispatch({
            type: 'AUTH_FAILURE',
            payload: error.response?.data?.message || 'Session expired',
          });
        }
      } else {
        dispatch({ type: 'AUTH_FAILURE', payload: null });
      }
    };

    checkAuth();
  }, []);

  /**
   * Register
   */
  const register = useCallback(async (data) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.register(data);
      const { accessToken, refreshToken, user } = response.data;

      storeTokens(accessToken, refreshToken);

      dispatch({
        type: 'AUTH_SUCCESS',
        payload: user,
      });

      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Registration failed',
      });
      throw error;
    }
  }, []);

  /**
   * Login
   */
  const login = useCallback(async (email, password) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.login(email, password);
      const { accessToken, refreshToken, user } = response.data;

      storeTokens(accessToken, refreshToken);

      dispatch({
        type: 'AUTH_SUCCESS',
        payload: user,
      });

      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Login failed',
      });
      throw error;
    }
  }, []);

  /**
   * Logout
   */
  const logout = useCallback(async () => {
    try {
      await authService.logout();
    } catch (error) {
      // Ignore logout errors
    } finally {
      clearTokens();
      dispatch({ type: 'AUTH_LOGOUT' });
    }
  }, []);

  /**
   * Forgot Password
   */
  const forgotPassword = useCallback(async (email) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.forgotPassword(email);
      dispatch({ type: 'CLEAR_ERROR' });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Request failed',
      });
      throw error;
    }
  }, []);

  /**
   * Reset Password with OTP
   */
  const resetPassword = useCallback(async (email, otp, newPassword, confirmPassword) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.resetPassword(email, otp, newPassword, confirmPassword);
      dispatch({ type: 'CLEAR_ERROR' });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Reset failed',
      });
      throw error;
    }
  }, []);

  /**
   * Change Password
   */
  const changePassword = useCallback(async (currentPassword, newPassword, confirmPassword) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.changePassword(currentPassword, newPassword, confirmPassword);
      dispatch({ type: 'CLEAR_ERROR' });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Change password failed',
      });
      throw error;
    }
  }, []);

  /**
   * Update User Profile
   */
  const updateProfile = useCallback(async (data) => {
    dispatch({ type: 'AUTH_START' });
    try {
      const response = await authService.updateProfile(data);
      dispatch({
        type: 'UPDATE_USER',
        payload: response.data,
      });
      return response;
    } catch (error) {
      dispatch({
        type: 'AUTH_FAILURE',
        payload: error.response?.data?.message || 'Update failed',
      });
      throw error;
    }
  }, []);

  /**
   * Clear Error
   */
  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const value = {
    ...state,
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
    changePassword,
    updateProfile,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to use auth context
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
