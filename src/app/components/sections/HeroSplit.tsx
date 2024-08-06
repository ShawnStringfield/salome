import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

type HeroSplitProps = {
  tagline?: string;
  subTagline?: string;
  title?: string;
};

export const HeroSplit = ({ tagline, subTagline, title }: HeroSplitProps) => {
  return (
    <>
      <div>
        <div className='lg:hidden flex justify-center'>
          <Avatar className='w-32 h-32 sm:w-48 sm:h-48 border-4 border-white'>
            <AvatarImage src={'/me2.jpg'} />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
        <div className='flex items-center'>
          <div className='text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl text-center lg:text-left mb-4 mt-8 lg:mt-0'>{title}</h1>
            <h2 className='text-xl sm:text-2xl lg:text-5xl/[52px]'>
              {tagline}
              {tagline ? ':' : ''} {''}
              <span className='text-primary'>{subTagline}</span>
            </h2>
            <div className='mt-8 mb-8'>
              <Link href='#contact'>
                <Button className='bg-secondary font-bold text-lg'>{"Let's Work Together"}</Button>
              </Link>
            </div>
          </div>

          <div className='hidden lg:block ml-8'>
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
