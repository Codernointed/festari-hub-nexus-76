
import React from 'react';

/**
 * Card component that replaces the shadcn Card with a pure Tailwind CSS implementation
 */
const CardJS = ({ className = '', ...props }) => {
  const cardClasses = [
    "rounded-lg border bg-card text-card-foreground shadow-sm",
    className
  ].join(' ');
  
  return (
    <div className={cardClasses} {...props} />
  );
};

/**
 * Card header component
 */
const CardHeaderJS = ({ className = '', ...props }) => {
  const headerClasses = [
    "flex flex-col space-y-1.5 p-6",
    className
  ].join(' ');
  
  return (
    <div className={headerClasses} {...props} />
  );
};

/**
 * Card title component
 */
const CardTitleJS = ({ className = '', ...props }) => {
  const titleClasses = [
    "text-2xl font-semibold leading-none tracking-tight",
    className
  ].join(' ');
  
  return (
    <h3 className={titleClasses} {...props} />
  );
};

/**
 * Card description component
 */
const CardDescriptionJS = ({ className = '', ...props }) => {
  const descriptionClasses = [
    "text-sm text-muted-foreground",
    className
  ].join(' ');
  
  return (
    <p className={descriptionClasses} {...props} />
  );
};

/**
 * Card content component
 */
const CardContentJS = ({ className = '', ...props }) => {
  const contentClasses = [
    "p-6 pt-0",
    className
  ].join(' ');
  
  return (
    <div className={contentClasses} {...props} />
  );
};

/**
 * Card footer component
 */
const CardFooterJS = ({ className = '', ...props }) => {
  const footerClasses = [
    "flex items-center p-6 pt-0",
    className
  ].join(' ');
  
  return (
    <div className={footerClasses} {...props} />
  );
};

export {
  CardJS,
  CardHeaderJS,
  CardTitleJS,
  CardDescriptionJS,
  CardContentJS,
  CardFooterJS
};
