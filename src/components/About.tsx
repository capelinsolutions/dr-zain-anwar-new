import React from 'react';
import { H2, H3, Body } from './ui/typography';
import Section from './ui/section';
import EnhancedButton from './ui/button-enhanced';
import AnimatedElement from './ui/animated-element';
import { Link } from 'react-router-dom';
const About = () => {
  return <Section id="about" background="gray" spacing="xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <AnimatedElement animation="fade-in-left">
          <div className="space-y-6 lg:space-y-8">
            <H2 className="text-[#1A1A1A]">
              Meet Dr. Zane Anwar, MD – Houston's Trusted Eye Surgeon
            </H2>
            
            <H3 className="text-[#1A1A1A]">
              Bio Highlight
            </H3>
            
            <Body className="text-black">
              - American Board of Ophthalmology certified<br />
              - Fellowship trained<br />
              - 6,000+ successful surgeries<br />
              - Diverse scope of eye conditions treated<br />
              - Fluent in Spanish and English
            </Body>
            
            <Link to="/doctor-profile">
              <EnhancedButton variant="secondary" size="lg" className="mt-8">
                Learn More About Dr. Anwar →
              </EnhancedButton>
            </Link>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="fade-in-right">
          <div className="relative group">
            <img src="https://tacreatives.sirv.com/Images/image%20(11).png" alt="Dr. Zane Anwar" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </AnimatedElement>
      </div>
    </Section>;
};
export default About;