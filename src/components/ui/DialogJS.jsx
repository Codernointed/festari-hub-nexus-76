
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * Dialog/Modal component that replaces the shadcn Dialog with a pure Tailwind CSS implementation
 */
const DialogJS = ({ children }) => {
  return <>{children}</>;
};

/**
 * Dialog Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {Function} props.onOpen - Open handler
 */
const DialogTriggerJS = ({ children, onOpen }) => {
  return React.cloneElement(React.Children.only(children), {
    onClick: (e) => {
      e.preventDefault();
      onOpen();
      
      // Call the original onClick if it exists
      children.props.onClick?.(e);
    },
    'aria-haspopup': 'dialog'
  });
};

/**
 * Dialog Portal component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Portal content
 */
const DialogPortalJS = ({ children }) => {
  return createPortal(children, document.body);
};

/**
 * Dialog Overlay component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogOverlayJS = ({ className = '', ...props }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
      {...props}
    />
  );
};

/**
 * Dialog Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogContentJS = ({ children, onClose, className = '', ...props }) => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Focus the first focusable element in the dialog
    const focusableElements = contentRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements?.length) {
      focusableElements[0].focus();
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
      <DialogOverlayJS onClick={onClose} />
      <div
        ref={contentRef}
        className={`fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg ${className}`}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {children}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
};

/**
 * Dialog Header component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Header content
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogHeaderJS = ({ children, className = '', ...props }) => {
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
 * Dialog Footer component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogFooterJS = ({ children, className = '', ...props }) => {
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
 * Dialog Title component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogTitleJS = ({ children, className = '', ...props }) => {
  return (
    <h2
      className={`text-lg font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
};

/**
 * Dialog Description component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 */
const DialogDescriptionJS = ({ children, className = '', ...props }) => {
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
 * Dialog Root component with state management
 */
const DialogRoot = ({ children, defaultOpen = false, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const handleOpenChange = (open) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };
  
  return (
    <>
      {React.Children.map(children, child => {
        if (child.type === DialogTriggerJS) {
          return React.cloneElement(child, {
            onOpen: () => handleOpenChange(true)
          });
        }
        if (child.type === DialogPortalJS && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, portalChild => {
              if (portalChild.type === DialogContentJS) {
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
  DialogRoot as DialogJS,
  DialogTriggerJS,
  DialogPortalJS,
  DialogOverlayJS,
  DialogContentJS,
  DialogHeaderJS,
  DialogFooterJS,
  DialogTitleJS,
  DialogDescriptionJS
};
