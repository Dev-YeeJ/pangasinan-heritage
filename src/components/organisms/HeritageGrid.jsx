'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import HeritageCard from '../molecules/HeritageCard';
import { destinationsData } from '../../data/destinations';

export default function HeritageGrid() {
  // Show top 3 popular destinations
  const popularDestinations = destinationsData.slice(0, 3);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="px-container-margin-mobile md:px-container-margin-desktop py-section-gap max-w-[1440px] mx-auto bg-surface relative z-20">
      <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <Typography variant="h2" className="text-primary mb-4">Popular Destinations</Typography>
          <Typography variant="body-lg" className="text-on-surface-variant">Journey through architectural permanence and natural wonders.</Typography>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          aria-label="View all destinations" 
          className="flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors group px-6 py-3 border border-primary/20 rounded-full hover:bg-primary/5 hover:shadow-sm"
        >
          View Interactive Map
          <Icon name="arrow_forward" className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </header>
      
      <motion.div 
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {popularDestinations.map((dest, i) => (
          <motion.div key={i} variants={cardVariants}>
            <HeritageCard {...dest} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
