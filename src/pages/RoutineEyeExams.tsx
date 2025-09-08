
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const RoutineEyeExams = () => {
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
              Comprehensive Routine Eye Exams
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Preventive eye care to detect problems early and maintain optimal vision throughout your life
            </BodyLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tajjam.com/services/68bd668c6ae4830eb9cccae7" target="_blank" rel="noopener noreferrer">
                <EnhancedButton variant="primary" size="lg">
                  Schedule Your Eye Exam
                </EnhancedButton>
              </a>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* Why Eye Exams Matter */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Why Regular Eye Exams Are Essential
              </H2>
              <Body className="text-black">
                Many eye diseases have no early symptoms, making regular eye exams crucial for early detection 
                and treatment. A comprehensive eye exam can reveal not only eye problems but also signs of 
                systemic health conditions like diabetes and hypertension.
              </Body>
              <Body className="text-black">
                Dr. Zane Anwar recommends regular eye exams as part of your overall health maintenance, 
                even if you think your vision is fine. Early detection can prevent vision loss and 
                preserve your sight for years to come.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Conditions We Can Detect Early:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Glaucoma (before vision loss)</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Diabetic retinopathy</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Macular degeneration</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Cataracts</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Retinal detachment risk</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">High blood pressure</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Comprehensive Exam Process */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              What to Expect During Your Comprehensive Eye Exam
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              Our thorough examination process uses advanced technology and proven techniques to 
              assess every aspect of your eye health and vision.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">1</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Medical History
                </H3>
                <Body className="text-black text-sm">
                  Review of your health history, medications, and any vision concerns you may have
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">2</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Visual Acuity Test
                </H3>
                <Body className="text-black text-sm">
                  Measurement of how clearly you see at various distances using the eye chart
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">3</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Refraction Assessment
                </H3>
                <Body className="text-black text-sm">
                  Determination of your exact prescription for glasses or contact lenses
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">4</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Eye Pressure Check
                </H3>
                <Body className="text-black text-sm">
                  Measurement of intraocular pressure to screen for glaucoma
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">5</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Dilated Examination
                </H3>
                <Body className="text-black text-sm">
                  Detailed examination of the retina, optic nerve, and blood vessels
                </Body>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">6</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Results & Recommendations
                </H3>
                <Body className="text-black text-sm">
                  Discussion of findings and personalized recommendations for your eye health
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* Advanced Technology */}
        <Section background="gray" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Advanced Diagnostic Technology
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                We use cutting-edge diagnostic equipment to provide the most comprehensive 
                and accurate assessment of your eye health.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Optical Coherence Tomography (OCT)
                </H3>
                <Body className="text-black mb-4">
                  High-resolution imaging that provides detailed cross-sectional views of your retina, 
                  allowing us to detect early signs of disease.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Early glaucoma detection</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Macular degeneration monitoring</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Diabetic retinopathy assessment</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Digital Retinal Photography
                </H3>
                <Body className="text-black mb-4">
                  High-definition images of your retina that allow for detailed examination and 
                  comparison over time to track changes.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Permanent record of retinal health</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Year-to-year comparison</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Enhanced patient education</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Visual Field Testing
                </H3>
                <Body className="text-black mb-4">
                  Comprehensive mapping of your peripheral vision to detect early signs of 
                  glaucoma and other neurological conditions.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Glaucoma progression monitoring</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Neurological screening</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Driving vision assessment</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Corneal Topography
                </H3>
                <Body className="text-black mb-4">
                  Detailed mapping of the corneal surface to detect irregularities and 
                  plan for contact lens fitting or refractive surgery.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Keratoconus detection</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Contact lens fitting</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Astigmatism evaluation</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Exam Schedule */}
        <Section background="white" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                How Often Should You Have an Eye Exam?
              </H2>
              <Body className="text-black">
                The frequency of eye exams depends on your age, health conditions, and risk factors. 
                Regular exams are especially important as you age or if you have certain health conditions.
              </Body>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <Body className="text-black font-bold">Ages 18-39 (Low Risk)</Body>
                  <Body className="text-black text-sm">Every 2-3 years, or as recommended</Body>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Body className="text-black font-bold">Ages 40-54</Body>
                  <Body className="text-black text-sm">Every 1-2 years</Body>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Body className="text-black font-bold">Ages 55-64</Body>
                  <Body className="text-black text-sm">Every 1-2 years</Body>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <Body className="text-black font-bold">Ages 65+</Body>
                  <Body className="text-black text-sm">Annually</Body>
                </div>
              </div>
            </div>
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6">
                You May Need More Frequent Exams If You Have:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Diabetes</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">High blood pressure</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Family history of eye disease</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Previous eye injury or surgery</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">High prescription glasses/contacts</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Take medications affecting vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Work in high-risk environments</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Insurance & Preparation */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Preparing for Your Eye Exam
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  What to Bring
                </H3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Current glasses and contacts</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Insurance card and ID</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">List of current medications</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">List of vision concerns</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Family eye health history</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  Insurance Coverage
                </H3>
                <Body className="text-black text-sm mb-4">
                  We accept most major insurance plans and vision benefits:
                </Body>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Medicare and Medicaid</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">VSP and EyeMed</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Most major medical plans</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Self-pay options available</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <H3 className="text-[#1A1A1A] mb-4">
                  After Your Exam
                </H3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Pupils may be dilated 2-4 hours</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Bring sunglasses for comfort</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Consider arranging transportation</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Follow-up appointments if needed</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Prescription updates available</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Protect Your Vision with Regular Eye Exams
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't wait for symptoms to appear. Many eye diseases have no early warning signs. 
              Schedule your comprehensive eye exam today to protect your vision for years to come.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tajjam.com/services/68bd668c6ae4830eb9cccae7" target="_blank" rel="noopener noreferrer">
                <EnhancedButton variant="primary" size="xl">
                  Schedule Your Eye Exam
                </EnhancedButton>
              </a>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Comprehensive eye exams • Most insurance accepted • Convenient locations in Houston & Cypress
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default RoutineEyeExams;
