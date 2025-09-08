
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/container';
import EnhancedButton from './ui/button-enhanced';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Focus first menu item when mobile menu opens
      const firstMenuItem = mobileMenuRef.current?.querySelector('a');
      firstMenuItem?.focus();
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '/doctor-profile', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#locations', label: 'Locations' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleNavClick = (href: string, external?: boolean) => {
    setIsMobileMenuOpen(false);
    
    // Handle external links
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    
    // Handle route navigation (e.g., /doctor-profile)
    if (href.startsWith('/') && !href.startsWith('/#')) {
      window.location.href = href;
      return;
    }
    
    // If we're not on the home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/${href}`;
      return;
    }
    
    // Smooth scroll to section on home page
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="relative bg-white shadow-sm z-50 transition-all duration-300"
      role="banner"
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
          {/* Logo */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-bold transform transition-transform duration-300 hover:scale-105">
            <a 
              href="#home"
              className="focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:ring-offset-2 rounded"
              aria-label="Dr. Zane Anwar - Go to homepage"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
            >
              <span className="text-[#0052CC]">Dr. </span>
              <span className="text-black">Zane Anwar</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href, (item as any).external);
                }}
                className="text-lg font-bold uppercase text-black hover:text-[#0052CC] transition-all duration-300 relative group focus:outline-none focus:text-[#0052CC] focus:ring-2 focus:ring-[#0052CC] focus:ring-offset-2 rounded px-2 py-1"
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                <span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0052CC] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                ></span>
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            ref={menuButtonRef}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0052CC] focus:ring-offset-2"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-fade-in"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="p-4 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, (item as any).external);
                  }}
                  className="block text-lg font-bold uppercase text-black hover:text-[#0052CC] transition-all duration-300 hover:translate-x-2 focus:outline-none focus:text-[#0052CC] focus:ring-2 focus:ring-[#0052CC] focus:ring-offset-2 rounded px-2 py-2"
                  aria-label={`Navigate to ${item.label} section`}
                  tabIndex={0}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
