import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, Body } from '../components/ui/typography';
import Container from '../components/ui/container';
import Section from '../components/ui/section';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <Header />
      
      <main>
        <Section spacing="xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <H1 className="text-black text-center">Privacy Policy</H1>
            
            <div className="space-y-6">
              <div>
                <H2 className="text-black mb-4">Information We Collect</H2>
                <Body className="text-black">
                  We collect information you provide directly to us, such as when you schedule an appointment, 
                  fill out forms, or contact us. This may include your name, contact information, medical 
                  history, and insurance details.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">How We Use Your Information</H2>
                <Body className="text-black">
                  We use your information to provide medical services, schedule appointments, process 
                  insurance claims, and communicate with you about your care. We follow all HIPAA 
                  requirements for protecting your health information.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">Information Sharing</H2>
                <Body className="text-black">
                  We do not sell or share your personal information with third parties except as required 
                  for your medical care, insurance processing, or as required by law.
                </Body>
              </div>
              
              <div>
                <H2 className="text-black mb-4">Contact Us</H2>
                <Body className="text-black">
                  If you have questions about this privacy policy, please contact us at (281) 890-1784 
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

export default Privacy;