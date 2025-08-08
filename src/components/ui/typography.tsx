
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => (
  <h1 className={cn(
    "text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-tight",
    className
  )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn(
    "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-tight leading-tight",
    className
  )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: TypographyProps) => (
  <h3 className={cn(
    "text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide",
    className
  )}>
    {children}
  </h3>
);

export const BodyLarge = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-lg md:text-xl lg:text-2xl font-bold uppercase leading-relaxed",
    className
  )}>
    {children}
  </p>
);

export const Body = ({ children, className }: TypographyProps) => (
  <p className={cn(
    "text-base md:text-lg leading-relaxed",
    className
  )}>
    {children}
  </p>
);
