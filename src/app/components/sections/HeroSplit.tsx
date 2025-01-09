import React from 'react';
import { Button } from '@/app/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
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
      const offsetPosition = elementPosition + window.pageYOffset - 50; // 50px offset for better positioning

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
    <>
      <div className='mx-8'>
        <div className='lg:hidden flex justify-center'>
          <Avatar className='w-32 h-32 sm:w-48 sm:h-48 border-4 border-white'>
            <AvatarImage src={'/me2.jpg'} />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl text-center lg:text-left mb-4 mt-8 lg:mt-0'>
              {title}
            </h1>
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

          <div className='hidden lg:block -mr-8'>
            <Avatar className='w-64 h-64 border-4 border-white'>
              <AvatarImage src={'/me2.jpg'} />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </>
  );
};
