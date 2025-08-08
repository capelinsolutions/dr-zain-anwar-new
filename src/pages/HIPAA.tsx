import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, Body } from '../components/ui/typography';
import Container from '../components/ui/container';
import Section from '../components/ui/section';

const HIPAA = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <Header />
      
      <main>
        <Section spacing="xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <H1 className="text-black text-center">HIPAA Notice of Privacy Practices</H1>
            
            <div className="space-y-6">
              <div>
                <H2 className="text-black mb-4">Your Health Information Rights</H2>
                <Body className="text-black">
                  You have the right to receive a copy of your medical records, request corrections 
                  to your health information, and request restrictions on how we use or disclose 
                  your information.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">How We Protect Your Information</H2>
                <Body className="text-black">
                  We maintain physical, electronic, and procedural safeguards to protect your health 
                  information. Access is limited to authorized personnel who need the information 
                  to provide your care.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">Uses and Disclosures</H2>
                <Body className="text-black">
                  We may use your health information for treatment, payment, and healthcare operations. 
                  We may also disclose information as required by law, for public health activities, 
                  or in emergency situations.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">Contact Information</H2>
                <Body className="text-black">
                  For questions about your privacy rights or to file a complaint, contact our 
                  Privacy Officer at (281) 890-1784. You may also file a complaint with the 
                  U.S. Department of Health and Human Services.
                </Body>
              </div>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HIPAA;