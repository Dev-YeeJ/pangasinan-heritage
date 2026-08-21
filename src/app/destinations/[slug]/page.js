import React from 'react';
import { destinationsData } from '../../../data/destinations';

export function generateStaticParams() {
  return destinationsData.map((dest) => ({
    slug: dest.href.split('/').pop(),
  }));
}

export default function DestinationDetailPage({ params }) {
  // Access the dynamic slug using React.use() if needed, but since it's a simple placeholder we'll just show it.
  const { slug } = params;
  
  return (
    <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-headline-md font-bold text-primary mb-4 capitalize">
        {slug ? slug.replace(/-/g, ' ') : 'Destination'}
      </h1>
      <p className="text-on-surface-variant text-lg font-body-md">Detailed information for this destination is coming soon.</p>
    </main>
  );
}
