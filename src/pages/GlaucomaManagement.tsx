
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const GlaucomaManagement = () => {
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
              Glaucoma Management & Treatment
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Comprehensive glaucoma care to protect your vision and prevent irreversible vision loss
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

        {/* Understanding Glaucoma */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Understanding Glaucoma: The Silent Thief of Sight
              </H2>
              <Body className="text-black">
                Glaucoma is often called the "silent thief of sight" because it typically has no early warning signs. 
                This group of eye diseases gradually damages the optic nerve, usually due to increased pressure in the eye, 
                leading to irreversible vision loss if left untreated.
              </Body>
              <Body className="text-black">
                Early detection and proper management are crucial. Dr. Zane Anwar uses advanced diagnostic technology 
                to detect glaucoma in its earliest stages when treatment is most effective at preserving your vision.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Types of Glaucoma We Treat:
              </H3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0052CC] pl-4">
                  <Body className="text-black font-bold">Open-Angle Glaucoma</Body>
                  <Body className="text-black text-sm">Most common form, develops slowly over time</Body>
                </div>
                <div className="border-l-4 border-[#FFB703] pl-4">
                  <Body className="text-black font-bold">Angle-Closure Glaucoma</Body>
                  <Body className="text-black text-sm">Can develop suddenly, requires immediate treatment</Body>
                </div>
                <div className="border-l-4 border-[#0052CC] pl-4">
                  <Body className="text-black font-bold">Normal-Tension Glaucoma</Body>
                  <Body className="text-black text-sm">Occurs despite normal eye pressure</Body>
                </div>
                <div className="border-l-4 border-[#FFB703] pl-4">
                  <Body className="text-black font-bold">Secondary Glaucoma</Body>
                  <Body className="text-black text-sm">Caused by other eye conditions or medications</Body>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Advanced Diagnostics */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Advanced Glaucoma Diagnostics
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              Early detection saves sight. Our comprehensive diagnostic approach uses the latest technology 
              to identify glaucoma before significant vision loss occurs.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#0052CC]">OCT</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  OCT Imaging
                </H3>
                <Body className="text-black text-sm">
                  Detailed cross-sectional images of the optic nerve and retinal nerve fiber layer
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#0052CC]">VF</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Visual Field Testing
                </H3>
                <Body className="text-black text-sm">
                  Maps your complete field of vision to detect early glaucomatous changes
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#0052CC]">IOP</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Pressure Monitoring
                </H3>
                <Body className="text-black text-sm">
                  Precise measurement of intraocular pressure throughout the day
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-[#0052CC]">3D</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Optic Nerve Analysis
                </H3>
                <Body className="text-black text-sm">
                  3D imaging and analysis of optic nerve head structure and health
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* Treatment Options */}
        <Section background="gray" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Comprehensive Treatment Options
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                Our personalized approach to glaucoma management combines the latest medications, 
                laser treatments, and surgical options to preserve your vision.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-6">
                  Medication Management
                </H3>
                <Body className="text-black mb-4">
                  Customized eye drop regimens and oral medications to lower intraocular pressure effectively.
                </Body>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Prostaglandin analogs</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Beta-blockers</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Alpha agonists</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Carbonic anhydrase inhibitors</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-6">
                  Laser Treatments
                </H3>
                <Body className="text-black mb-4">
                  Minimally invasive laser procedures to improve fluid drainage and reduce eye pressure.
                </Body>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Selective Laser Trabeculoplasty (SLT)</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Laser Peripheral Iridotomy</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Cyclophotocoagulation</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-6">
                  Surgical Options
                </H3>
                <Body className="text-black mb-4">
                  Minimally invasive glaucoma surgery
                </Body>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Latest surgical techniques employed at the time of cataract surgery to lower eye pressure</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Monitoring & Follow-up */}
        <Section background="white" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6">
                Risk Factors for Glaucoma
              </H3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Age over 60</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Family history</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">High eye pressure</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Thin corneas</Body>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Diabetes</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">High blood pressure</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Previous eye injury</Body>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0052CC] font-bold">•</span>
                    <Body className="text-black text-sm">Steroid use</Body>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Ongoing Monitoring & Care
              </H2>
              <Body className="text-black">
                Glaucoma management is a lifelong commitment. Regular monitoring is essential to ensure 
                treatment effectiveness and make adjustments as needed to preserve your vision.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Regular Check-ups</Body>
                    <Body className="text-black text-sm">Scheduled visits every 3-6 months to monitor pressure and vision</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Treatment Adjustments</Body>
                    <Body className="text-black text-sm">Modifications to medications or procedures as needed</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Patient Education</Body>
                    <Body className="text-black text-sm">Understanding your condition and treatment importance</Body>
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
              Protect Your Vision Today
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't wait until vision loss occurs. Early detection and treatment of glaucoma can preserve 
              your sight for years to come. Schedule your comprehensive glaucoma screening today.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Early detection saves sight • Most insurance accepted • Bilingual care available
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default GlaucomaManagement;
