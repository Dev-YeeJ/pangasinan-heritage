import React from 'react';

export default function Typography({ variant, as, className = '', children }) {
  const Tag = as || {
    'display': 'h1',
    'h1': 'h1',
    'h2': 'h2',
    'h3': 'h3',
    'body-lg': 'p',
    'body-md': 'p',
    'label': 'span'
  }[variant] || 'p';

  const styles = {
    'display': 'font-headline-display text-headline-display md:font-headline-display md:text-[72px] tracking-tight text-balance leading-[1.1] font-extrabold',
    'h1': 'font-headline-display text-headline-display drop-shadow-sm leading-tight',
    'h2': 'font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg tracking-tight',
    'h3': 'font-headline-md text-[22px] font-bold leading-tight',
    'body-lg': 'font-body-lg text-[20px] text-balance leading-relaxed',
    'body-md': 'font-body-md text-body-md leading-relaxed',
    'label': 'font-label-sm text-xs tracking-wider uppercase'
  };

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  );
}
