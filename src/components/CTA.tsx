
import React from 'react';
import { H2 } from './ui/typography';
import Container from './ui/container';
import EnhancedButton from './ui/button-enhanced';
import AnimatedElement from './ui/animated-element';

const CTA = () => {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b123e6bbaa6e716a97d671750221377eec43733?width=3840"
          alt="Call to action background"
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimatedElement animation="fade-in">
            <H2 className="text-black">
              Ready for clearer vision and expert eye care?
            </H2>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <div className="flex justify-center">
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl" className="min-w-[200px]">
                  Call Us Now
                </EnhancedButton>
              </a>
            </div>
          </AnimatedElement>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
