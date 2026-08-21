"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '../atoms/Icon';

export default function SearchForm() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('All Experiences');

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (experience !== 'All Experiences') params.set('experience', experience);
    
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mt-12 bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white border-opacity-50">
      <div className="flex gap-4 mb-6 border-b border-outline-variant/30 pb-4 overflow-x-auto hide-scrollbar">
        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-label-sm text-label-sm shadow-md whitespace-nowrap">
          <Icon name="explore" className="text-[20px]" /> Destinations
        </button>
        <button className="flex items-center gap-2 px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
          <Icon name="history" className="text-[20px]" /> History
        </button>
        <button className="flex items-center gap-2 px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-sm text-label-sm transition-colors whitespace-nowrap">
          <Icon name="festival" className="text-[20px]" /> Culture
        </button>
      </div>
      
      <form onSubmit={handleSearch} aria-label="Site Search" role="search" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col text-left">
          <label htmlFor="search-location" className="font-label-sm text-xs text-on-surface-variant mb-1 ml-4">Location</label>
          <div className="relative">
            <Icon name="location_on" className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input 
              id="search-location" 
              type="text" 
              placeholder="Where to?" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/60" 
            />
          </div>
        </div>
        
        <div className="flex flex-col text-left">
          <label htmlFor="search-type" className="font-label-sm text-xs text-on-surface-variant mb-1 ml-4">Experience</label>
          <div className="relative">
            <Icon name="category" className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <select 
              id="search-type" 
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest border border-outline-variant/40 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface appearance-none"
            >
              <option>All Experiences</option>
              <option>Coastal & Beaches</option>
              <option>Historical Sites</option>
              <option>Nature & Parks</option>
            </select>
            <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" />
          </div>
        </div>
        
        <div className="flex items-end">
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-label-sm text-label-sm hover:bg-primary-container hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 h-[46px]">
            <Icon name="search" /> Explore
          </button>
        </div>
      </form>
    </div>
  );
}
