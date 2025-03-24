
import React, { createContext, useContext, useState, useCallback } from 'react';
import { X } from 'lucide-react';

// Toast context
const ToastContext = createContext({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
});

/**
 * Toast provider component
 */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((options) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, ...options };
    
    setToasts((prevToasts) => [...prevToasts, newToast]);
    
    // Auto-dismiss after timeout if not persistent
    if (!options.persistent) {
      setTimeout(() => {
        dismiss(id);
      }, options.duration || 5000);
    }
    
    return id;
  }, []);

  const dismiss = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

/**
 * Hook to use toast functionality
 */
export const useToastJS = () => {
  const context = useContext(ToastContext);
  
  if (context === undefined) {
    throw new Error('useToastJS must be used within a ToastProvider');
  }
  
  return context;
};

/**
 * Toast container component
 */
const ToastContainer = () => {
  const { toasts, dismiss } = useContext(ToastContext);
  
  if (toasts.length === 0) return null;
  
  return (
    <div className="fixed top-0 right-0 z-50 flex flex-col p-4 space-y-4 max-w-md w-full sm:top-auto sm:bottom-0">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
};

/**
 * Individual toast component
 */
const Toast = ({ toast, onDismiss }) => {
  const { id, title, description, variant = 'default' } = toast;
  
  const variantClasses = {
    default: 'bg-white border-gray-200 text-gray-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    destructive: 'bg-red-50 border-red-200 text-red-900',
  };
  
  return (
    <div
      className={`rounded-lg border shadow-md p-4 flex items-start justify-between transition-all duration-300 animate-in slide-in-from-right-full ${variantClasses[variant]}`}
      role="alert"
    >
      <div className="flex-1">
        {title && <h3 className="font-semibold text-sm">{title}</h3>}
        {description && <div className="text-sm mt-1 opacity-90">{description}</div>}
      </div>
      <button
        onClick={() => onDismiss(id)}
        className="ml-4 text-gray-500 hover:text-gray-900 focus:outline-none"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;
