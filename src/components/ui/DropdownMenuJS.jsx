
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronRight } from 'lucide-react';

/**
 * Dropdown Menu component that replaces the shadcn DropdownMenu with a pure Tailwind CSS implementation
 */
const DropdownMenuJS = ({ children }) => {
  return <>{children}</>;
};

/**
 * Dropdown Menu Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {Function} props.onOpen - Open handler
 * @param {Function} props.onClose - Close handler
 * @param {boolean} props.isOpen - Is the dropdown open
 */
const DropdownMenuTriggerJS = ({ 
  children, 
  onOpen,
  onClose,
  isOpen
}) => {
  return React.cloneElement(React.Children.only(children), {
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      isOpen ? onClose() : onOpen();
      
      // Call the original onClick if it exists
      children.props.onClick?.(e);
    },
    'aria-expanded': isOpen,
    'aria-haspopup': true
  });
};

/**
 * Dropdown Menu Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {boolean} props.isOpen - Is the dropdown open
 * @param {string} [props.align='center'] - Alignment (start, center, end)
 * @param {Function} props.onClose - Close handler
 * @param {React.RefObject} props.triggerRef - Reference to the trigger element
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuContentJS = ({ 
  children, 
  isOpen, 
  align = 'center', 
  onClose,
  triggerRef,
  className = ''
}) => {
  const contentRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      
      // Calculate position based on alignment
      let left;
      if (align === 'start') {
        left = rect.left;
      } else if (align === 'end') {
        left = rect.right;
      } else {
        left = rect.left + rect.width / 2;
      }
      
      setPosition({
        top: rect.bottom + window.scrollY,
        left: left + window.scrollX
      });
    }

    // Add click outside listener
    const handleClickOutside = (event) => {
      if (
        contentRef.current && 
        !contentRef.current.contains(event.target) &&
        triggerRef.current && 
        !triggerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef, align]);

  if (!isOpen) return null;

  // Calculate transform based on alignment
  let transformClass = '';
  if (align === 'start') {
    transformClass = 'transform-none';
  } else if (align === 'end') {
    transformClass = 'transform -translate-x-full';
  } else {
    transformClass = 'transform -translate-x-1/2';
  }

  return createPortal(
    <div
      ref={contentRef}
      style={{
        position: 'absolute',
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
      className={`z-50 ${transformClass} min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in fade-in-80 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
    >
      {children}
    </div>,
    document.body
  );
};

/**
 * Dropdown Menu Item component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Item content
 * @param {Function} [props.onClick] - Click handler
 * @param {boolean} [props.disabled] - Is the item disabled
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuItemJS = ({ 
  children, 
  onClick, 
  disabled = false, 
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-gray-100 w-full text-left ${
        disabled ? 'pointer-events-none opacity-50' : ''
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Dropdown Menu Label component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Label content
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuLabelJS = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`px-2 py-1.5 text-sm font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Dropdown Menu Separator component
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuSeparatorJS = ({ className = '', ...props }) => {
  return (
    <div
      className={`-mx-1 my-1 h-px bg-gray-200 ${className}`}
      {...props}
    />
  );
};

/**
 * Dropdown Menu Sub component
 */
const DropdownMenuSubJS = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      {React.Children.map(children, child => {
        if (child.type === DropdownMenuSubTriggerJS) {
          return React.cloneElement(child, {
            isOpen,
            onOpen: () => setIsOpen(true),
            onClose: () => setIsOpen(false)
          });
        }
        if (child.type === DropdownMenuSubContentJS) {
          return React.cloneElement(child, {
            isOpen,
            onClose: () => setIsOpen(false)
          });
        }
        return child;
      })}
    </React.Fragment>
  );
};

/**
 * Dropdown Menu Sub Trigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {boolean} props.isOpen - Is the submenu open
 * @param {Function} props.onOpen - Open handler
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuSubTriggerJS = ({ 
  children, 
  isOpen, 
  onOpen, 
  onClose,
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`relative flex cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-gray-100 w-full text-left ${
        isOpen ? 'bg-gray-100' : ''
      } ${className}`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        isOpen ? onClose() : onOpen();
      }}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </button>
  );
};

/**
 * Dropdown Menu Sub Content component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {boolean} props.isOpen - Is the submenu open
 * @param {Function} props.onClose - Close handler
 * @param {string} [props.className] - Additional CSS classes
 */
const DropdownMenuSubContentJS = ({ 
  children, 
  isOpen, 
  onClose,
  className = '',
  ...props 
}) => {
  const contentRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      className={`z-50 min-w-[8rem] overflow-hidden rounded-md border border-gray-200 bg-white p-1 shadow-md animate-in fade-in-80 slide-in-from-left-1 absolute top-0 left-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Dropdown Menu React component that handles state and composition
 */
const DropdownMenuRoot = ({ children, align = 'center' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);

  return (
    <>
      {React.Children.map(children, child => {
        if (child.type === DropdownMenuTriggerJS) {
          return React.cloneElement(child, {
            onOpen: () => setIsOpen(true),
            onClose: () => setIsOpen(false),
            isOpen,
            ref: triggerRef
          });
        }
        if (child.type === DropdownMenuContentJS) {
          return React.cloneElement(child, {
            isOpen,
            align,
            onClose: () => setIsOpen(false),
            triggerRef
          });
        }
        return child;
      })}
    </>
  );
};

export {
  DropdownMenuRoot as DropdownMenuJS,
  DropdownMenuTriggerJS,
  DropdownMenuContentJS,
  DropdownMenuItemJS,
  DropdownMenuLabelJS,
  DropdownMenuSeparatorJS,
  DropdownMenuSubJS,
  DropdownMenuSubTriggerJS,
  DropdownMenuSubContentJS
};
