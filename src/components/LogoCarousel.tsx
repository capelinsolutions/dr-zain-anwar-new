import React from 'react';
import Section from './ui/section';
import AnimatedElement from './ui/animated-element';

// Import all logo images
import izervayLogo from '../assets/izervay-logo.png';
import vabysmoLogo from '../assets/vabysmo-logo.jpg';
import eyleaHdLogo from '../assets/eylea-hd-logo.png';
import eyleaLogo from '../assets/eylea-logo.png';
import avastinLogo from '../assets/avastin-logo.png';

const LogoCarousel = () => {
  const logos = [
    { src: izervayLogo, alt: 'Izervay' },
    { src: vabysmoLogo, alt: 'Vabysmo' },
    { src: eyleaHdLogo, alt: 'Eylea HD' },
    { src: eyleaLogo, alt: 'Eylea' },
    { src: avastinLogo, alt: 'Avastin' },
  ];

  return (
    <Section spacing="lg" background="gray" className="overflow-hidden">
      <AnimatedElement animation="fade-in" className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Latest Retinal Treatments
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We work with leading pharmaceutical partners to provide the most advanced retinal treatments
        </p>
      </AnimatedElement>

      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          {/* First set of logos */}
          <div className="flex animate-marquee space-x-16 items-center justify-around min-w-full">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Second set of logos for seamless loop */}
          <div className="flex animate-marquee space-x-16 items-center justify-around min-w-full">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white rounded-lg shadow-sm p-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LogoCarousel;