
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * Drawer component that replaces the shadcn Drawer with a pure Tailwind CSS implementation
 */
const DrawerJS = ({ children }) => {
  return <>{children}</>;
};

/**
 * Drawer Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {Function} props.onOpen - Open handler
 */
const DrawerTriggerJS = ({ children, onOpen }) => {
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
 * Drawer Portal component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Portal content
 */
const DrawerPortalJS = ({ children }) => {
  return createPortal(children, document.body);
};

/**
 * Drawer Overlay component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerOverlayJS = ({ className = '', onClick, ...props }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/80 ${className}`}
      onClick={onClick}
      {...props}
    />
  );
};

/**
 * Drawer Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerContentJS = ({ children, onClose, className = '', ...props }) => {
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Focus the first focusable element in the drawer
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
      <DrawerOverlayJS onClick={onClose} />
      <div
        ref={contentRef}
        className={`fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background ${className}`}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        {children}
      </div>
    </>
  );
};

/**
 * Drawer Header component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Header content
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerHeaderJS = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`grid gap-1.5 p-4 text-center sm:text-left ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Drawer Footer component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Footer content
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerFooterJS = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`mt-auto flex flex-col gap-2 p-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Drawer Title component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Title content
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerTitleJS = ({ children, className = '', ...props }) => {
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
 * Drawer Description component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 */
const DrawerDescriptionJS = ({ children, className = '', ...props }) => {
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
 * Drawer Root component with state management
 */
const DrawerRoot = ({ children, defaultOpen = false, onOpenChange, shouldScaleBackground = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  const handleOpenChange = (open) => {
    setIsOpen(open);
    onOpenChange?.(open);
    
    // Handle background scaling if enabled
    if (shouldScaleBackground) {
      const mainContent = document.getElementById('root');
      if (mainContent) {
        if (open) {
          mainContent.style.transform = 'scale(0.97)';
          mainContent.style.transition = 'transform 0.3s ease';
          mainContent.style.height = '100vh';
          mainContent.style.overflow = 'hidden';
        } else {
          mainContent.style.transform = 'scale(1)';
          mainContent.style.height = 'auto';
          mainContent.style.overflow = 'visible';
        }
      }
    }
  };
  
  useEffect(() => {
    // Clean up on unmount
    return () => {
      if (shouldScaleBackground) {
        const mainContent = document.getElementById('root');
        if (mainContent) {
          mainContent.style.transform = 'scale(1)';
          mainContent.style.height = 'auto';
          mainContent.style.overflow = 'visible';
        }
      }
    };
  }, [shouldScaleBackground]);
  
  return (
    <>
      {React.Children.map(children, child => {
        if (!child) return null;
        
        if (child.type === DrawerTriggerJS) {
          return React.cloneElement(child, {
            onOpen: () => handleOpenChange(true)
          });
        }
        
        if (child.type === DrawerPortalJS && isOpen) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, portalChild => {
              if (!portalChild) return null;
              
              if (portalChild.type === DrawerContentJS) {
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
  DrawerRoot as DrawerJS,
  DrawerTriggerJS,
  DrawerPortalJS,
  DrawerOverlayJS,
  DrawerContentJS,
  DrawerHeaderJS,
  DrawerFooterJS,
  DrawerTitleJS,
  DrawerDescriptionJS
};
