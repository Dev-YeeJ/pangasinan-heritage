'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from '../atoms/Image';
import Icon from '../atoms/Icon';

export default function ElevatedDestinationCard({ 
  title, 
  location, 
  description, 
  imageUrl, 
  tags = [], 
  href = '#' 
}) {
  const tagColors = {
    'Religious': 'bg-[#B8860B] text-white', // Golden
    'Coastal': 'bg-[#4682B4] text-white', // Steel Blue
    'Historical': 'bg-[#2E8B57] text-white', // Sea Green
    'Island': 'bg-[#20B2AA] text-white', // Light Sea Green
    'Nature': 'bg-[#8FBC8F] text-black', // Dark Sea Green
  };

  return (
    <motion.article 
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-outline-variant/20"
    >
      <div className="relative h-48 w-full p-4 pb-0">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image src={imageUrl} alt={title} className="object-cover w-full h-full transition-transform duration-700 ease-out hover:scale-105" />
          <div className="absolute top-3 left-3 flex gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={`${tagColors[tag] || 'bg-primary text-white'} px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 text-[11px] text-on-surface-variant font-medium tracking-wide uppercase mb-2">
          <Icon name="location_on" className="text-[14px] text-primary" />
          {location}
        </div>
        
        <h3 className="font-headline-sm text-lg font-bold text-primary mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-on-surface-variant text-xs leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <Link 
          href={href}
          className="text-[11px] font-bold text-primary hover:text-primary-fixed uppercase tracking-wider flex items-center gap-1 group w-max"
        >
          EXPLORE SITE <motion.span whileHover={{ x: 3 }} transition={{ type: 'spring' }}><Icon name="arrow_forward" className="text-[14px]" /></motion.span>
        </Link>
      </div>
    </motion.article>
  );
}
