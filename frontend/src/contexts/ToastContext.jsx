import { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  /**
   * Add a toast notification
   */
  const addToast = useCallback(({ type = 'info', title, message, duration = 5000 }) => {
    const id = uuidv4();

    const toast = {
      id,
      type,
      title,
      message,
      duration,
    };

    setToasts((prev) => [...prev, toast]);

    // Auto remove after duration
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }

    return id;
  }, []);

  /**
   * Remove a toast
   */
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  /**
   * Clear all toasts
   */
  const clearToasts = useCallback(() => {
    setToasts([]);
  }, []);

  /**
   * Success toast
   */
  const success = useCallback((message, title = 'Thành công') => {
    return addToast({ type: 'success', title, message });
  }, [addToast]);

  /**
   * Error toast
   */
  const error = useCallback((message, title = 'Lỗi') => {
    return addToast({ type: 'error', title, message, duration: 8000 });
  }, [addToast]);

  /**
   * Warning toast
   */
  const warning = useCallback((message, title = 'Cảnh báo') => {
    return addToast({ type: 'warning', title, message });
  }, [addToast]);

  /**
   * Info toast
   */
  const info = useCallback((message, title = 'Thông báo') => {
    return addToast({ type: 'info', title, message });
  }, [addToast]);

  /**
   * Promise toast - shows loading, then success or error
   */
  const promise = useCallback(async (promise, messages = {}) => {
    const id = addToast({
      type: 'loading',
      title: messages.loading || 'Đang xử lý...',
      message: '',
      duration: 0,
    });

    try {
      const result = await promise;
      removeToast(id);
      
      if (messages.success) {
        success(messages.success);
      }
      
      return result;
    } catch (err) {
      removeToast(id);
      error(messages.error || err.message || 'Đã xảy ra lỗi');
      throw err;
    }
  }, [addToast, removeToast, success, error]);

  const value = {
    toasts,
    addToast,
    removeToast,
    clearToasts,
    success,
    error,
    warning,
    info,
    promise,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};

/**
 * Custom hook to use toast context
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastContext;
