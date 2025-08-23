
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const ServicesOverview = () => {
  const services = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d4741823b3da9f47994481de9c289a5aaa51d4f?width=268",
      title: "Cataract Surgery",
      description: "Advanced cataract surgery with the latest technology for crystal-clear vision restoration. Quick, painless procedures with premium IOL options.",
      link: "/services/cataract-surgery"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c9186a2aa2bec0ef0a7748c7de13cae925dfbda?width=276",
      title: "Glaucoma Management",
      description: "Comprehensive glaucoma care to protect your vision. Early detection, advanced diagnostics, and personalized treatment plans.",
      link: "/services/glaucoma-management"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/250bee20af5f592259725fcefe2d665c1d8f40d8?width=208",
      title: "Retina Disease Treatment",
      description: "Specialized care for diabetic retinopathy, macular degeneration, and other retinal conditions using cutting-edge treatments.",
      link: "/services/retina-treatment"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf68fff0fa2a0d1fafe5245a6722f418b7715b1?width=224",
      title: "Corneal Disorders",
      description: "Expert treatment for corneal diseases, injuries, and vision problems affecting the eye's front surface using advanced techniques.",
      link: "/services/corneal-disorders"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0c0d75b3957f1bdec3f99f60fee8a1a7a50ae25?width=208",
      title: "Dry Eye & Red Eye Treatment",
      description: "Comprehensive solutions for dry eye syndrome and red eye conditions to restore comfort and clarity with lasting relief.",
      link: "/services/dry-eye-treatment"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0545f085c57ae17cf2ad55769d4ca6799aac7f0e?width=208",
      title: "Routine Eye Exams",
      description: "Comprehensive preventive eye care to detect problems early and maintain optimal vision throughout your life.",
      link: "/services/routine-eye-exams"
    }
  ];

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
              Comprehensive Eye Care Services
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              From routine eye exams to advanced surgical procedures, Dr. Zane Anwar provides complete eye care services for patients throughout Houston and Cypress
            </BodyLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="lg">
                Schedule Consultation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section background="gray" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Our Specialized Eye Care Services
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                With over 2,000 successful surgeries and state-of-the-art technology, Dr. Anwar provides 
                expert care for a wide range of eye conditions and vision problems.
              </Body>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  to={service.link}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-20 h-20 flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-grow">
                      <H3 className="text-[#1A1A1A] mb-3 group-hover:text-[#0052CC] transition-colors">
                        {service.title}
                      </H3>
                      <Body className="text-black mb-4">
                        {service.description}
                      </Body>
                      <EnhancedButton variant="secondary" size="sm">
                        Learn More →
                      </EnhancedButton>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose Us */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Why Choose Dr. Zane Anwar for Your Eye Care?
            </H2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏆</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Board Certified
                </H3>
                <Body className="text-black text-sm">
                  Board-certified ophthalmologist with extensive training and experience
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Advanced Technology
                </H3>
                <Body className="text-black text-sm">
                  State-of-the-art equipment and latest surgical techniques for optimal outcomes
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🌍</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Bilingual Care
                </H3>
                <Body className="text-black text-sm">
                  Fluent in English and Spanish with bilingual staff for comprehensive care
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">📍</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Convenient Locations
                </H3>
                <Body className="text-black text-sm">
                  Two convenient locations in Houston and Cypress for easy access
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* Insurance */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Insurance & Payment Options
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              We accept most major insurance plans and offer flexible payment options to make 
              quality eye care accessible to everyone.
            </Body>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Body className="text-black font-bold">Medicare</Body>
              </div>
              <div className="text-center">
                <Body className="text-black font-bold">Medicaid</Body>
              </div>
              <div className="text-center">
                <Body className="text-black font-bold">VSP</Body>
              </div>
              <div className="text-center">
                <Body className="text-black font-bold">EyeMed</Body>
              </div>
            </div>
            <EnhancedButton variant="secondary" size="md">
              Check Your Insurance Coverage
            </EnhancedButton>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Ready to Improve Your Vision?
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't let vision problems affect your quality of life. Schedule your comprehensive 
              eye examination today and discover how our expert care can help you see clearly again.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="xl">
                Schedule Your Appointment
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Same-day appointments available • Most insurance accepted • Bilingual staff
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesOverview;
