import React from 'react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { animate } from 'framer-motion';

type HeroSplitProps = {
  tagline?: string;
  subTagline?: string;
  title?: string;
};

export const HeroSplit = ({ tagline, subTagline, title }: HeroSplitProps) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 50;

      animate(document.documentElement.scrollTop, offsetPosition, {
        duration: 0.8,
        type: 'spring',
        bounce: 0.2,
        onUpdate: value => {
          document.documentElement.scrollTop = value;
        },
      });
    }
  };

  return (
    <div className='mx-8'>
      <div className='flex justify-center items-center min-h-[30vh] mt-8'>
        <div className='text-center w-full'>
          <h1 className='text-4xl lg:text-7xl mb-4'>{title}</h1>
          <h2 className='text-xl sm:text-2xl lg:text-4xl/[46px]'>
            {tagline}
            {tagline ? ':' : ''} {''}
            <span className='text-primary'>{subTagline}</span>
          </h2>
          <div className='mt-8 mb-8'>
            <Link href='#contact' onClick={scrollToContact}>
              <Button className='font-bold text-lg py-6'>{"Let's Work Together"}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
