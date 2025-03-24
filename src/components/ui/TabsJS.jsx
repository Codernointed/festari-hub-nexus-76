
import React, { createContext, useContext, useState } from 'react';

// Create a context for the tabs
const TabsContext = createContext(null);

/**
 * Tabs component that replaces the shadcn Tabs with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Tab content
 * @param {string} [props.defaultValue] - Default selected tab
 * @param {string} [props.value] - Selected tab (controlled)
 * @param {Function} [props.onValueChange] - Value change handler
 * @param {string} [props.className] - Additional CSS classes
 */
const TabsJS = ({ 
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  className = '',
  ...props 
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;
  
  const setValue = (newValue) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  };

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

/**
 * TabsList component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Tab triggers
 * @param {string} [props.className] - Additional CSS classes
 */
const TabsListJS = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * TabsTrigger component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Trigger content
 * @param {string} props.value - Tab value
 * @param {string} [props.className] - Additional CSS classes
 */
const TabsTriggerJS = ({ children, value, className = '', ...props }) => {
  const { value: selectedValue, setValue } = useContext(TabsContext);
  const isSelected = selectedValue === value;
  
  return (
    <button
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? 'active' : 'inactive'}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        isSelected 
          ? 'bg-background text-foreground shadow-sm' 
          : 'text-muted-foreground hover:bg-muted/50'
      } ${className}`}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * TabsContent component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Content
 * @param {string} props.value - Tab value
 * @param {string} [props.className] - Additional CSS classes
 */
const TabsContentJS = ({ children, value, className = '', ...props }) => {
  const { value: selectedValue } = useContext(TabsContext);
  const isSelected = selectedValue === value;
  
  if (!isSelected) return null;
  
  return (
    <div
      role="tabpanel"
      data-state={isSelected ? 'active' : 'inactive'}
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export { TabsJS, TabsListJS, TabsTriggerJS, TabsContentJS };
