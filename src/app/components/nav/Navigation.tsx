'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className='container mx-auto text-base font-bold pt-8'>
      <div className='flex'>
        <div className='flex items-center text-slate-400'>
          <div className='w-3 h-3 bg-blue-400 rounded-full mr-2' />
          <Link href={'/'}>
            <div>Shawn Stringfield</div>
          </Link>
        </div>
        <div className='flex flex-1 justify-end space-x-4'>
          <Link href={'/resume'}>
            <div color='blue.500'>
              <div color={`${pathname === '/resume' ? 'blue.300' : ''} `}>Resume</div>
            </div>
          </Link>
          <Link href={'/#contact'}>
            <div color='blue.500'>
              <div color={`${pathname === '/#contact' ? 'blue.300' : ''} `}>Contact</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
