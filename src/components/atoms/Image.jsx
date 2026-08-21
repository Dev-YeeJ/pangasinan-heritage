import React from 'react';
import NextImage from 'next/image';

export default function Image({ src, alt, className = '', fill = true, ...props }) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      fill={fill}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  );
}
