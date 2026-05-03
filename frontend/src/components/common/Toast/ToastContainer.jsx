import { useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info, X } from 'lucide-react';
import { useToast } from '../../../contexts/ToastContext';

const ToastIcon = ({ type }) => {
  const iconProps = {
    className: 'w-5 h-5',
  };

  switch (type) {
    case 'success':
      return <CheckCircle {...iconProps} className={`${iconProps.className} text-green-500`} />;
    case 'error':
      return <XCircle {...iconProps} className={`${iconProps.className} text-red-500`} />;
    case 'warning':
      return <AlertCircle {...iconProps} className={`${iconProps.className} text-yellow-500`} />;
    case 'info':
      return <Info {...iconProps} className={`${iconProps.className} text-blue-500`} />;
    case 'loading':
      return (
        <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      );
    default:
      return <Info {...iconProps} className={`${iconProps.className} text-blue-500`} />;
  }
};

const ToastItem = ({ toast, onRemove }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    if (toast.type === 'loading') {
      // Don't auto-remove loading toasts
      return;
    }
  }, [toast.type]);

  const handleClose = () => {
    removeToast(toast.id);
  };

  const bgColor = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    warning: 'bg-yellow-50 border-yellow-200',
    info: 'bg-blue-50 border-blue-200',
    loading: 'bg-white border-gray-200',
  }[toast.type] || 'bg-white border-gray-200';

  const progressColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
    loading: 'bg-blue-500 animate-pulse',
  }[toast.type] || 'bg-gray-500';

  return (
    <div
      className={`relative w-full max-w-sm overflow-hidden rounded-lg border shadow-lg ${bgColor} transform transition-all duration-300 ease-in-out`}
      role="alert"
    >
      <div className="flex items-start gap-3 p-4">
        <ToastIcon type={toast.type} />
        
        <div className="flex-1 min-w-0">
          {toast.title && (
            <p className="text-sm font-medium text-gray-900">{toast.title}</p>
          )}
          {toast.message && (
            <p className={`text-sm ${toast.title ? 'mt-1 text-gray-600' : 'text-gray-900'}`}>
              {toast.message}
            </p>
          )}
        </div>

        <button
          onClick={handleClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Progress bar */}
      {toast.duration > 0 && toast.type !== 'loading' && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100">
          <div
            className={`h-full ${progressColor} transition-all duration-100 linear`}
            style={{
              animation: `shrink ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes shrink {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem toast={toast} />
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
