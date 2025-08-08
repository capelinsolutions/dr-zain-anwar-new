
import React from 'react';
import { H2 } from './ui/typography';
import Section from './ui/section';
import FAQItem from './FAQItem';

const FAQ = () => {
  const faqs = [
    {
      question: "What conditions do you treat?",
      answer: "We treat a wide range of eye conditions including cataracts, glaucoma, retina diseases, corneal disorders, dry eye, and provide routine eye exams."
    },
    {
      question: "Where are your clinics located?",
      answer: "We have two convenient locations: one in Houston at 13333 Dotson Rd, Suite 200, and another in Cypress at 9645-A Barker Cypress Rd."
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans. Please contact our office to verify your specific insurance coverage."
    },
    {
      question: "What is the recovery from cataract surgery like?",
      answer: "Cataract surgery recovery is typically quick and painless. Most patients experience improved vision within a few days, with full recovery in about 4-6 weeks."
    },
    {
      question: "How do I schedule?",
      answer: "You can schedule an appointment by calling us at (281) 890-1784 or using our online booking form. We offer convenient scheduling for both locations."
    }
  ];

  return (
    <Section id="faq" background="gray" spacing="xl">
      <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
        <H2 className="text-black text-center">
          Frequently Asked Questions
        </H2>
        
        <div className="space-y-4 lg:space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
