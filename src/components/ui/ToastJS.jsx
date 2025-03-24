
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

// Toast context to manage toasts
const ToastContext = createContext(null);

/**
 * Toast component for showing notifications
 */
const ToastJS = ({ 
  id, 
  title, 
  description, 
  variant = 'default', 
  duration = 5000,
  onClose 
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const baseClasses = "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg";
  const variantClasses = {
    default: "border-border bg-background text-foreground",
    destructive: "border-destructive bg-destructive text-destructive-foreground",
    success: "border-green-600 bg-green-600 text-white",
  };

  const toastClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.default
  ].join(' ');

  return (
    <div className={toastClasses}>
      <div className="grid gap-1">
        {title && <h5 className="text-sm font-semibold">{title}</h5>}
        {description && <p className="text-sm opacity-90">{description}</p>}
      </div>
      <button 
        onClick={() => onClose(id)}
        className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none group-hover:opacity-100"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

/**
 * Toast provider component
 */
const ToastProviderJS = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback((toast) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }]);
    return id;
  }, []);

  const value = {
    toasts,
    addToast,
    removeToast,
    toast: (options) => addToast(options)
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToasterJS />
    </ToastContext.Provider>
  );
};

/**
 * Toaster component that displays all active toasts
 */
const ToasterJS = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    return null;
  }
  
  const { toasts, removeToast } = context;

  return (
    <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
      {toasts.map((toast) => (
        <div key={toast.id} className="mb-2 transform-gpu animate-in fade-in-50 slide-in-from-right-full">
          <ToastJS
            {...toast}
            onClose={removeToast}
          />
        </div>
      ))}
    </div>
  );
};

/**
 * Hook to use toast functionality
 */
export const useToastJS = () => {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error("useToastJS must be used within a ToastProviderJS");
  }
  
  return context;
};

export { ToastJS, ToastProviderJS, ToasterJS };
