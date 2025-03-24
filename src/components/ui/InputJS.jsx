
import React from 'react';

/**
 * Input component that replaces the shadcn Input with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.placeholder] - Input placeholder
 * @param {string} [props.value] - Input value
 * @param {Function} [props.onChange] - Change handler
 * @param {boolean} [props.disabled] - Whether the input is disabled
 * @param {boolean} [props.required] - Whether the input is required
 * @param {string} [props.id] - Input id
 * @param {string} [props.name] - Input name
 */
const InputJS = React.forwardRef(({ 
  type = 'text',
  className = '',
  placeholder,
  value,
  onChange,
  disabled,
  required,
  id,
  name,
  ...props 
}, ref) => {
  const inputClasses = [
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base",
    "ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  ].join(' ');
  
  return (
    <input
      ref={ref}
      type={type}
      className={inputClasses}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      {...props}
    />
  );
});

InputJS.displayName = "InputJS";

export default InputJS;
