import React from 'react';
import Typography from '../../components/atoms/Typography';
import Image from '../../components/atoms/Image';
import Icon from '../../components/atoms/Icon';

export default function ArchivePage() {
  const archiveItems = [
    {
      title: "Historical Map of Pangasinan",
      year: "1898",
      description: "An early cartographic representation of the province during the transition period.",
      imageUrl: "/images/map_pangasinan_1787144506188.png",
    },
    {
      title: "Pre-Colonial Artifacts",
      year: "14th Century",
      description: "Fragments of pottery and trade goods reflecting the extensive maritime trade.",
      imageUrl: "/images/history_precolonial_1787144166469.png",
    },
    {
      title: "Spanish Era Church Blueprint",
      year: "1720",
      description: "Architectural plans showing the thick defensive walls of early religious structures.",
      imageUrl: "/images/history_spanish_1787144185758.png",
    },
    {
      title: "Provincial Capitol Construction",
      year: "1918",
      description: "Archival photo during the construction of the Neoclassical capitol building.",
      imageUrl: "/images/history_american_1787144200484.png",
    }
  ];

  return (
    <main className="w-full px-container-margin-mobile md:px-container-margin-desktop py-12 max-w-7xl mx-auto">
      <div className="mb-16 text-center flex flex-col items-center">
        <Typography variant="h2" className="text-primary mb-4">Historical Archives</Typography>
        <Typography variant="body-lg" className="text-on-surface-variant max-w-2xl">
          Browse our curated collection of rare maps, photographs, and historical documents preserving the legacy of Pangasinan.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {archiveItems.map((item, i) => (
          <div key={i} className="group bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-64">
            <div className="relative w-full md:w-2/5 h-48 md:h-full bg-surface-container overflow-hidden">
              <Image 
                src={item.imageUrl} 
                alt={item.title} 
                className="group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100 sepia-[0.3]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
            </div>
            
            <div className="p-6 md:p-8 w-full md:w-3/5 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <Icon name="schedule" className="text-[16px]" />
                <span className="font-label-sm text-xs font-bold tracking-wider">{item.year}</span>
              </div>
              <Typography variant="h3" className="text-primary mb-3 text-xl">{item.title}</Typography>
              <Typography variant="body-md" className="text-on-surface-variant text-sm">
                {item.description}
              </Typography>
              
              <button className="mt-6 flex items-center gap-2 text-primary font-label-sm text-sm hover:text-primary-container transition-colors w-max group/btn">
                View Document
                <Icon name="arrow_forward" className="text-[16px] group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
