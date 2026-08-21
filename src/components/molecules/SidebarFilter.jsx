"use client";

import React, { useState } from 'react';
import Icon from '../atoms/Icon';

export default function SidebarFilter({ 
  selectedCategories = ['All Destinations'], 
  onCategoryChange,
  categories = ['All Destinations', 'Coastal', 'Historical', 'Island', 'Religious', 'Nature']
}) {
  const toggleCategory = (category) => {
    if (!onCategoryChange) return;
    if (category === 'All Destinations') {
      onCategoryChange(['All Destinations']);
      return;
    }
    
    let newSelection = [...selectedCategories].filter(c => c !== 'All Destinations');
    
    if (newSelection.includes(category)) {
      newSelection = newSelection.filter(c => c !== category);
    } else {
      newSelection.push(category);
    }
    
    if (newSelection.length === 0) {
      newSelection = ['All Destinations'];
    }
    
    onCategoryChange(newSelection);
  };

  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="flex items-center gap-2 mb-6 text-primary font-bold">
        <Icon name="tune" />
        <h2 className="text-lg">Filters</h2>
      </div>
      
      <div className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
        <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-4">Categories</h3>
        
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <label className="flex items-center gap-3 cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleCategory(category); }}>
                <div className={`w-4 h-4 rounded-[4px] border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(category) 
                    ? 'bg-primary border-primary' 
                    : 'border-outline-variant group-hover:border-primary'
                }`}>
                  {selectedCategories.includes(category) && (
                    <Icon name="check" className="text-[12px] text-white font-bold" />
                  )}
                </div>
                <span className={`text-sm ${selectedCategories.includes(category) ? 'text-primary font-medium' : 'text-on-surface'}`}>
                  {category}
                </span>
              </label>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 pt-4 border-t border-outline-variant/30 flex justify-between items-center">
          <button 
            className="text-xs font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider"
            onClick={() => onCategoryChange && onCategoryChange(['All Destinations'])}
          >
            Clear Filters
          </button>
          <Icon name="close" className="text-[14px] text-on-surface-variant" />
        </div>
      </div>
    </aside>
  );
}
