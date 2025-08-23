
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { H3, Body } from './ui/typography';
import Container from './ui/container';

const Footer = () => {
  const location = useLocation();
  const socialLinks = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbae5632c3ab5e1526e5c8c8cbfdf48c74451454?width=152", alt: "Facebook", href: "https://www.healthgrades.com/physician/dr-zane-anwar-y9psbcz" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c5c31fda78c45b7cf842a0fae5b5ceae1d99e45?width=152", alt: "Twitter", href: "https://www.facebook.com/zaneanwarmd" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a0127d0c810293a73d0cc508488c738800b34a4?width=132", alt: "Instagram", href: "https://www.instagram.com/zaneanwarmd/" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/50ae6330d94ddd135c2d6c1ab3f099b0f26926cf?width=132", alt: "LinkedIn", href: "" }
  ];

  return (
    <footer className="bg-white py-16 md:py-20 border-t border-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              <span className="text-[#0052CC]">Dr. </span>
              <span className="text-black">Zane Anwar</span>
            </div>
            
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6db2986e31d201e76a2ba777c2eceb1fd10794ad?width=397"
              alt="Medical association logo"
              className="w-32 md:w-40 h-auto"
            />
            
            <Body className="text-black font-bold">
              Serving Houston, Cypress &amp; Nearby Areas
            </Body>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <H3 className="text-black">
              Quick Links:
            </H3>
            
            <nav className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={location.pathname === '/' ? link.href : `/${link.href}`}
                  onClick={(e) => {
                    if (location.pathname === '/') {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className="block text-black font-bold text-lg hover:text-[#0052CC] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <H3 className="text-black">
              Contact:
            </H3>
            
            <div className="space-y-3">
              <Body className="text-black font-bold">
                Phone: <a href="tel:+12818901784" className="hover:text-[#0052CC] transition-colors">(281) 890-1784</a>
              </Body>
              <Body className="text-black font-bold">
                Locations: Cypress &amp; Houston Clinics
              </Body>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-6">
            <H3 className="text-black">
              Legal:
            </H3>
            
            <nav className="space-y-3">
              <Link to="/privacy" className="block text-black font-bold text-lg hover:text-[#0052CC] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/hipaa" className="block text-black font-bold text-lg hover:text-[#0052CC] transition-colors">
                HIPAA Notice
              </Link>
            </nav>
          </div>
          
          {/* Social */}
          <div className="space-y-6">
            <H3 className="text-black">
              Follow:
            </H3>
            
            <div className="grid grid-cols-3 gap-3 max-w-[200px]">
              {socialLinks.map((social) => (
                <a key={social.alt} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.alt} className="hover:opacity-75 transition-opacity">
                  <img
                    src={social.src}
                    alt={social.alt}
                    className="w-10 h-10 rounded-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <Body className="text-black text-center opacity-60">
            Copyright 2025 Dr. Zane Anwar, MD
          </Body>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
