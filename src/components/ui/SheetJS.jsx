
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

/**
 * Sheet/Sidebar component that replaces the shadcn Sheet with a pure Tailwind CSS implementation
 */
const SheetJS = ({ children }) => {
  return <>{children}</>;
};

/**
 * Sheet Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {Function} props.onOpen - Open handler
 */
const SheetTriggerJS = ({ children, onOpen }) => {
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
 * Sheet Portal component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Portal content
 */
const SheetPortalJS = ({ children }) => {
  return createPortal(children, document.body);
};

/**
 * Sheet Overlay component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetOverlayJS = ({ className = '', ...props }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`}
      {...props}
    />
  );
};

/**
 * Sheet Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.side='right'] - Side of the sheet (right, left, top, bottom)
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetContentJS = ({ children, onClose, side = 'right', className = '', ...props }) => {
  const contentRef = useRef(null);
  
  const sideClasses = {
    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
  };

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
      <SheetOverlayJS onClick={onClose} />
      <div
        ref={contentRef}
        className={`fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 ${sideClasses[side]} ${className}`}
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
 * Sheet Header component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Header content
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetHeaderJS = ({ children, className = '', ...props }) => {
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
 * Sheet Footer component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetFooterJS = ({ children, className = '', ...props }) => {
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
 * Sheet Title component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetTitleJS = ({ children, className = '', ...props }) => {
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
 * Sheet Description component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 */
const SheetDescriptionJS = ({ children, className = '', ...props }) => {
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
 * Sheet Root component with state management
 */
const SheetRoot = ({ children, defaultOpen = false, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const handleOpenChange = (open) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };
  
  return (
    <>
      {React.Children.map(children, child => {
        if (child.type === SheetTriggerJS) {
          return React.cloneElement(child, {
            onOpen: () => handleOpenChange(true)
          });
        }
        if (child.type === SheetPortalJS && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, portalChild => {
              if (portalChild.type === SheetContentJS) {
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
  SheetRoot as SheetJS,
  SheetTriggerJS,
  SheetPortalJS,
  SheetOverlayJS,
  SheetContentJS,
  SheetHeaderJS,
  SheetFooterJS,
  SheetTitleJS,
  SheetDescriptionJS
};
