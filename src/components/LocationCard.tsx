
import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { H3, Body } from './ui/typography';
import EnhancedButton from './ui/button-enhanced';

interface LocationCardProps {
  image: string;
  address: string;
  hours: string;
  phone: string;
  alt: string;
}

const LocationCard = ({ image, address, hours, phone, alt }: LocationCardProps) => {
  const formatPhoneForTel = (phoneNumber: string) => phoneNumber.replace(/[^\d]/g, '');

  return (
    <article 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 focus-within:shadow-xl"
      role="article"
      aria-label={`Location information for ${address}`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 lg:p-8 space-y-4">
        <address className="not-italic space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-[#0052CC] mt-1 flex-shrink-0" aria-hidden="true" />
            <H3 className="text-black">
              {address}
            </H3>
          </div>
        </address>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#0052CC] flex-shrink-0" aria-hidden="true" />
          <Body className="text-black font-bold uppercase">
            {hours}
          </Body>
        </div>
        
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-[#0052CC] flex-shrink-0" aria-hidden="true" />
          <a 
            href={`tel:${formatPhoneForTel(phone)}`}
            className="block text-black font-bold uppercase text-lg md:text-xl hover:text-[#0052CC] transition-colors focus:text-[#0052CC] focus:outline-none focus:underline"
            aria-label={`Call ${phone}`}
          >
            {phone}
          </a>
        </div>
        
        <div className="pt-4">
          <a 
            href="https://share.google/u4X0lnlAcigdh4p94"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <EnhancedButton 
              variant="secondary" 
              size="lg" 
              fullWidth
              aria-label={`Get directions to ${address}`}
            >
              <Navigation className="w-5 h-5 mr-2" aria-hidden="true" />
              Get Directions
            </EnhancedButton>
          </a>
        </div>
      </div>
    </article>
  );
};

export default LocationCard;
