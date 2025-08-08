
import React from 'react';
import { H2 } from './ui/typography';
import Section from './ui/section';
import LocationCard from './LocationCard';

const Locations = () => {
  const locations = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/47d81b60604dbad2231092d2f050cc6dff40aae1?width=1536",
      address: "13333 Dotson Rd, Suite 200, Houston, TX",
      hours: "Mon–Fri: 9am–5pm",
      phone: "(281) 890-1784",
      alt: "Houston location exterior"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1adb9e3c9f6168b14f5ea1d729c3499a4f6d130d?width=1536",
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
