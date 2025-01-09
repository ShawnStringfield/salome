import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/app/lib/utils';
import { AlertCircle } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  company: z.string().optional(),
  phone: z
    .string()
    .regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Invalid phone number format')
    .optional(),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  projectType: z.string().min(1, 'Project type is required'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(1, 'Project description is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  title: string;
}

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className='flex items-center gap-x-2 mt-1.5'>
      <AlertCircle className='h-4 w-4 text-red-600' />
      <p className='text-sm text-red-600 font-medium'>{message}</p>
    </div>
  );
};

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

const FormField = ({ label, error, required, children }: FormFieldProps) => {
  return (
    <div className='space-y-2'>
      <label className='block text-sm font-medium text-gray-700'>
        {label} {required && <span className='text-red-600'>*</span>}
      </label>
      {children}
      <FormError message={error} />
    </div>
  );
};

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');

      // Append all form fields
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value.toString());
        }
      });

      // Submit to Netlify
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      // Redirect to success page
      window.location.href = '/success';
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div id='contact' className='py-16 w-full bg-transparent'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center mb-3'>{title}</h2>
        <p className='text-gray-600 text-center mb-8 max-w-2xl mx-auto'>
          I&apos;m excited to learn about your project. Please fill out the form below with as much
          detail as possible, and I&apos;ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          name='contact'
          method='POST'
          data-netlify='true'
          action='/success'
          className='w-full mx-auto space-y-8'
        >
          <input type='hidden' name='form-name' value='contact' />
          <p className='hidden'>
            <label>
              Don&apos;t fill this out if you&apos;re human: <input name='bot-field' />
            </label>
          </p>

          {/* Personal Information Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold border-b border-gray-200/50 pb-3 mt-16'>
              Personal Information
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <FormField label='First Name' error={errors.firstName?.message} required>
                <Input
                  {...register('firstName')}
                  type='text'
                  id='firstName'
                  className={cn(
                    'bg-white/90 hover:bg-white',
                    errors.firstName && 'border-red-600 focus-visible:ring-red-600'
                  )}
                  placeholder='John'
                />
              </FormField>

              <FormField label='Last Name' error={errors.lastName?.message} required>
                <Input
                  {...register('lastName')}
                  type='text'
                  id='lastName'
                  className={cn(
                    'bg-white/90 hover:bg-white',
                    errors.lastName && 'border-red-600 focus-visible:ring-red-600'
                  )}
                  placeholder='Doe'
                />
              </FormField>

              <FormField label='Company Name' error={errors.company?.message}>
                <Input
                  {...register('company')}
                  type='text'
                  id='company'
                  className='bg-white/90 hover:bg-white'
                  placeholder='Your Company Ltd.'
                />
              </FormField>

              <FormField label='Phone Number' error={errors.phone?.message}>
                <Input
                  {...register('phone')}
                  type='tel'
                  id='phone'
                  className={cn(
                    'bg-white/90 hover:bg-white',
                    errors.phone && 'border-red-600 focus-visible:ring-red-600'
                  )}
                  placeholder='+1 (555) 000-0000'
                />
              </FormField>
            </div>

            <FormField label='Email Address' error={errors.email?.message} required>
              <Input
                {...register('email')}
                type='email'
                id='email'
                className={cn(
                  'bg-white/90 hover:bg-white',
                  errors.email && 'border-red-600 focus-visible:ring-red-600'
                )}
                placeholder='john@example.com'
              />
            </FormField>
          </div>

          {/* Project Details Section */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold border-b border-gray-200/50 pb-3 mt-16'>
              Project Details
            </h3>

            <FormField label='Project Type' error={errors.projectType?.message} required>
              <Select
                onValueChange={value => {
                  setValue('projectType', value);
                  trigger('projectType');
                }}
              >
                <SelectTrigger
                  className={cn(
                    'w-full bg-white/90 hover:bg-white text-xl py-6 text-gray-500',
                    errors.projectType && 'border-red-600 focus:border-red-600 focus:ring-red-600'
                  )}
                >
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
            </FormField>

            <FormField label='Budget Range' error={errors.budget?.message}>
              <Select
                onValueChange={value => {
                  setValue('budget', value);
                  trigger('budget');
                }}
              >
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
            </FormField>

            <FormField label='Desired Timeline' error={errors.timeline?.message}>
              <Select
                onValueChange={value => {
                  setValue('timeline', value);
                  trigger('timeline');
                }}
              >
                <SelectTrigger className='w-full bg-white/90 hover:bg-white text-xl py-6 text-gray-500'>
                  <SelectValue placeholder='Select a timeline' />
                </SelectTrigger>
                <SelectContent className='text-xl text-gray-500'>
                  <SelectItem value='urgent'>Less than 1 month</SelectItem>
                  <SelectItem value='normal'>1-3 months</SelectItem>
                  <SelectItem value='relaxed'>3-6 months</SelectItem>
                  <SelectItem value='planning'>6+ months</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField label='Project Description' error={errors.message?.message} required>
              <Textarea
                {...register('message')}
                id='message'
                rows={6}
                className={cn(
                  'bg-white/90 hover:bg-white text-base',
                  errors.message && 'border-red-600 focus-visible:ring-red-600'
                )}
                placeholder="Please describe your project, including any specific requirements, features, or challenges you'd like to address."
              />
            </FormField>
          </div>

          <div className='flex justify-center pt-4'>
            <button
              type='submit'
              disabled={isSubmitting}
              className={cn(
                'rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 font-medium text-base shadow-sm hover:shadow-md',
                isSubmitting && 'opacity-50 cursor-not-allowed'
              )}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
