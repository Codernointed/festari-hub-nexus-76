
import React from 'react';

/**
 * Textarea component that replaces the shadcn Textarea with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.placeholder] - Textarea placeholder
 * @param {string} [props.value] - Textarea value
 * @param {Function} [props.onChange] - Change handler
 * @param {boolean} [props.disabled] - Whether the textarea is disabled
 * @param {boolean} [props.required] - Whether the textarea is required
 * @param {string} [props.id] - Textarea id
 * @param {string} [props.name] - Textarea name
 * @param {number} [props.rows] - Number of rows
 */
const TextareaJS = React.forwardRef(({ 
  className = '',
  placeholder,
  value,
  onChange,
  disabled,
  required,
  id,
  name,
  rows = 4,
  ...props 
}, ref) => {
  const textareaClasses = [
    "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base",
    "ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
    className
  ].join(' ');
  
  return (
    <textarea
      ref={ref}
      className={textareaClasses}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={required}
      id={id}
      name={name}
      rows={rows}
      {...props}
    />
  );
});

TextareaJS.displayName = "TextareaJS";

export default TextareaJS;
