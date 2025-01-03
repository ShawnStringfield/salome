import React, { FormEvent } from 'react';

interface ContactFormProps {
  title: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...Object.fromEntries(formData),
        }).toString(),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error(`Response status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className='py-16 w-full'>
      <h2 className='text-3xl font-bold text-center mb-8'>{title}</h2>
      <form
        name='contact'
        method='POST'
        data-netlify='true'
        netlify-honeypot='bot-field'
        action='/'
        onSubmit={handleSubmit}
        className='w-full max-w-xl mx-auto space-y-6 bg-white rounded-lg shadow-sm p-8'
      >
        <input type='hidden' name='form-name' value='contact' />
        <div hidden>
          <input name='bot-field' />
        </div>

        <div className='space-y-2'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            required
            className='block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
            className='block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>

        <div className='space-y-2'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            rows={4}
            required
            className='block w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-blue-500'
          />
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
