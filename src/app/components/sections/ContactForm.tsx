import React from 'react';

interface ContactFormProps {
  title: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  return (
    <div className='py-16 w-full bg-transparent'>
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
              <select
                name='projectType'
                id='projectType'
                required
                className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
              >
                <option value=''>Select a project type</option>
                <option value='website'>Website Development</option>
                <option value='webapp'>Web Application</option>
                <option value='ecommerce'>E-commerce Solution</option>
                <option value='maintenance'>Maintenance & Support</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div className='space-y-2'>
              <label htmlFor='budget' className='block text-sm font-medium text-gray-700'>
                Budget Range
              </label>
              <select
                name='budget'
                id='budget'
                className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
              >
                <option value=''>Select a budget range</option>
                <option value='small'>$5,000 - $10,000</option>
                <option value='medium'>$10,000 - $25,000</option>
                <option value='large'>$25,000 - $50,000</option>
                <option value='enterprise'>$50,000+</option>
              </select>
            </div>

            <div className='space-y-2'>
              <label htmlFor='timeline' className='block text-sm font-medium text-gray-700'>
                Desired Timeline
              </label>
              <select
                name='timeline'
                id='timeline'
                className='block w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-blue-500 focus:ring-blue-500 transition duration-150 bg-white/90 hover:bg-white'
              >
                <option value=''>Select a timeline</option>
                <option value='urgent'>Less than 1 month</option>
                <option value='normal'>1-3 months</option>
                <option value='relaxed'>3-6 months</option>
                <option value='planning'>6+ months</option>
              </select>
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
