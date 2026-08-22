import React from 'react';
import NextImage from 'next/image';

export default function Image({ src, alt, className = '', fill = true, ...props }) {
  // Ensure basePath is prepended for local images in static export
  const basePath = '/pangasinan-heritage';
  const isExternal = typeof src === 'string' && src.startsWith('http');
  const imageSrc = (typeof src === 'string' && src.startsWith('/') && !src.startsWith(basePath)) 
    ? `${basePath}${src}` 
    : src;

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      className={`object-cover ${className}`}
      fill={fill}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      {...props}
    />
  );
}
