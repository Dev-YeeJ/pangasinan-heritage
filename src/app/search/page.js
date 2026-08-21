"use client";

import React, { Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { destinationsData } from '../../data/destinations';
import ElevatedDestinationCard from '../../components/molecules/ElevatedDestinationCard';

function SearchResults() {
  const searchParams = useSearchParams();
  const locationQuery = searchParams.get('location') || '';
  const experienceQuery = searchParams.get('experience') || 'All Experiences';
  
  const mapExperienceToTag = (exp) => {
    switch(exp) {
      case 'Coastal & Beaches': return 'Coastal';
      case 'Historical Sites': return 'Historical';
      case 'Nature & Parks': return 'Nature';
      default: return null;
    }
  };

  const filteredResults = useMemo(() => {
    return destinationsData.filter(dest => {
      // Location match
      const searchStr = locationQuery.toLowerCase();
      const matchesLocation = locationQuery === '' || 
        dest.title.toLowerCase().includes(searchStr) || 
        dest.location.toLowerCase().includes(searchStr);

      // Experience match
      const targetTag = mapExperienceToTag(experienceQuery);
      const matchesExperience = experienceQuery === 'All Experiences' || 
        (targetTag && dest.tags && dest.tags.includes(targetTag));

      return matchesLocation && matchesExperience;
    });
  }, [locationQuery, experienceQuery]);

  return (
    <>
      <div className="text-center w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-headline-lg font-bold text-primary mb-4">Search Results</h1>
        <div className="text-on-surface-variant text-base font-body-md bg-white/60 p-4 px-8 rounded-full shadow-sm border border-outline-variant/20 inline-flex gap-6 mt-2">
          <span><strong>Location:</strong> {locationQuery || 'Anywhere'}</span>
          <span><strong>Experience:</strong> {experienceQuery}</span>
        </div>
      </div>
      
      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto text-left">
          {filteredResults.map((dest, i) => (
            <ElevatedDestinationCard key={i} {...dest} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-on-surface-variant py-20">
          <p className="text-xl">No destinations found matching your criteria.</p>
          <p className="mt-2">Try adjusting your search filters.</p>
        </div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <main className="pt-32 pb-20 px-4 md:px-8 max-w-[1440px] mx-auto min-h-[60vh] flex flex-col items-center">
      <Suspense fallback={<div className="pt-20">Loading search results...</div>}>
        <SearchResults />
      </Suspense>
    </main>
  );
}
