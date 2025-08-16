
import React, { useState } from 'react';
import { Star, MapPin, Phone, Clock, Award, GraduationCap, Users, Calendar } from 'lucide-react';
import { H1, H2, H3, Body, BodyLarge } from '../components/ui/typography';
import Section from '../components/ui/section';
import Container from '../components/ui/container';
import EnhancedButton from '../components/ui/button-enhanced';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const DoctorProfile = () => {
  const [selectedLocation, setSelectedLocation] = useState('houston');

  const locations = {
    houston: {
      address: "13333 Dotson Rd, Suite 200, Houston, TX 77041",
      phone: "(281) 890-1784",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    },
    cypress: {
      address: "9645-A Barker Cypress Rd, Cypress, TX 77433",
      phone: "(832) 678-4560",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM"
    }
  };

  const reviews = [
    {
      name: "Maria C.",
      location: "Cypress, TX",
      rating: 5,
      date: "2 weeks ago",
      review: "Dr. Anwar changed my life after cataract surgery! The procedure was quick and painless. His bilingual staff made me feel comfortable throughout the entire process. Highly recommend!"
    },
    {
      name: "James R.",
      location: "Houston, TX",
      rating: 5,
      date: "1 month ago",
      review: "Finally found a glaucoma doctor who listens. Dr. Anwar explained everything clearly and my eye pressure is now under control. Professional and caring team."
    },
    {
      name: "Ana G.",
      location: "Jersey Village, TX",
      rating: 5,
      date: "3 weeks ago",
      review: "Thorough, caring, and bilingual – amazing team. Dr. Anwar detected my retina issue early. The on-site diagnostics made everything convenient."
    },
    {
      name: "Robert M.",
      location: "Spring, TX",
      rating: 5,
      date: "1 week ago",
      review: "Excellent experience with routine eye exam. Staff was professional and Dr. Anwar was very knowledgeable. Will definitely return for future care."
    }
  ];

  const services = [
    "Cataract Surgery",
    "Glaucoma Management", 
    "Retina Disease Treatment",
    "Corneal Disorders",
    "Dry Eye Treatment",
    "Routine Eye Exams",
    "Diabetic Eye Exams",
    "Macular Degeneration Treatment"
  ];

  const insurances = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "UnitedHealthcare", 
    "Medicare", "Medicaid", "Humana", "VSP Vision Care",
    "EyeMed", "Davis Vision", "Superior Vision", "Avesis"
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-[#F8A401] text-[#F8A401]' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Section background="white" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Doctor Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a1ad05500e6f15b39a6066c4b3ebece9e7d3ab0?width=1230"
                  alt="Dr. Zane Anwar"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {renderStars(5)}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">5.0</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <H1 className="text-[#1A1A1A] mb-2">Dr. Zane Anwar, MD</H1>
                <BodyLarge className="text-[#0052CC] mb-4">Ophthalmology</BodyLarge>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#F8A401]" />
                    <Body className="text-gray-700">Board Certified</Body>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#F8A401]" />
                    <Body className="text-gray-700">3,000+ Surgeries</Body>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#F8A401]" />
                    <Body className="text-gray-700">10-15+ Years Experience</Body>
                  </div>
                </div>

                <Body className="text-gray-700 mb-6 leading-relaxed">
                  Zane Anwar, MD is diplomate of the American Board of Ophthalmology practicing comprehensive medical and surgical ophthalmology. Dr. Anwar earned his bachelor's degree in biomedical engineering at the University of Miami and graduated Summa Cum Laude with a 4.0 GPA. He was inducted into the Tau Beta Pi engineering honor society. Dr. Anwar completed medical school at the University of Miami Miller School of Medicine where he continued his academic achievements and was inducted into the Alpha Omega Alpha medical honor society.
                  Dr. Anwar completed his residency training at the renowned New York Eye and Ear Infirmary of Mount Sinai where he provided care to the some of the most complex conditions in the greater New York City area. He completed a fellowship in cornea and external diseases at Weill Cornell Medical College/New York Presbyterian and refined his skills in anterior segment surgery, complex dry eye management, refractive surgery, and surgical ocular trauma. He has practiced ophthalmology for approximately 10 years and has performed over 2,000 ophthalmic surgeries including cataract, pterygium surgery, and minimally invasive glaucoma surgery.
                  During his early career Dr. Anwar was an ophthalmologist for Kaiser Permanente where he performed high volume cataract surgery and refined his medical retina and glaucoma practice. Currently Dr. Anwar is in practice at Houston, TX with 1960 Eye Surgeons.
                  Dr. Anwar uses the latest treatments and technologies to treat a wide scope of eye conditions including cataract, glaucoma, dry eye, diabetic retinopathy, and macular degeneration. He has served a diverse patient population through his training and career and is fluent in medical Spanish.
                </Body>

                <div className="flex flex-col sm:flex-row gap-4">
                  <EnhancedButton variant="secondary" size="lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (281) 890-1784
                  </EnhancedButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Main Content Tabs */}
      <Section background="gray" spacing="xl">
        <Container>
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="locations">Locations</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About Dr. Anwar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Body>
                    Dr. Zane Anwar earned his medical degree from a prestigious institution and completed his ophthalmology 
                    residency with distinction. He is committed to providing the highest quality eye care using the latest 
                    technologies and treatment methods. Dr. Anwar believes in personalized patient care and takes time to 
                    ensure each patient understands their condition and treatment options.
                  </Body>
                  <Body>
                    His areas of expertise include advanced cataract surgery with premium lens implants, comprehensive 
                    glaucoma management, diabetic retinopathy treatment, and preventive eye care. Dr. Anwar stays current 
                    with the latest advancements in ophthalmology through continuing education and professional development.
                  </Body>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Education & Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#0052CC] mt-1" />
                      <div>
                        <Body className="font-semibold">Medical Degree</Body>
                        <Body className="text-gray-600">Doctor of Medicine (MD) from University of Miami,</Body>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#0052CC] mt-1" />
                      <div>
                        <Body className="font-semibold">Ophthalmology Residency</Body>
                        <Body className="text-gray-600">New York Eye and Ear Infirmary</Body>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#0052CC] mt-1" />
                      <div>
                        <Body className="font-semibold">Fellowship</Body>
                        <Body className="text-gray-600">Cornell/New York Presbyterian</Body>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-[#0052CC] mb-2">15+</div>
                    <Body>Years of Experience</Body>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-[#0052CC] mb-2">2,000+</div>
                    <Body>Successful Surgeries</Body>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-[#0052CC] mb-2">5,000+</div>
                    <Body>Patients Treated</Body>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-[#0052CC] mb-2">98%</div>
                    <Body>Patient Satisfaction</Body>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#F8A401] mt-1" />
                      <Body>Board Certified Ophthalmologist - American Board of Ophthalmology</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#F8A401] mt-1" />
                      <Body>Member - American Academy of Ophthalmology</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#F8A401] mt-1" />
                      <Body>Excellence in Patient Care Award</Body>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-[#F8A401] mt-1" />
                      <Body>Advanced Cataract Surgery Certification</Body>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="services" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Services Offered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-2 h-2 bg-[#0052CC] rounded-full"></div>
                        <Body>{service}</Body>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="insurance" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Accepted Insurance Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <Body className="mb-4 text-gray-600">
                    We accept most major insurance plans. Please contact our office to verify your specific coverage.
                  </Body>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {insurances.map((insurance, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <div className="w-2 h-2 bg-[#F8A401] rounded-full"></div>
                        <Body className="text-sm">{insurance}</Body>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <Body className="font-semibold text-[#0052CC] mb-2">Insurance Verification</Body>
                    <Body className="text-sm text-gray-600 mb-4">
                      Not sure if we accept your insurance? Contact us and we'll verify your coverage.
                    </Body>
                    <EnhancedButton variant="primary" size="sm">
                      Check My Insurance
                    </EnhancedButton>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="locations" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(locations).map(([key, location]) => (
                  <Card key={key}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#0052CC]" />
                        {key === 'houston' ? 'Houston Location' : 'Cypress Location'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                          <Body className="text-sm">{location.address}</Body>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-gray-500" />
                          <a href={`tel:${location.phone.replace(/[^\d]/g, '')}`} className="text-sm text-[#0052CC] hover:underline">
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <Body className="text-sm">{location.hours}</Body>
                        </div>
                      </div>
                      <EnhancedButton variant="secondary" size="sm" fullWidth>
                        Get Directions
                      </EnhancedButton>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Overall Rating</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-4xl font-bold text-[#0052CC] mb-2">5.0</div>
                    <div className="flex justify-center gap-1 mb-2">
                      {renderStars(5)}
                    </div>
                    <Body className="text-gray-600">Based on {reviews.length} reviews</Body>
                  </CardContent>
                </Card>

                <div className="lg:col-span-2 space-y-4">
                  {reviews.map((review, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <Body className="font-semibold">{review.name}</Body>
                            <Body className="text-sm text-gray-600">{review.location}</Body>
                          </div>
                          <div className="text-right">
                            <div className="flex gap-1 mb-1">
                              {renderStars(review.rating)}
                            </div>
                            <Body className="text-xs text-gray-500">{review.date}</Body>
                          </div>
                        </div>
                        <Body className="text-gray-700 italic">"{review.review}"</Body>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="white" spacing="lg">
        <Container>
          <Card className="bg-gradient-to-r from-[#0052CC] to-[#0066FF] text-white">
            <CardContent className="py-12 text-center">
              <H2 className="text-white mb-4">Ready to Schedule Your Appointment?</H2>
              <Body className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Take the first step towards better eye health. Dr. Anwar and his team are ready to provide 
                you with personalized, comprehensive eye care.
              </Body>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EnhancedButton variant="accent" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Now
                </EnhancedButton>
                <EnhancedButton variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (281) 890-1784
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      <Footer />
    </div>
  );
};

export default DoctorProfile;
