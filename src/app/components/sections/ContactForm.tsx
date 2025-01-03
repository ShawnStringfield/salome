import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ContactFormProps {
  title: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  return (
    <div id='contact' className='py-16 w-full bg-transparent'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-3'>{title}</h2>
        <p className='text-gray-600 text-center mb-8 max-w-2xl mx-auto'>
          I&apos;m excited to learn about your project. Please fill out the form below with as much detail as possible,
          and I&apos;ll get back to you within 24 hours.
        </p>

        <form
          data-netlify='true'
          name='contact'
          method='POST'
          action='/success'
          data-netlify-honeypot='bot-field'
          className='w-full mx-auto space-y-8'
        >
          <input type='hidden' name='form-name' value='contact' />
          <div hidden>
            <input name='bot-field' />
          </div>

          {/* Personal Information Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold border-b border-gray-200/50 pb-3 mt-16'>Personal Information</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
                  First Name *
                </label>
                <input
                  type='text'
                  name='firstName'
                  id='firstName'
                  required
                  className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                  placeholder='John'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
                  Last Name *
                </label>
                <input
                  type='text'
                  name='lastName'
                  id='lastName'
                  required
                  className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                  placeholder='Doe'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
                  Company Name
                </label>
                <input
                  type='text'
                  name='company'
                  id='company'
                  className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                  placeholder='Your Company Ltd.'
                />
              </div>

              <div className='space-y-2'>
                <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  id='phone'
                  className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                  placeholder='+1 (555) 000-0000'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email Address *
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                placeholder='john@example.com'
              />
            </div>
          </div>

          {/* Project Details Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold border-b border-gray-200/50 pb-3 mt-16'>Project Details</h3>

            <div className='space-y-2'>
              <label htmlFor='projectType' className='block text-sm font-medium text-gray-700'>
                Project Type *
              </label>
              <Select name='projectType' required>
                <SelectTrigger className='w-full bg-white/90 hover:bg-white text-xl py-6 text-gray-500'>
                  <SelectValue placeholder='Select a project type' />
                </SelectTrigger>
                <SelectContent className='text-xl text-gray-500'>
                  <SelectItem value='website'>Website Development</SelectItem>
                  <SelectItem value='webapp'>Web Application</SelectItem>
                  <SelectItem value='ecommerce'>E-commerce Solution</SelectItem>
                  <SelectItem value='maintenance'>Maintenance & Support</SelectItem>
                  <SelectItem value='other'>Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <label htmlFor='budget' className='block text-sm font-medium text-gray-700'>
                Budget Range
              </label>
              <Select name='budget'>
                <SelectTrigger className='w-full bg-white/90 hover:bg-white text-xl py-6 text-gray-500'>
                  <SelectValue placeholder='Select a budget range' />
                </SelectTrigger>
                <SelectContent className='text-xl text-gray-500'>
                  <SelectItem value='small'>$5,000 - $10,000</SelectItem>
                  <SelectItem value='medium'>$10,000 - $25,000</SelectItem>
                  <SelectItem value='large'>$25,000 - $50,000</SelectItem>
                  <SelectItem value='enterprise'>$50,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <label htmlFor='timeline' className='block text-sm font-medium text-gray-700'>
                Desired Timeline
              </label>
              <Select name='timeline'>
                <SelectTrigger className='w-full bg-white/90 hover:bg-white text-xl py-6 text-gray-500 '>
                  <SelectValue placeholder='Select a timeline' />
                </SelectTrigger>
                <SelectContent className='text-xl text-gray-500'>
                  <SelectItem value='urgent'>Less than 1 month</SelectItem>
                  <SelectItem value='normal'>1-3 months</SelectItem>
                  <SelectItem value='relaxed'>3-6 months</SelectItem>
                  <SelectItem value='planning'>6+ months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='space-y-2'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Project Description *
              </label>
              <textarea
                name='message'
                id='message'
                rows={6}
                required
                className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
                placeholder="Please describe your project, including any specific requirements, features, or challenges you'd like to address."
              />
            </div>
          </div>

          <div className='flex justify-center pt-4'>
            <button
              type='submit'
              className='rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 font-medium text-base shadow-sm hover:shadow-md'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
