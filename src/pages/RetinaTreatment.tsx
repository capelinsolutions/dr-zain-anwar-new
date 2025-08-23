
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const RetinaTreatment = () => {
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
              Advanced Retina Disease Treatment
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Specialized care for diabetic retinopathy, macular degeneration, and other retinal conditions
            </BodyLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="lg">
                Schedule Retina Consultation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* Understanding Retinal Diseases */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Understanding Retinal Diseases
              </H2>
              <Body className="text-black">
                The retina is the light-sensitive tissue at the back of your eye that captures images and sends 
                them to your brain. When retinal diseases occur, they can significantly impact your central vision, 
                color perception, and overall quality of life.
              </Body>
              <Body className="text-black">
                Dr. Zane Anwar specializes in diagnosing and treating a wide range of retinal conditions using 
                the most advanced medical and surgical techniques available today.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Warning Signs to Watch For:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Sudden vision loss or blurring</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Dark spots or floaters</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Flashing lights or lightning streaks</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Distorted or wavy vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Loss of peripheral vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Difficulty seeing in low light</Body>
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
                Retinal Conditions We Treat
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                Our comprehensive retinal care covers a wide range of conditions, from common age-related 
                issues to complex diabetic complications.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Diabetic Retinopathy
                </H3>
                <Body className="text-black mb-4">
                  The leading cause of blindness in adults, caused by damage to retinal blood vessels due to diabetes.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Comprehensive diabetic eye exams</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Anti-VEGF injections</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Laser photocoagulation</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Macular Degeneration
                </H3>
                <Body className="text-black mb-4">
                  Age-related deterioration of the macula, affecting central vision and fine detail recognition.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Early detection and monitoring</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Anti-VEGF therapy</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Nutritional counseling</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Dry macular degeneration preservation therapy/injections</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Retinal tear/hole/detachment
                </H3>
                <Body className="text-black mb-4">
                  Urgent eye condition where a retinal tear or hole forms and may lead to retinal detachment causing vision loss.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Emergency evaluation</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Laser treatment for retinal tears/holes</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Referral to surgical retinal specialist if indicated</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Retinal Vein Occlusion
                </H3>
                <Body className="text-black mb-4">
                  Blockage of retinal veins causing vision loss, swelling, and bleeding in the retina.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Immediate diagnosis and treatment</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Intravitreal injections</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Laser treatment</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Prevention of secondary complications/sequelae</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Treatment Technologies */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Advanced Treatment Technologies
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              We utilize cutting-edge technology and the latest treatment methods to provide the best 
              possible outcomes for our retinal patients.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">💉</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Anti-VEGF Injections
                </H3>
                <Body className="text-black text-sm">
                  Medications injected into the eye to stop abnormal blood vessel growth and reduce swelling
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🔬</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  OCT Imaging
                </H3>
                <Body className="text-black text-sm">
                  High-resolution cross-sectional imaging of retinal layers for precise diagnosis and monitoring
                </Body>
              </div>
              {/* <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">⚡</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Laser Therapy
                </H3>
                <Body className="text-black text-sm">
                  Precise laser treatment to seal leaking blood vessels and prevent further vision loss
                </Body>
              </div> */}
              {/* <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🔧</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Vitrectomy Surgery
                </H3>
                <Body className="text-black text-sm">
                  Advanced microsurgery to remove blood, scar tissue, and repair retinal damage
                </Body>
              </div> */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">📷</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Fluorescein Angiography
                </H3>
                <Body className="text-black text-sm">
                  Special photography to evaluate blood flow and identify areas of retinal damage
                </Body>
              </div>
              {/* <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">⭐</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Clinical Trials
                </H3>
                <Body className="text-black text-sm">
                  Access to cutting-edge treatments through participation in advanced clinical studies
                </Body>
              </div> */}
            </div>
          </div>
        </Section>

        {/* Treatment Process */}
        <Section background="white" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Your Treatment Journey
              </H2>
              <Body className="text-black">
                Our comprehensive approach ensures you receive personalized care from diagnosis through 
                treatment and long-term management of your retinal condition.
              </Body>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <Body className="text-black font-bold">Comprehensive Evaluation</Body>
                    <Body className="text-black text-sm">Detailed examination with advanced imaging to diagnose your condition</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <Body className="text-black font-bold">Personalized Treatment Plan</Body>
                    <Body className="text-black text-sm">Customized approach based on your specific condition and needs</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <Body className="text-black font-bold">Treatment Implementation</Body>
                    <Body className="text-black text-sm">Expert care using the most appropriate treatment methods</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <Body className="text-black font-bold">Ongoing Monitoring</Body>
                    <Body className="text-black text-sm">Regular follow-ups to track progress and adjust treatment as needed</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6">
                Emergency Retinal Care
              </H3>
              <Body className="text-black mb-4">
                Some retinal conditions require immediate attention. Contact us immediately if you experience:
              </Body>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Sudden vision loss</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Curtain or shadow in vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Sudden increase in floaters</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black text-sm">Flashing lights</Body>
                </li>
              </ul>
              <EnhancedButton variant="accent" size="md" fullWidth>
                Emergency Contact: (281) 890-1784
              </EnhancedButton>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Protect Your Precious Sight
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Early detection and treatment of retinal diseases can preserve your vision and quality of life. 
              Don't wait - schedule your comprehensive retinal evaluation today.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="xl">
                Schedule Retinal Consultation
              </EnhancedButton>
               <a href="tel:+12818901784">
                 <EnhancedButton variant="accent" size="xl">
                   Call (281) 890-1784
                 </EnhancedButton>
               </a>
            </div>
            <Body className="text-black text-sm">
              Specialized retinal care • Most insurance accepted • Emergency appointments available
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default RetinaTreatment;
