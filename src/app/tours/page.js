import React from 'react';
import Image from '../../components/atoms/Image';
import Icon from '../../components/atoms/Icon';

export default function ToursPage() {
  return (
    <main className="w-full px-container-margin-mobile md:px-container-margin-desktop py-12 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="font-headline-lg text-4xl md:text-5xl font-bold text-primary mb-4">Craft Your Pangasinan Journey</h1>
        <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed">
          From ancient churches to breathtaking coastlines, build an itinerary that bridges centuries of history with modern discovery.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[600px]">
        {/* Interactive Map Area */}
        <div className="flex-grow bg-surface-container-lowest rounded-3xl border border-outline-variant/30 overflow-hidden relative shadow-sm h-[500px] lg:h-auto">
          {/* Map Image (Background) */}
          <Image 
            src="/images/map_pangasinan_1787144506188.png" 
            alt="Map of Pangasinan" 
            className="w-full h-full object-cover"
          />

          {/* Dummy Map Pins */}
          <div className="absolute top-[30%] left-[40%] bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <Icon name="location_on" className="text-[18px]" />
          </div>
          <div className="absolute top-[50%] left-[60%] bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform">
            <Icon name="location_on" className="text-[18px]" />
          </div>
          <div className="absolute top-[20%] left-[70%] bg-white text-primary w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-primary cursor-pointer hover:scale-110 transition-transform">
            <Icon name="church" className="text-[18px]" />
          </div>

          {/* Explore Overlay */}
          <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-white max-w-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="font-headline-sm text-base font-bold text-primary mb-1">Explore Landmarks</h3>
              <p className="text-xs text-on-surface-variant">Select pins to add to your itinerary.</p>
            </div>
            <button className="bg-primary text-white font-label-sm text-xs px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-primary-container transition-colors flex items-center gap-2">
              <Icon name="map" className="text-[16px]" /> Open Full Map
            </button>
          </div>
        </div>

        {/* Itinerary Sidebar */}
        <aside className="w-full lg:w-[380px] shrink-0 bg-surface-container-lowest rounded-3xl border border-outline-variant/30 shadow-sm flex flex-col overflow-hidden">
          <div className="p-6 border-b border-outline-variant/20 flex items-center gap-2 text-primary">
            <Icon name="calendar_month" />
            <h2 className="font-headline-sm font-bold text-lg">Your Itinerary</h2>
          </div>
          
          <div className="flex-grow p-6 flex flex-col gap-6 overflow-y-auto">
            {/* Empty State Text */}
            <div className="text-center text-on-surface-variant flex flex-col items-center gap-3 py-6">
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary/40">
                <Icon name="location_off" className="text-[24px]" />
              </div>
              <p className="text-sm">Your journey is empty.<br/>Tap locations on the map to add them here.</p>
            </div>

            {/* Added Item */}
            <div className="bg-white rounded-xl border border-outline-variant/30 shadow-sm p-3 flex gap-4 items-center group cursor-pointer hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrsS4cab19LVdU1c8AB5ErDE_2yZbLA36POa2U2yUuFh-mNC3A8w6g7lU5JxlaLV5XuUt22FOLVLmlzi__U3ycUxbiNHOVk2HllRQZzixhh-i2xsODK-GUZlzoYeh8MwjVKHsX_jMUXVmtEpH9ONXiiwyeJKuvPA4ctSAqwA94sSF5XS8cvohhp86Fh1J7CTbSsEig2_f9lg1nF0q5FKxj3ayHSu8gOGZ6K3lOy8PLEUH-WxysNl8H" 
                  alt="Manaoag"
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-bold text-primary mb-1 leading-tight">Minor Basilica of Our Lady of Manaoag</h4>
                <div className="flex gap-2 text-[10px] text-on-surface-variant font-medium">
                  <span className="flex items-center gap-1"><Icon name="schedule" className="text-[12px]" /> 2 hours</span>
                  <span className="flex items-center gap-1"><Icon name="church" className="text-[12px]" /> Religious</span>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-outline-variant hover:bg-error/10 hover:text-error transition-colors shrink-0">
                <Icon name="close" className="text-[16px]" />
              </button>
            </div>
          </div>
          
          <div className="p-6 border-t border-outline-variant/20 bg-surface-container/30">
            <button className="w-full bg-primary text-white font-label-sm text-sm py-3 rounded-xl hover:bg-primary-container transition-colors shadow-sm">
              Save Itinerary
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}
