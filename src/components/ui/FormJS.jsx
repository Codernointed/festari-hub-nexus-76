
import React, { createContext, useContext, useId } from 'react';

// Form contexts
const FormContext = createContext({});
const FormItemContext = createContext({});
const FormFieldContext = createContext({});

/**
 * Form component that replaces the shadcn Form with a pure Tailwind CSS implementation
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Form content
 * @param {Object} props.formMethods - React Hook Form methods
 * @param {Function} props.onSubmit - Submit handler
 * @param {string} [props.className] - Additional CSS classes
 */
const FormJS = ({ 
  children, 
  formMethods, 
  onSubmit,
  className = '',
  ...props 
}) => {
  return (
    <FormContext.Provider value={{ formMethods }}>
      <form
        className={className}
        onSubmit={formMethods?.handleSubmit(onSubmit)}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

/**
 * Form Field component for React Hook Form
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - Field name
 * @param {Function} props.render - Render function
 */
const FormFieldJS = ({ name, render }) => {
  const { formMethods } = useContext(FormContext);
  
  if (!formMethods) {
    console.warn('FormField must be used within a Form component with formMethods');
    return null;
  }
  
  return (
    <FormFieldContext.Provider value={{ name }}>
      {render({
        field: formMethods.register(name),
        fieldState: formMethods.formState.errors[name] 
          ? { error: formMethods.formState.errors[name] } 
          : {}
      })}
    </FormFieldContext.Provider>
  );
};

/**
 * Form Item component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Item content
 * @param {string} [props.className] - Additional CSS classes
 */
const FormItemJS = ({ children, className = '', ...props }) => {
  const id = useId();
  
  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={`space-y-2 ${className}`} {...props}>
        {children}
      </div>
    </FormItemContext.Provider>
  );
};

/**
 * Form Label component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Label content
 * @param {string} [props.className] - Additional CSS classes
 */
const FormLabelJS = ({ children, className = '', ...props }) => {
  const { id } = useContext(FormItemContext);
  const { name } = useContext(FormFieldContext);
  const { formMethods } = useContext(FormContext);
  
  const error = name && formMethods?.formState.errors[name];
  
  return (
    <label
      htmlFor={id}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
        error ? 'text-destructive' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

/**
 * Form Control component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Control content
 */
const FormControlJS = ({ children }) => {
  const { id } = useContext(FormItemContext);
  const { name } = useContext(FormFieldContext);
  const { formMethods } = useContext(FormContext);
  
  const error = name && formMethods?.formState.errors[name];
  
  // Clone the child element and add the necessary props
  return React.cloneElement(React.Children.only(children), {
    id,
    name,
    'aria-invalid': !!error,
    'aria-describedby': error ? `${id}-error` : undefined
  });
};

/**
 * Form Description component
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Description content
 * @param {string} [props.className] - Additional CSS classes
 */
const FormDescriptionJS = ({ children, className = '', ...props }) => {
  const { id } = useContext(FormItemContext);
  
  return (
    <p
      id={`${id}-description`}
      className={`text-sm text-muted-foreground ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

/**
 * Form Message component for displaying error messages
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Message content
 * @param {string} [props.className] - Additional CSS classes
 */
const FormMessageJS = ({ children, className = '', ...props }) => {
  const { id } = useContext(FormItemContext);
  const { name } = useContext(FormFieldContext);
  const { formMethods } = useContext(FormContext);
  
  const error = name && formMethods?.formState.errors[name];
  const body = error ? error.message : children;
  
  if (!body) {
    return null;
  }
  
  return (
    <p
      id={`${id}-error`}
      className={`text-sm font-medium text-destructive ${className}`}
      {...props}
    >
      {body}
    </p>
  );
};

export {
  FormJS,
  FormFieldJS,
  FormItemJS,
  FormLabelJS,
  FormControlJS,
  FormDescriptionJS,
  FormMessageJS
};
