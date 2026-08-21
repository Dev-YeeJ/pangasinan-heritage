'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from '../atoms/Image';

export default function TimelineItem({ 
  era, 
  title, 
  description, 
  imageUrl, 
  isEven 
}) {
  return (
    <div className={`flex flex-col md:flex-row items-center w-full my-12 relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Center Line Marker (hidden on mobile, visible on md+) */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary z-10 border-4 border-surface"
      ></motion.div>
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full md:w-1/2 px-4 md:px-12 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center mb-8 md:mb-0`}
      >
        <div className="bg-surface-container-lowest px-3 py-1 rounded-full border border-outline-variant/30 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 inline-block">
          {era}
        </div>
        <h3 className="font-headline-md text-2xl font-bold text-primary mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-sm">
          {description}
        </p>
      </motion.div>

      {/* Image Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-1/2 px-4 md:px-12 flex justify-center"
      >
        <div className="relative w-full max-w-md aspect-[4/3] rounded-sm overflow-hidden shadow-xl border-8 border-white p-1 bg-surface-container-lowest">
          <Image src={imageUrl} alt={title} className="object-cover w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
}
