
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { H2, Body } from './ui/typography';
import Section from './ui/section';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/75f055e705a9c71dacbb3d62e3642a819b3fb23c?width=121",
      name: "Maria C., Cypress",
      testimonial: '"Dr. Anwar changed my life after cataract surgery!"',
      rating: 5
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/01d82ce15f6aee68cce2b9d9c0c0278fc3bc5a08?width=120",
      name: "James R., Houston",
      testimonial: '"Finally found a glaucoma doctor who listens."',
      rating: 5
    },
    {
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/75d2d7569f7177f52e9b592218e52af4349e6d83?width=120",
      name: "Ana G., Jersey Village",
      testimonial: '"Thorough, caring, and bilingual – amazing team."',
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section background="gray" spacing="xl">
      <div className="space-y-8 lg:space-y-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          <div className="text-center lg:text-left">
            <H2 className="text-black mb-2">
              Our Customer Feedback
            </H2>
            <Body className="text-[#133240]">
              Don't take our word for it. Trust our customers
            </Body>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={prevTestimonial}
              className="flex items-center gap-2 px-4 py-2 border border-[#133240] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-[#9BD609]" />
              <span className="text-[#133240] font-semibold">Previous</span>
            </button>
            <button 
              onClick={nextTestimonial}
              className="flex items-center gap-2 px-4 py-2 border border-[#133240] rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-[#133240] font-semibold">Next</span>
              <ChevronRight className="w-5 h-5 text-[#9BD609]" />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === currentIndex 
                  ? 'opacity-100 transform scale-105' 
                  : 'opacity-70 transform scale-100'
              }`}
            >
              <TestimonialCard
                avatar={testimonial.avatar}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
