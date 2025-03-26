
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * AlertDialog component that replaces the shadcn AlertDialog with a pure Tailwind CSS implementation
 */
const AlertDialogJS = ({ children }) => {
  return <>{children}</>;
};

/**
 * AlertDialog Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {Function} props.onOpen - Open handler
 */
const AlertDialogTriggerJS = ({ children, onOpen }) => {
  return React.cloneElement(React.Children.only(children), {
    onClick: (e) => {
      e.preventDefault();
      onOpen();
      
      // Call the original onClick if it exists
      children.props.onClick?.(e);
    },
    'aria-haspopup': 'alertdialog'
  });
};

/**
 * AlertDialog Portal component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Portal content
 */
const AlertDialogPortalJS = ({ children }) => {
  return createPortal(children, document.body);
};

/**
 * AlertDialog Overlay component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogOverlayJS = ({ className = '', ...props }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
      {...props}
    />
  );
};

/**
 * AlertDialog Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogContentJS = ({ children, onClose, className = '', ...props }) => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Focus the first focusable element in the dialog
    const focusableElements = contentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements?.length) {
      // Focus on the "cancel" button by default
      const cancelButton = Array.from(focusableElements).find(
        elem => elem.getAttribute('data-alert-dialog-cancel') === 'true'
      );
      
      if (cancelButton) {
        cancelButton.focus();
      } else {
        focusableElements[0].focus();
      }
    }
    
    // Handle escape key press
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  
  return (
    <>
      <AlertDialogOverlayJS onClick={onClose} />
      <div
        ref={contentRef}
        className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className}`}
        role="alertdialog"
        aria-modal="true"
        {...props}
      >
        {children}
      </div>
    </>
  );
};

/**
 * AlertDialog Header component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Header content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogHeaderJS = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`flex flex-col space-y-2 text-center sm:text-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * AlertDialog Footer component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogFooterJS = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * AlertDialog Title component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogTitleJS = ({ children, className = '', ...props }) => {
  return (
    <h2
      className={`text-lg font-semibold ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * AlertDialog Description component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogDescriptionJS = ({ children, className = '', ...props }) => {
  return (
    <p
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * AlertDialog Action component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Action content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogActionJS = ({ children, className = '', onClick, ...props }) => {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * AlertDialog Cancel component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Cancel content
 * @param {string} [props.className] - Additional CSS classes
 */
const AlertDialogCancelJS = ({ children, className = '', onClick, ...props }) => {
  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-2 sm:mt-0 ${className}`}
      onClick={onClick}
      data-alert-dialog-cancel="true"
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * AlertDialog Root component with state management
 */
const AlertDialogRoot = ({ children, defaultOpen = false, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const handleOpenChange = (open) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };
  
  return (
    <>
      {React.Children.map(children, child => {
        if (!child) return null;
        
        if (child.type === AlertDialogTriggerJS) {
          return React.cloneElement(child, {
            onOpen: () => handleOpenChange(true)
          });
        }
        
        if (child.type === AlertDialogPortalJS && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, portalChild => {
              if (!portalChild) return null;
              
              if (portalChild.type === AlertDialogContentJS) {
                return React.cloneElement(portalChild, {
                  onClose: () => handleOpenChange(false)
                });
              }
              return portalChild;
            })
          });
        }
        
        return null;
      })}
    </>
  );
};

export {
  AlertDialogRoot as AlertDialogJS,
  AlertDialogTriggerJS,
  AlertDialogPortalJS,
  AlertDialogOverlayJS,
  AlertDialogContentJS,
  AlertDialogHeaderJS,
  AlertDialogFooterJS,
  AlertDialogTitleJS,
  AlertDialogDescriptionJS,
  AlertDialogActionJS,
  AlertDialogCancelJS
};
