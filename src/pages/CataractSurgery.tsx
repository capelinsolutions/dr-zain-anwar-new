
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const CataractSurgery = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <Section background="white" spacing="xl">
          <div className="text-center space-y-8">
            <H1 className="text-[#1A1A1A]">
              Cataract Surgery in Houston & Cypress
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Advanced cataract surgery with the latest technology for crystal-clear vision restoration
            </BodyLarge>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
            Over 3,000 successful cataract surgeries            
            </BodyLarge>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* What Are Cataracts Section */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                What Are Cataracts?
              </H2>
              <Body className="text-black">
                Cataracts are a common age-related condition where the natural lens of your eye becomes cloudy, 
                causing blurred vision, glare, and difficulty seeing at night. This gradual clouding affects millions 
                of Americans over 60, but the good news is that cataracts are completely treatable with modern surgery.
              </Body>
              <Body className="text-black">
                Dr. Zane Anwar specializes in advanced cataract surgery techniques that not only remove the cloudy lens 
                but can also correct other vision problems like nearsightedness, farsightedness, and astigmatism.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Common Cataract Symptoms:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Blurry or cloudy vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Increased sensitivity to light and glare</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Difficulty seeing at night</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Colors appearing faded or yellowed</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Double vision in one eye</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Our Advanced Approach */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Our Advanced Cataract Surgery Approach
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <H3 className="text-[#1A1A1A] mb-4">
                  Latest Technology
                </H3>
                <Body className="text-black">
                  We use state-of-the-art phacoemulsification technology and premium intraocular lenses (IOLs) 
                  for the best possible outcomes.
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <H3 className="text-[#1A1A1A] mb-4">
                  Quick & Painless
                </H3>
                <Body className="text-black">
                  Most procedures take 10 minutes with minimal discomfort. You'll be amazed at how 
                  quick and easy the process is.
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <H3 className="text-[#1A1A1A] mb-4">
                  Outpatient Surgery
                </H3>
                <Body className="text-black">
                  Our outpatient procedure means you go home the same day with improved vision that 
                  continues to improve over the following days.
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* Types of IOLs */}
        <Section background="gray" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Premium Intraocular Lens Options
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                Choose from our selection of advanced IOLs to customize your vision correction beyond just cataract removal.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Multifocal IOLs
                </H3>
                <Body className="text-black mb-4">
                  Reduce dependence on glasses for both near and distance vision. Perfect for active lifestyles.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Clear vision at multiple distances</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Reduced need for reading glasses</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">-</span>
                    <Body className="text-black text-sm">Mild increase in halos at night</Body>
                  </li>                  
                  
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Toric IOLs
                </H3>
                <Body className="text-black mb-4">
                  Specifically designed to correct astigmatism while removing cataracts in one procedure.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Corrects astigmatism and cataracts</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Sharper, clearer distance vision</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Extended depth of focus IOLs
                </H3>
                <Body className="text-black mb-4">
                  Provide clear distance vision with good intermediate vision for computer work and daily activities.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Improved distance and intermediate vision</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">✓</span>
                    <Body className="text-black text-sm">Minimal risk of halo and glare</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">-</span>
                    <Body className="text-black text-sm">Need for correction with reading</Body>
                  </li>                  
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Recovery Section */}
        <Section background="white" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Fast, Comfortable Recovery
              </H2>
              <Body className="text-black">
                Most patients notice improved vision within 24 hours, with full recovery typically achieved 
                within 4-6 weeks. Our comprehensive post-operative care ensures your comfort and optimal healing.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="bg-[#0052CC] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <Body className="text-black font-bold">Day of Surgery</Body>
                    <Body className="text-black text-sm">Quick outpatient procedure, home the same day</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-[#0052CC] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <Body className="text-black font-bold">Next Day</Body>
                    <Body className="text-black text-sm">Follow-up appointment to check your progress</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-[#0052CC] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <Body className="text-black font-bold">1 month</Body>
                    <Body className="text-black text-sm">continued improvement with final check-up</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6">
                Why Choose Dr. Anwar?
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB703] font-bold">✓</span>
                  <Body className="text-black">Over 3,000 successful cataract surgeries</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB703] font-bold">✓</span>
                  <Body className="text-black">Board-certified ophthalmologist</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB703] font-bold">✓</span>
                  <Body className="text-black">Latest surgical technology and techniques</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB703] font-bold">✓</span>
                  <Body className="text-black">Bilingual care (English & Spanish)</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#FFB703] font-bold">✓</span>
                  <Body className="text-black">Two convenient Houston-area locations</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Ready to See Clearly Again?
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't let cataracts limit your life. Schedule your comprehensive eye examination today and 
              discover how cataract surgery can restore your crystal-clear vision.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Most insurance plans accepted • Two convenient locations • Bilingual staff
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default CataractSurgery;
