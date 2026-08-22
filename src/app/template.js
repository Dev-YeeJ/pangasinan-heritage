'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
  return (
    <div className="animate-fade-in-up">
      {children}
    </div>
  );
}
