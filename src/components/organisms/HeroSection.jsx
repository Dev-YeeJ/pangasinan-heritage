'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SearchForm from '../molecules/SearchForm';
import Typography from '../atoms/Typography';
import Icon from '../atoms/Icon';
import Image from '../atoms/Image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col justify-center px-container-margin-mobile md:px-container-margin-desktop pt-32 pb-section-gap overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="w-full h-full origin-center relative bg-primary/20" 
        >
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcq4-UBsm7YKTaC-vsjfSBdPMNYnRQVxYBzJzd8J3VnhWJ7YJQdp4dP7UuhrpwFJABzuEgy2RkcGB8a2KSkRTpbFkak8OwrzZXfJ9sTucboFGTkugYELFIedDCVgpiEKr-VE9XMjY5Eo-6zmHyPOGzSo9-1Ivok3NTPdE1MyTlY1eOjW73AanEXgZ22_HO2W2ENvdG_xqxwzcplB0RlGf0flj5xEATumucWLhkCwRfVQTnf-eeILZV"
            alt="Pangasinan Heritage Hero"
            priority={true}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/20 to-surface/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col items-center text-center gap-8 mt-12 animate-fade-in-up">
        <span className="bg-white/20 text-white px-5 py-2 rounded-full font-label-sm text-label-sm inline-flex items-center gap-2 backdrop-blur-md border border-white/30 shadow-lg">
          <Icon name="location_on" className="text-[18px]" /> Heritage Digital Showcase
        </span>
        
        <div>
          <Typography variant="display" className="text-white">
            Discover the Heart of<br/>
            <span className="text-tertiary-fixed-dim">Pangasinan&apos;s Heritage</span>
          </Typography>
        </div>
        
        <div>
          <Typography variant="body-lg" className="text-white/90 max-w-2xl mx-auto">
            Explore breathtaking historical landmarks, rich cultural traditions, and the timeless legacy of Pangasinan.
          </Typography>
        </div>
        
        <div className="w-full max-w-4xl">
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
