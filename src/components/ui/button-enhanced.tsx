
import React from 'react';
import { cn } from '@/lib/utils';
import { Button as BaseButton } from './button';

interface EnhancedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const EnhancedButton = ({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false
}: EnhancedButtonProps) => {
  const variantClasses = {
    primary: 'bg-[#0052CC] hover:bg-[#003d99] text-white shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
    secondary: 'bg-[#FFB703] hover:bg-[#e6a503] text-black shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
    accent: 'bg-[#F8A401] hover:bg-[#e6940a] text-black shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95'
  };

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-base',
    lg: 'h-12 px-6 text-lg',
    xl: 'h-14 px-8 text-xl'
  };

  return (
    <BaseButton
      className={cn(
        'font-bold uppercase transition-all duration-300 ease-out rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        'relative overflow-hidden group',
        'before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity before:duration-300',
        'hover:before:opacity-10',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-md',
        className
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </BaseButton>
  );
};

export default EnhancedButton;
