
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { H3, Body } from './ui/typography';
import EnhancedButton from './ui/button-enhanced';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const ServiceCard = ({ image, title, description, alt }: ServiceCardProps) => {
  return (
    <article 
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 lg:p-8 flex flex-col h-full group cursor-pointer transform hover:-translate-y-2 hover:scale-105 focus-within:shadow-2xl focus-within:-translate-y-2"
      role="article"
      aria-label={`${title} service information`}
      tabIndex={0}
    >
      <div className="flex-shrink-0 mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={alt}
          className="w-24 h-24 md:w-32 md:h-32 mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow space-y-4 text-center">
        <H3 className="text-black group-hover:text-[#0052CC] transition-all duration-300 transform group-hover:scale-105">
          {title}
        </H3>
        
        <Body className="text-black font-bold uppercase flex-grow transition-all duration-300 group-hover:text-gray-800">
          {description}
        </Body>
      </div>
      
      <div className="mt-6 pt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <EnhancedButton 
          variant="secondary" 
          size="md" 
          fullWidth
          aria-label={`Learn more about ${title}`}
        >
          <span className="flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </EnhancedButton>
      </div>
    </article>
  );
};

export default ServiceCard;
