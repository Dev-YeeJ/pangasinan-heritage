"use client";

import React, { useState, useMemo } from 'react';
import SidebarFilter from '../../components/molecules/SidebarFilter';
import ElevatedDestinationCard from '../../components/molecules/ElevatedDestinationCard';
import { destinationsData, allCategories } from '../../data/destinations';

export default function DestinationsPage() {
  const [selectedCategories, setSelectedCategories] = useState(['All Destinations']);

  const filteredDestinations = useMemo(() => {
    if (selectedCategories.includes('All Destinations')) {
      return destinationsData;
    }
    return destinationsData.filter(dest => 
      dest.tags && dest.tags.some(tag => selectedCategories.includes(tag))
    );
  }, [selectedCategories]);

  return (
    <main className="w-full px-container-margin-mobile md:px-container-margin-desktop py-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="font-headline-lg text-4xl md:text-5xl font-bold text-primary mb-4">Discover the Heritage</h1>
        <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
          Explore the enduring landmarks and breathtaking coastal expanses of Pangasinan. From sacred spaces to historical battlegrounds, navigate history through a modern lens.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <SidebarFilter 
          selectedCategories={selectedCategories} 
          onCategoryChange={setSelectedCategories} 
          categories={['All Destinations', ...allCategories]}
        />
        
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {filteredDestinations.length > 0 ? (
            filteredDestinations.map((dest, i) => (
              <ElevatedDestinationCard key={i} {...dest} />
            ))
          ) : (
            <p className="text-on-surface-variant">No destinations found for the selected categories.</p>
          )}
        </div>
      </div>
    </main>
  );
}
