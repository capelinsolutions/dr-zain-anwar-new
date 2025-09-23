
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import Services from '../components/Services';
import LogoCarousel from '../components/LogoCarousel';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import FAQ from '../components/FAQ';
import Locations from '../components/Locations';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Open Sans, sans-serif' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
      />

      <Header />

      <main className="overflow-x-hidden">
        <Hero />
        {/* <ContactForm /> */}
        <About />
        <Services />
        <LogoCarousel />
        <Testimonials />
        <Benefits />
        <FAQ />
        <Locations />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
