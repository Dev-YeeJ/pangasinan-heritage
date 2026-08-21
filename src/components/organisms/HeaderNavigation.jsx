'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import NavigationItem from '../molecules/NavigationItem';

export default function HeaderNavigation() {
  const pathname = usePathname();

  return (
    <header className="w-full px-container-margin-mobile md:px-container-margin-desktop py-6 flex justify-between items-center max-w-7xl mx-auto bg-surface">
      <Link href="/" className="font-headline-md text-lg font-bold tracking-tight text-primary">
        Heritage Pangasinan
      </Link>
      
      <nav aria-label="Main Navigation" className="hidden md:block">
        <ul className="flex items-center gap-6">
          <li><NavigationItem href="/destinations" isActive={pathname?.startsWith('/destinations')}>Destinations</NavigationItem></li>
          <li><NavigationItem href="/history" isActive={pathname === '/history'}>History</NavigationItem></li>
          <li><NavigationItem href="/culture" isActive={pathname === '/culture'}>Culture</NavigationItem></li>
          <li><NavigationItem href="/archive" isActive={pathname === '/archive'}>Archive</NavigationItem></li>
        </ul>
      </nav>
      
      <div className="hidden md:flex items-center gap-6">
        <Link href="/tours" aria-label="Plan Visit">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-label-sm text-xs px-6 py-2.5 rounded-full hover:bg-primary-container transition-colors shadow-sm"
          >
            Plan Visit
          </motion.div>
        </Link>
      </div>
    </header>
  );
}
