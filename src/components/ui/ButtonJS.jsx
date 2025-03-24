
import React from 'react';

/**
 * Button component that replaces the shadcn Button with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {string} [props.variant='default'] - Button style variant (default, destructive, outline, secondary, ghost, link, accent, highlight)
 * @param {string} [props.size='default'] - Button size (default, sm, lg, icon)
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type='button'] - Button type attribute
 * @param {Function} [props.onClick] - Click handler
 * @param {React.ReactNode} props.children - Button content
 */
const ButtonJS = ({ 
  variant = 'default', 
  size = 'default', 
  disabled = false,
  className = '',
  type = 'button',
  onClick,
  children,
  ...props 
}) => {
  // Base classes for all buttons
  const baseClasses = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  // Variant classes
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    accent: "bg-festari-accent text-white hover:bg-festari-accent/90 shadow-md",
    highlight: "bg-orange-500 text-white hover:bg-orange-600 shadow-md font-semibold",
  };
  
  // Size classes
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };
  
  // Combine all classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant] || variantClasses.default,
    sizeClasses[size] || sizeClasses.default,
    className
  ].join(' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonJS;
