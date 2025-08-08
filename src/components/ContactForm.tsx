
import React from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { H2 } from './ui/typography';
import Container from './ui/container';
import EnhancedButton from './ui/button-enhanced';

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  reason: string;
}

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission here
  };

  return (
    <section 
      className="py-12 md:py-16 lg:py-20" 
      aria-label="Contact and appointment booking form"
      id="contact-form"
    >
      <Container>
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <Calendar className="w-8 h-8 text-[#0052CC]" aria-hidden="true" />
            <H2 className="text-black text-center md:text-left">
              Book or Contact in Seconds:
            </H2>
          </div>
          
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6"
            aria-label="Appointment booking form"
            noValidate
          >
            {/* First Row - Personal Info */}
            <fieldset className="space-y-4">
              <legend className="sr-only">Personal Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      aria-required="true"
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="w-full h-12 md:h-14 px-4 md:px-6 text-base md:text-lg font-semibold uppercase placeholder:text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 transition-colors"
                    />
                  </div>
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <Phone className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    Phone Number *
                  </label>
                  <div className="relative">
                    <input
                      {...register('phone', { required: 'Phone is required' })}
                      id="phone"
                      type="tel"
                      placeholder="(281) 555-0123"
                      aria-required="true"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className="w-full h-12 md:h-14 px-4 md:px-6 text-base md:text-lg font-semibold uppercase placeholder:text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 transition-colors"
                    />
                  </div>
                  {errors.phone && (
                    <p id="phone-error" className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <Mail className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className="w-full h-12 md:h-14 px-4 md:px-6 text-base md:text-lg font-semibold uppercase placeholder:text-gray-500 bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 transition-colors"
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </fieldset>
            
            {/* Second Row - Preferences and Submit */}
            <fieldset className="space-y-4">
              <legend className="sr-only">Appointment Preferences</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end">
                <div className="space-y-2">
                  <label 
                    htmlFor="location" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    <MapPin className="w-4 h-4 inline mr-1" aria-hidden="true" />
                    Preferred Location *
                  </label>
                  <select
                    {...register('location', { required: 'Location is required' })}
                    id="location"
                    aria-required="true"
                    aria-invalid={errors.location ? 'true' : 'false'}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    className="w-full h-12 md:h-14 px-4 md:px-6 text-base md:text-lg font-semibold uppercase bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 transition-colors"
                  >
                    <option value="">Select Location</option>
                    <option value="houston">Houston Office</option>
                    <option value="cypress">Cypress Office</option>
                  </select>
                  {errors.location && (
                    <p id="location-error" className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {errors.location.message}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="reason" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Reason for Visit *
                  </label>
                  <select
                    {...register('reason', { required: 'Reason is required' })}
                    id="reason"
                    aria-required="true"
                    aria-invalid={errors.reason ? 'true' : 'false'}
                    aria-describedby={errors.reason ? 'reason-error' : undefined}
                    className="w-full h-12 md:h-14 px-4 md:px-6 text-base md:text-lg font-semibold uppercase bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:border-[#0052CC] focus:ring-2 focus:ring-[#0052CC]/20 transition-colors"
                  >
                    <option value="">Select Service</option>
                    <option value="cataract">Cataract Surgery</option>
                    <option value="glaucoma">Glaucoma Management</option>
                    <option value="retina">Retina Treatment</option>
                    <option value="routine">Routine Eye Exam</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.reason && (
                    <p id="reason-error" className="text-red-500 text-sm" role="alert" aria-live="polite">
                      {errors.reason.message}
                    </p>
                  )}
                </div>
                
                <EnhancedButton
                  type="submit"
                  variant="secondary"
                  size="xl"
                  className="h-12 md:h-14 text-base md:text-lg"
                  aria-label="Submit appointment request form"
                >
                  <CheckCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                  Request My Appointment
                </EnhancedButton>
              </div>
            </fieldset>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
