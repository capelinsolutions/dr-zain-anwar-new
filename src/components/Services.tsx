
import React from 'react';
import { H2 } from './ui/typography';
import Section from './ui/section';
import ServiceCard from './ServiceCard';
import EnhancedButton from './ui/button-enhanced';
import AnimatedElement from './ui/animated-element';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d4741823b3da9f47994481de9c289a5aaa51d4f?width=268",
      title: "Cataract Surgery",
      description: "Cataract surgery is a quick, painless procedure to remove a cloudy lens from the eye and replace",
      alt: "Cataract surgery icon",
      link: "/services/cataract-surgery"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/5c9186a2aa2bec0ef0a7748c7de13cae925dfbda?width=276",
      title: "Glaucoma Management",
      description: "Glaucoma management involves controlling eye pressure through medications",
      alt: "Glaucoma management icon",
      link: "/services/glaucoma-management"
    },
    {
      image: "/lovable-uploads/5ab1d3c2-ac79-409d-83f7-51864072acc7.png",
      title: "Retina Disease Treatment",
      description: "Retina disease treatment includes advanced therapies like injections, laser procedures",
      alt: "Retina treatment icon",
      link: "/services/retina-treatment"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/aaf68fff0fa2a0d1fafe5245a6722f418b7715b1?width=224",
      title: "Corneal Disorders",
      description: "Corneal disorders affect the transparent front layer of the eye, leading to vision problems or discomfort.",
      alt: "Corneal disorders icon",
      link: "/services/corneal-disorders"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/e0c0d75b3957f1bdec3f99f60fee8a1a7a50ae25?width=208",
      title: "Dry Eye & Red Eye",
      description: "Dry Eye & Red Eye are common conditions caused by irritation, infection, or tear film imbalance.",
      alt: "Dry eye treatment icon",
      link: "/services/dry-eye-treatment"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0545f085c57ae17cf2ad55769d4ca6799aac7f0e?width=208",
      title: "Routine Eye Exams",
      description: "Routine eye exams help detect vision problems and eye diseases early, even before symptoms appear.",
      alt: "Eye exam icon",
      link: "/services/routine-eye-exams"
    }
  ];

  return (
    <Section id="services" background="white" spacing="xl">
      <div className="text-center space-y-12 lg:space-y-16">
        <AnimatedElement animation="fade-in">
          <H2 className="text-[#1A1A1A]">
            Our Eye Care Services
          </H2>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedElement
              key={index}
              animation="scale-in"
              delay={index * 100}
            >
              <Link to={service.link} className="block">
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  alt={service.alt}
                />
              </Link>
            </AnimatedElement>
          ))}
        </div>
        
        <AnimatedElement animation="fade-in" delay={800}>
          <div className="pt-8">
            <Link to="/services">
              <EnhancedButton variant="secondary" size="lg">
                View Full Services
              </EnhancedButton>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default Services;
