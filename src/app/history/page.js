import React from 'react';
import TimelineItem from '../../components/molecules/TimelineItem';

export default function HistoryPage() {
  const timelineData = [
    {
      era: "Pre-Colonial",
      title: "Wangdom of Pangasinan",
      description: "Before Spanish arrival, Pangasinan was a thriving maritime trading hub. The legendary Princess Urduja is often associated with this golden age, characterized by extensive commerce with China and Japan.",
      imageUrl: "/images/history_precolonial_1787144166469.png"
    },
    {
      era: "1571 - 1898",
      title: "Provincial Foundation",
      description: "Officially established as a province in 1580. This era saw the construction of massive stone churches, such as the Manaoag Shrine, serving both as spiritual centers and fortresses against coastal raids.",
      imageUrl: "/images/history_spanish_1787144185758.png"
    },
    {
      era: "1901 - 1946",
      title: "Architectural Renaissance",
      description: "The early 20th century brought significant civic development. The iconic Pangasinan Provincial Capitol building in Lingayen, a masterpiece of Neoclassical architecture, was completed during this period.",
      imageUrl: "/images/history_american_1787144200484.png"
    },
    {
      era: "1946 - Present",
      title: "A Cultural Resurgence",
      description: "Today, Pangasinan balances rapid modernization with a deep commitment to preserving its heritage. The Hundred Islands National Park remains a testament to its enduring natural beauty and ecological significance.",
      imageUrl: "/images/history_modern_1787144300450.png"
    }
  ];

  return (
    <main className="w-full px-container-margin-mobile md:px-container-margin-desktop py-12 max-w-7xl mx-auto">
      <div className="mb-20 text-center flex flex-col items-center">
        <h1 className="font-headline-lg text-4xl md:text-5xl font-bold text-primary mb-4">Chronicles of the Gulf</h1>
        <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
          Journey through the epochs of Pangasinan. From early trading ports along the Lingayen Gulf to a cornerstone of Philippine independence, explore the monumental milestones that forged a province.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* The continuous vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20 -translate-x-1/2"></div>
        
        <div className="flex flex-col gap-8 md:gap-0">
          {timelineData.map((item, i) => (
            <TimelineItem 
              key={i}
              era={item.era}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              isEven={i % 2 !== 0} // For alternating layout
            />
          ))}
        </div>
      </div>
    </main>
  );
}
