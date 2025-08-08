
import React from 'react';
import { Star } from 'lucide-react';
import { H3, Body } from './ui/typography';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  testimonial: string;
  rating: number;
}

const TestimonialCard = ({ avatar, name, testimonial, rating }: TestimonialCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-[#F8A401] text-[#F8A401]" />
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-[#F8A401] text-[#F8A401] opacity-50" />
      );
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-[#F8A401]" />
      );
    }
    
    return stars;
  };

  return (
    <article className="bg-white rounded-xl shadow-lg p-6 lg:p-8 h-full">
      <div className="flex items-start justify-between mb-6">
        <img
          src={avatar}
          alt={`${name} testimonial`}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
        />
        
        <div className="flex gap-1">
          {renderStars()}
        </div>
      </div>
      
      <div className="space-y-4">
        <H3 className="text-[#133240] text-left">
          {name}
        </H3>
        
        <Body className="text-[#133240] font-normal italic">
          {testimonial}
        </Body>
      </div>
    </article>
  );
};

export default TestimonialCard;
