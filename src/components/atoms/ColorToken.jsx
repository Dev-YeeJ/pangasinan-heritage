import React from 'react';

export default function ColorToken({ colorClass, name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-16 h-16 rounded-full shadow-md ${colorClass}`}></div>
      <span className="font-label-sm text-xs text-on-surface-variant uppercase">{name}</span>
    </div>
  );
}
