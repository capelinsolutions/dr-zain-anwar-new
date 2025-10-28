
import React, { useState } from 'react';
import { Phone, Calendar, Shield, Building2, TreePine, Waves } from 'lucide-react';
import { H1, BodyLarge } from './ui/typography';
import Container from './ui/container';
import EnhancedButton from './ui/button-enhanced';
import AnimatedElement from './ui/animated-element';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section - Dr. Zane Anwar Eye Care Services"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/2b6336d6-7d8c-41f5-acdd-be3a5b8332c1.png"
          alt="Eye surgeon performing precision surgery with medical equipment"
          className="w-full h-full object-contain object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {/* Main Heading with Visual Emphasis */}
          <AnimatedElement animation="fade-in" delay={200}>
            <div className="relative">
              <H1 className="text-[#1A1A1A] leading-tight mb-4">
                Board-Certified Eye Surgeon in Houston &amp; Cypress
              </H1>
            </div>
          </AnimatedElement>
          
          {/* Key Services with Icons */}
          <AnimatedElement animation="fade-in" delay={400}>
            <div className="space-y-4">
              <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
                Thousands of successful eye surgeries and treatments.
              </BodyLarge>
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-[#1A1A1A]">
                <div className="flex items-center gap-2" role="group" aria-label="Cataract Surgery">
                  <Shield className="w-5 h-5 text-[#0052CC]" aria-hidden="true" />
                  <span className="font-semibold">Cataracts</span>
                </div>
                <div className="flex items-center gap-2" role="group" aria-label="Glaucoma Treatment">
                  <Shield className="w-5 h-5 text-[#0052CC]" aria-hidden="true" />
                  <span className="font-semibold">Glaucoma</span>
                </div>
                <div className="flex items-center gap-2" role="group" aria-label="Retina Treatment">
                  <Shield className="w-5 h-5 text-[#0052CC]" aria-hidden="true" />
                  <span className="font-semibold">Retina</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Clear Call-to-Action with Icons */}
          <AnimatedElement animation="slide-up" delay={600}>
            <div className="space-y-4 pt-4">
              <p className="text-xl font-semibold text-[#1A1A1A] mb-6" role="heading" aria-level={2}>
                Ready to Improve Your Vision?
              </p>
              <div className="flex flex-col gap-3 justify-center items-center">
                <a href="tel:+12818901784">
                  <EnhancedButton 
                    variant="accent" 
                    size="xl" 
                    className="min-w-[250px]"
                    aria-label="Call our office at (281) 890-1784"
                  >
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    Call: (281) 890-1784
                  </EnhancedButton>
                </a>
                <p className="text-[#0052CC] font-semibold text-lg">
                  Monthly Saturday appointments available!
                </p>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Contact Information with Icons */}
          <AnimatedElement animation="fade-in" delay={700}>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-[#1A1A1A] pt-4">
              <div className="flex items-center gap-2" role="group" aria-label="Houston Location">
                <Building2 className="w-4 h-4 text-[#0052CC]" aria-hidden="true" />
                <span className="text-sm font-medium">Houston</span>
              </div>
              <div className="flex items-center gap-2" role="group" aria-label="Cypress Location">
                <TreePine className="w-4 h-4 text-[#0052CC]" aria-hidden="true" />
                <span className="text-sm font-medium">Cypress</span>
              </div>
              <div className="flex items-center gap-2" role="group" aria-label="Towne Lake Location">
                <Waves className="w-4 h-4 text-[#0052CC]" aria-hidden="true" />
                <span className="text-sm font-medium">Towne Lake</span>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        {/* Certifications - Hidden on mobile for better layout */}
        <AnimatedElement animation="fade-in" delay={800} className="hidden xl:block absolute left-8 right-8">
          <div className="flex justify-between items-end opacity-90" role="group" aria-label="Medical Certifications">
            <Dialog>
              <DialogTrigger asChild>
                <button className="cursor-pointer">
                  <img
                    src="/lovable-uploads/bdc30479-0abc-49f7-bdb3-2a92d7401e98.png"
                    alt="Medical certification badge"
                    className="w-32 lg:w-40 h-auto transition-transform duration-300 hover:scale-110"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[280px] p-0">
                <iframe 
                  src="https://abop.org/web-badge/?ph=34605" 
                  width="230" 
                  height="310" 
                  frameBorder="0" 
                  title="American Board of Ophthalmology Certification Badge"
                  className="w-full"
                />
              </DialogContent>
            </Dialog>
            <a href="https://1960eyesurgeons.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/lovable-uploads/06b54eb8-4516-4219-879a-8e2d7fdad6ea.png"
                alt="1960 Eye Surgeons certification"
                className="w-32 lg:w-40 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
            <a href="https://www.healthgrades.com/physician/dr-zane-anwar-y9psbcz" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/be674d22f83d50dcfd2554106b4e14e09efeed72?width=668"
                alt="Medical association membership badge"
                className="w-32 lg:w-40 h-auto transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>
        </AnimatedElement>
      </Container>
    </section>
  );
};

export default Hero;
