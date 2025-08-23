
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';

const DryEyeTreatment = () => {
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
              Dry Eye & Red Eye Treatment
            </H1>
            <BodyLarge className="text-[#1A1A1A] max-w-4xl mx-auto">
              Comprehensive solutions for dry eye syndrome and red eye conditions to restore comfort and clarity
            </BodyLarge>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="lg">
                Schedule Dry Eye Evaluation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="lg">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
          </div>
        </Section>

        {/* Understanding Dry Eye */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Understanding Dry Eye Syndrome
              </H2>
              <Body className="text-black">
                Dry eye syndrome is a common condition that occurs when your eyes don't produce enough tears 
                or when the tears evaporate too quickly. This can lead to irritation, discomfort, and vision 
                problems that significantly impact your daily life.
              </Body>
              <Body className="text-black">
                Dr. Zane Anwar uses advanced diagnostic technology to identify the root cause of your dry eye 
                symptoms and develop a personalized treatment plan that provides lasting relief.
              </Body>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                Common Dry Eye Symptoms:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Burning or stinging sensation</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Gritty or sandy feeling in eyes</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Excessive tearing or watery eyes</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Blurred vision</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Light sensitivity</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-[#0052CC] font-bold">•</span>
                  <Body className="text-black">Eye fatigue and discomfort</Body>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Types and Causes */}
        <Section background="white" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Types of Dry Eye & Common Causes
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                Understanding the type and cause of your dry eye is essential for effective treatment. 
                We diagnose and treat all forms of dry eye syndrome.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Evaporative Dry Eye
                </H3>
                <Body className="text-black mb-4">
                  The most common type, caused by dysfunction of the meibomian glands that produce the oil layer of tears.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Meibomian gland dysfunction (MGD)</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Blepharitis (eyelid inflammation)</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Environmental factors</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Contact lens wear</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Aqueous Deficient Dry Eye
                </H3>
                <Body className="text-black mb-4">
                  Caused by insufficient tear production from the lacrimal glands, often related to autoimmune conditions.
                </Body>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Sjögren's syndrome</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Hormonal changes</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Medications</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Age-related changes</Body>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-[#E0E0E0] rounded-xl p-8">
              <H3 className="text-[#1A1A1A] mb-6 text-center">
                Common Risk Factors
              </H3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <Body className="text-black font-bold text-sm">Age & Gender</Body>
                  <Body className="text-black text-sm">More common in women over 50</Body>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💻</span>
                  </div>
                  <Body className="text-black font-bold text-sm">Screen Time</Body>
                  <Body className="text-black text-sm">Computer and device use</Body>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💊</span>
                  </div>
                  <Body className="text-black font-bold text-sm">Medications</Body>
                  <Body className="text-black text-sm">Antihistamines, antidepressants</Body>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌬️</span>
                  </div>
                  <Body className="text-black font-bold text-sm">Environment</Body>
                  <Body className="text-black text-sm">Dry, windy, or air-conditioned spaces</Body>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Advanced Diagnostics */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Advanced Dry Eye Diagnostics
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              Accurate diagnosis is the key to effective treatment. We use state-of-the-art technology 
              to evaluate your tear film and identify the specific cause of your dry eye symptoms.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">📊</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Tear Film Analysis
                </H3>
                <Body className="text-black text-sm">
                  Comprehensive evaluation of tear production, quality, and stability
                </Body>
              </div>
              {/* <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🔬</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Meibography
                </H3>
                <Body className="text-black text-sm">
                  Advanced imaging to assess meibomian gland structure and function
                </Body>
              </div> */}
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🎯</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Schirmer Testing
                </H3>
                <Body className="text-black text-sm">
                  Measurement of tear production to diagnose aqueous deficiency
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">⏱️</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Tear Break-up Time
                </H3>
                <Body className="text-black text-sm">
                  Assessment of tear film stability and evaporation rate
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">🌡️</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Osmolarity Testing
                </H3>
                <Body className="text-black text-sm">
                  Measurement of tear salt concentration to assess severity
                </Body>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-[#E0E0E0] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#0052CC]">📋</span>
                </div>
                <H3 className="text-[#1A1A1A] mb-4">
                  Symptom Assessment
                </H3>
                <Body className="text-black text-sm">
                  Comprehensive questionnaires to understand impact on daily life
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* Treatment Options */}
        <Section background="white" spacing="lg">
          <div className="space-y-12">
            <div className="text-center">
              <H2 className="text-[#1A1A1A] mb-4">
                Comprehensive Treatment Options
              </H2>
              <Body className="text-black max-w-3xl mx-auto">
                We offer a complete range of dry eye treatments, from simple lifestyle modifications 
                to advanced in-office procedures, tailored to your specific needs.
              </Body>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Medical Treatments
                </H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Prescription eye drops (Restasis, Xiidra)</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Anti-inflammatory medications</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Oral omega-3 supplements</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  In-Office Procedures
                </H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Punctal plugs insertion</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Meibomian gland expression</Body>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-8">
                <H3 className="text-[#1A1A1A] mb-4">
                  Lifestyle Modifications
                </H3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Artificial tear recommendations</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Warm compress therapy</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Eyelid hygiene education</Body>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#FFB703] font-bold">•</span>
                    <Body className="text-black text-sm">Environmental modifications</Body>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Red Eye Conditions */}
        <Section background="gray" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <H2 className="text-[#1A1A1A]">
                Red Eye Conditions We Treat
              </H2>
              <Body className="text-black">
                Red eyes can result from various conditions, from minor irritations to serious infections. 
                Proper diagnosis and treatment are essential for preventing complications and restoring eye health.
              </Body>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Allergic Conjunctivitis</Body>
                    <Body className="text-black text-sm">Seasonal and perennial allergy management</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Viral Conjunctivitis</Body>
                    <Body className="text-black text-sm">Treatment and prevention of viral eye infections</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Bacterial Infections</Body>
                    <Body className="text-black text-sm">Rapid treatment with targeted antibiotics</Body>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#0052CC] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <Body className="text-black font-bold">Subconjunctival Hemorrhage</Body>
                    <Body className="text-black text-sm">Evaluation and management of blood vessel breaks</Body>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <H3 className="text-[#1A1A1A] mb-6">
                When to Seek Immediate Care for Red Eyes:
              </H3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Severe eye pain</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Sudden vision changes</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Light sensitivity with headache</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Thick yellow or green discharge</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Eye injury or chemical exposure</Body>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <Body className="text-black">Symptoms lasting more than 48 hours</Body>
                </li>
              </ul>
              <div className="mt-6">
                <a href="tel:+12818901784">
                  <EnhancedButton variant="accent" size="md" fullWidth>
                    Emergency: (281) 890-1784
                  </EnhancedButton>
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Home Care Tips */}
        <Section background="white" spacing="lg">
          <div className="text-center space-y-12">
            <H2 className="text-[#1A1A1A]">
              Home Care & Prevention Tips
            </H2>
            <Body className="text-black max-w-3xl mx-auto">
              Simple lifestyle changes and home care practices can significantly improve dry eye symptoms 
              and prevent red eye conditions.
            </Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">💧</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Stay Hydrated
                </H3>
                <Body className="text-black text-sm">
                  Drink plenty of water and use a humidifier to maintain moisture in your environment
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">👀</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Blink More Often
                </H3>
                <Body className="text-black text-sm">
                  Take regular breaks from screens and practice complete, conscious blinking
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🌿</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Omega-3 Rich Diet
                </H3>
                <Body className="text-black text-sm">
                  Include fish, flaxseed, and nuts in your diet to support tear production
                </Body>
              </div>
              <div className="text-center space-y-4">
                <div className="bg-[#E0E0E0] rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                  <span className="text-3xl">🧼</span>
                </div>
                <H3 className="text-[#1A1A1A]">
                  Eyelid Hygiene
                </H3>
                <Body className="text-black text-sm">
                  Gentle daily cleaning with warm compresses and lid scrubs
                </Body>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gray" spacing="lg">
          <div className="text-center space-y-8">
            <H2 className="text-[#1A1A1A]">
              Find Relief from Dry Eyes Today
            </H2>
            <Body className="text-black max-w-2xl mx-auto">
              Don't let dry eyes or red eye conditions affect your comfort and quality of life. 
              Our comprehensive evaluation and personalized treatment plans can provide lasting relief.
            </Body>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton variant="primary" size="xl">
                Schedule Dry Eye Evaluation
              </EnhancedButton>
              <a href="tel:+12818901784">
                <EnhancedButton variant="accent" size="xl">
                  Call (281) 890-1784
                </EnhancedButton>
              </a>
            </div>
            <Body className="text-black text-sm">
              Advanced dry eye care • Same-day appointments • Most insurance accepted
            </Body>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default DryEyeTreatment;
