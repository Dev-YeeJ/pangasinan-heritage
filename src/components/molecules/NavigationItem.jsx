'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavigationItem({ href, children, isActive = false }) {
  return (
    <Link 
      href={href} 
      aria-current={isActive ? "page" : undefined}
      className={`relative px-1 py-2 transition-colors font-body-md text-sm tracking-wide ${isActive ? 'text-primary font-bold' : 'text-on-surface hover:text-primary/80'}`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="navigation-underline"
          className="absolute left-0 right-0 -bottom-1 h-0.5 bg-primary rounded-full"
          initial={false}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  );
}
