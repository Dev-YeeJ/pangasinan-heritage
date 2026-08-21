'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import Image from '../atoms/Image';

export default function HeritageCard({ 
  title, 
  description, 
  imageUrl, 
  rating, 
  category, 
  categoryStyle = 'primary',
  price,
  href = '#' 
}) {
  const categoryStyles = {
    'primary': 'text-primary-fixed bg-primary/80',
    'secondary': 'text-secondary-fixed bg-secondary/80',
    'tertiary': 'text-tertiary-fixed bg-tertiary/80',
  };

  return (
    <motion.article 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white/60 backdrop-blur-xl border border-white rounded-[32px] overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 flex flex-col relative"
    >
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
            <Image src={imageUrl} alt={title} />
        </div>
        
        <div className="absolute top-5 right-5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-sm flex items-center gap-1 z-20 text-white">
          <Icon name="star" className="text-[16px]" filled />
          <span className="font-label-sm text-xs font-bold tracking-wide">{rating}</span>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6 z-20">
          <span className={`${categoryStyles[categoryStyle] || categoryStyles.primary} backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase mb-2 inline-block`}>
            {category}
          </span>
          <Typography variant="h3" className="text-white drop-shadow-md">{title}</Typography>
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <Typography variant="body-md" className="text-on-surface-variant mb-8 flex-grow">
          {description}
        </Typography>
        
        <div className="flex justify-end items-center mt-auto pt-6 border-t border-outline-variant/20">
          <Link href={href} aria-label={`Discover more about ${title}`}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2.5 rounded-full font-label-sm text-sm hover:bg-primary-container transition-colors shadow-md hover:shadow-lg inline-flex items-center gap-2"
            >
              Learn More
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
