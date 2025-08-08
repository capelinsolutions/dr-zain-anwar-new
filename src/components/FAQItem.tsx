
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { H3, Body } from './ui/typography';

interface FAQItemProps {
  question: string;
  answer?: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-6 lg:p-8 hover:bg-gray-50 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <H3 className="text-black pr-4">
          {question}
        </H3>
        <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border-2 border-black transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-black" />
        </div>
      </button>
      
      {isOpen && answer && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8">
          <Body className="text-black">
            {answer}
          </Body>
        </div>
      )}
    </article>
  );
};

export default FAQItem;
