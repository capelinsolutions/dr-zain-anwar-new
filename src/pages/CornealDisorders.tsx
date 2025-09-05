
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const CornealDisorders = () => {
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
              Corneal Disorders Treatment
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Expert care for corneal diseases, injuries, and vision problems affecting the eye's front surface
            </BodyLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="lg">
                Schedule Corneal Evaluation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* Understanding the Cornea */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Understanding Your Cornea
              </H2>
              <Body className="text-black">
                The cornea is the clear, dome-shaped front surface of your eye that plays a crucial role in focusing 
                light. When corneal problems occur, they can significantly impact your vision clarity, comfort, and 
                overall eye health.
              </Body>
              <Body className="text-black">
                Dr. Zane Anwar specializes in diagnosing and treating a wide range of corneal conditions, from 
                common infections to complex degenerative diseases, using the most advanced treatment options available.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Corneal Problems Can Cause:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Blurred or distorted vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Eye pain and discomfort</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Sensitivity to light</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Excessive tearing</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Feeling of something in the eye</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Redness and inflammation</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Common Conditions */}
        <Section background="white" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Corneal Conditions We Treat
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                From common infections to complex degenerative diseases, we provide comprehensive care 
                for all types of corneal disorders.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Keratoconus
                </H3>
                <Body className="text-black mb-4">
                  Progressive thinning and bulging of the cornea that causes irregular astigmatism and vision distortion.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Diagnosis of condition</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Specialty contact lens fitting</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Removal corneal cross-linking and Intacs</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Add Referral for corneal crosslinking and transplantation when indicated</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Corneal Infections
                </H3>
                <Body className="text-black mb-4">
                  Bacterial, viral, or fungal infections that can cause serious damage if not treated promptly.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Rapid diagnosis and treatment</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Targeted antibiotic therapy</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Antiviral and antifungal treatments</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Close monitoring and follow-up</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Corneal Dystrophies
                </H3>
                <Body className="text-black mb-4">
                  Inherited conditions causing corneal clouding and vision problems that may require surgical intervention.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Diagnosis and monitoring</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Medical management options</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Superficial keratectomy with amniotic membrane</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Referral for corneal transplantation when indicated</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Corneal Injuries
                </H3>
                <Body className="text-black mb-4">
                  Trauma to the cornea from scratches, chemical burns, or foreign objects requiring immediate attention.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Emergency evaluation and treatment</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Foreign body removal</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Chemical injury management</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Protective contact lenses</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Advanced Treatments */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Advanced diagnostics and treatments offered
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              We offer the latest treatment options to restore corneal health and improve vision, 
              from minimally invasive procedures to advanced surgical techniques.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">⚡</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Corneal Cross-Linking
                </H3>
                <Body className="text-black text-sm">
                  Revolutionary treatment to strengthen corneal tissue and halt keratoconus progression
                </Body>
              </div> */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🔬</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Superficial keratectomy
                </H3>
                <Body className="text-black text-sm">
                  Repair of irregular corneal surface
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">💎</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Specialty Contact Lenses
                </H3>
                <Body className="text-black text-sm">
                  Custom-fitted rigid gas permeable and scleral lenses for irregular corneas
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🎯</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Shingles/Herpes zoster
                </H3>
                <Body className="text-black text-sm">
                  Advanced management of viral corneal infections
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🔧</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Contact lens infections
                </H3>
                <Body className="text-black text-sm">
                  Advanced management of soft contact lens corneal infections
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🛡️</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Amniotic Membrane
                </H3>
                <Body className="text-black text-sm">
                  Biological bandage to promote healing and reduce inflammation
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* When to Seek Care */}
        <Section background="white" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6">
                When to Seek Immediate Care
              </H3>
              <Body className="text-black mb-4">
                Some corneal conditions require urgent attention. Contact us immediately if you experience:
              </Body>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Sudden severe eye pain</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Chemical splash in the eye</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Foreign object in the eye</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Sudden vision loss</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Eye injury or trauma</Body>
                </li>
              </ul>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="md" fullWidth>
                  Emergency: (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Comprehensive Corneal Care
              </H2>
              <Body className="text-black">
                Our approach to corneal care combines advanced diagnostic technology with personalized 
                treatment plans to restore your corneal health and optimize your vision.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Advanced Diagnostics</Body>
                    <Body className="text-black text-sm">Corneal topography, pachymetry, and OCT imaging for precise diagnosis</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Personalized Treatment</Body>
                    <Body className="text-black text-sm">Customized care plans based on your specific corneal condition</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Latest Technology</Body>
                    <Body className="text-black text-sm">State-of-the-art treatments and surgical techniques</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Ongoing Support</Body>
                    <Body className="text-black text-sm">Long-term management and follow-up care</Body>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Restore Your Corneal Health
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't let corneal problems affect your vision and quality of life. Our expert care can help 
              restore your corneal health and improve your sight.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="xl">
                Schedule Corneal Evaluation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Expert corneal care • Advanced treatments • Emergency services available
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default CornealDisorders;
