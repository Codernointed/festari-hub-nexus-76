
import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Context for accordion item state
const AccordionItemContext = createContext(null);

/**
 * Accordion component that replaces the shadcn Accordion with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Accordion items
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='single'] - Type of accordion ('single' or 'multiple')
 * @param {string} [props.defaultValue] - Default expanded item value
 * @param {Function} [props.onChange] - Change handler
 */
const AccordionJS = ({ 
  children, 
  className = '', 
  type = 'single', 
  defaultValue,
  onChange,
  ...props 
}) => {
  const [openItems, setOpenItems] = useState(() => {
    if (type === 'single') {
      return defaultValue ? [defaultValue] : [];
    } else {
      return defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
    }
  });

  const toggleItem = (value) => {
    if (type === 'single') {
      const newOpenItems = openItems.includes(value) ? [] : [value];
      setOpenItems(newOpenItems);
      onChange && onChange(newOpenItems[0] || null);
    } else {
      const newOpenItems = openItems.includes(value) 
        ? openItems.filter(item => item !== value)
        : [...openItems, value];
      setOpenItems(newOpenItems);
      onChange && onChange(newOpenItems);
    }
  };

  const accordionContext = {
    openItems,
    toggleItem,
    type
  };

  return (
    <div className={`divide-y ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * AccordionItem component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Accordion item content
 * @param {string} props.value - Unique value for this accordion item
 * @param {string} [props.className] - Additional CSS classes
 */
const AccordionItemJS = ({ children, value, className = '', ...props }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={`border-b ${className}`} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

/**
 * AccordionTrigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {string} [props.className] - Additional CSS classes
 */
const AccordionTriggerJS = ({ children, className = '', ...props }) => {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const { value } = useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  return (
    <button
      className={`flex w-full items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown 
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
  );
};

/**
 * AccordionContent component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {string} [props.className] - Additional CSS classes
 */
const AccordionContentJS = ({ children, className = '', ...props }) => {
  const { openItems } = useContext(AccordionContext);
  const { value } = useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  return (
    <div
      className={`overflow-hidden text-sm transition-all ${
        isOpen ? 'max-h-96' : 'max-h-0'
      } ${className}`}
      {...props}
    >
      {isOpen && <div className="pb-4 pt-0">{children}</div>}
    </div>
  );
};

// Create a context for the accordion
const AccordionContext = createContext(null);

// Update the AccordionJS component to provide the context
const AccordionJSWithContext = ({ 
  children, 
  className = '', 
  type = 'single', 
  defaultValue,
  onChange,
  ...props 
}) => {
  const [openItems, setOpenItems] = useState(() => {
    if (type === 'single') {
      return defaultValue ? [defaultValue] : [];
    } else {
      return defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : [];
    }
  });

  const toggleItem = (value) => {
    if (type === 'single') {
      const newOpenItems = openItems.includes(value) ? [] : [value];
      setOpenItems(newOpenItems);
      onChange && onChange(newOpenItems[0] || null);
    } else {
      const newOpenItems = openItems.includes(value) 
        ? openItems.filter(item => item !== value)
        : [...openItems, value];
      setOpenItems(newOpenItems);
      onChange && onChange(newOpenItems);
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={`divide-y ${className}`} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export {
  AccordionJSWithContext as AccordionJS,
  AccordionItemJS,
  AccordionTriggerJS,
  AccordionContentJS
};
