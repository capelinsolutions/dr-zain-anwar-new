
import React from 'react';
import { H2 } from './ui/typography';
import Section from './ui/section';
import LocationCard from './LocationCard';

const Locations = () => {
  const locations = [
    {
      image: "/lovable-uploads/f5e53adb-4286-4c01-af59-42471c85446e.png",
      address: "13333 Dotson Rd, Suite 200, Houston, TX",
      hours: "Mon–Fri: 9am–5pm",
      phone: "(281) 890-1784",
      alt: "Houston location exterior"
    },
    {
      image: "/lovable-uploads/afe0421d-1349-4076-892a-64240165835a.png",
      address: "9645-A Barker Cypress Rd, Cypress, TX",
      hours: "Mon–Fri: 9am–5pm",
      phone: "(832) 678-4560",
      alt: "Cypress location exterior"
    }
  ];

  return (
    <Section id="locations" background="white" spacing="xl">
      <div className="space-y-12 lg:space-y-16">
        <H2 className="text-black text-center">
          Two Locations Serving Greater Houston
        </H2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              image={location.image}
              address={location.address}
              hours={location.hours}
              phone={location.phone}
              alt={location.alt}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Locations;
