
import React from 'react';
import { H2, H3 } from './ui/typography';
import Section from './ui/section';
import EnhancedButton from './ui/button-enhanced';

const Benefits = () => {
  const benefits = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d6fc2b7c1133e2872c05c006e4042da7c800900?width=294",
      title: "Most Major Insurances Accepted",
      alt: "Insurance accepted icon"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7b9a0d1f236bdb2c274e84dfd8f341b46bf13067?width=276",
      title: "English & Spanish Speaking Staff",
      alt: "Bilingual staff icon"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c3f63b400a850da411c1533e851fc6b9e783fd3?width=328",
      title: "On-Site Procedures & Diagnostics",
      alt: "On-site procedures icon"
    }
  ];

  return (
    <Section background="white" spacing="xl">
      <div className="text-center space-y-12 lg:space-y-16">
        <H2 className="text-black">
          Key Benefits
        </H2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-6">
              <div className="flex justify-center">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
                />
              </div>
              <H3 className="text-black">
                {benefit.title}
              </H3>
            </div>
          ))}
        </div>
        
        <div className="pt-8">
          <a href="tel:(281) 890-1784">
            <EnhancedButton variant="secondary" size="lg">
              ✓ Contact Us to Check Insurance →
            </EnhancedButton>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
