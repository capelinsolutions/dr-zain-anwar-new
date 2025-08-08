
import React from 'react';
import { cn } from '@/lib/utils';
import Container from './container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'transparent';
  id?: string;
}

const Section = ({ 
  children, 
  className, 
  containerSize = 'xl',
  spacing = 'lg',
  background = 'white',
  id
}: SectionProps) => {
  const spacingClasses = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-20 lg:py-24',
    xl: 'py-20 md:py-24 lg:py-32'
  };

  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    transparent: 'bg-transparent'
  };

  return (
    <section 
      id={id}
      className={cn(
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;
