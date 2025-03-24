
import React from 'react';
import { Check } from 'lucide-react';

/**
 * Checkbox component that replaces the shadcn Checkbox with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.checked] - Whether the checkbox is checked
 * @param {Function} [props.onChange] - Change handler
 * @param {boolean} [props.disabled] - Whether the checkbox is disabled
 * @param {string} [props.className] - Additional CSS classes for the container
 * @param {string} [props.id] - Checkbox id
 * @param {string} [props.name] - Checkbox name
 * @param {string} [props.label] - Checkbox label
 * @param {string} [props.labelClass] - Additional CSS classes for the label
 */
const CheckboxJS = React.forwardRef(({ 
  checked,
  onChange,
  disabled,
  className = '',
  id,
  name,
  label,
  labelClass = '',
  ...props 
}, ref) => {
  const checkboxContainerClasses = [
    "inline-flex items-center",
    className
  ].join(' ');

  const checkboxClasses = [
    "h-4 w-4 shrink-0 rounded-sm border border-primary",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    checked ? "bg-primary text-primary-foreground" : "bg-background"
  ].join(' ');

  const labelClasses = [
    "ml-2 text-sm font-medium",
    disabled ? "text-muted-foreground" : "text-foreground",
    labelClass
  ].join(' ');

  return (
    <div className={checkboxContainerClasses}>
      <div className="relative flex items-center">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="absolute h-4 w-4 opacity-0"
          {...props}
        />
        <div className={checkboxClasses}>
          {checked && (
            <Check className="h-3 w-3 text-current" />
          )}
        </div>
      </div>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
    </div>
  );
});

CheckboxJS.displayName = "CheckboxJS";

export default CheckboxJS;
