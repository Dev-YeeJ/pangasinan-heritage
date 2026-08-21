import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "rounded-full font-label-sm text-label-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-secondary text-white hover:bg-secondary-fixed-dim uppercase tracking-wider",
    outline: "text-primary border border-primary/20 hover:bg-primary/5 hover:shadow-sm",
    glass: "bg-white/20 backdrop-blur-md border border-white/40 shadow-sm text-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
