'use client';

import { IoIosMenu } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerTrigger } from '@/components/ui/drawer';

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <>
      <Drawer>
        <div className='display:block sm:hidden container mt-8'>
          <div className='flex justify-end text-4xl'>
            <DrawerTrigger>
              <IoIosMenu />
            </DrawerTrigger>
          </div>
        </div>
        <DrawerContent>
          <DrawerFooter className='pb-8'>
            <Link href={'/'}>
              <div color={`${pathname === '/' ? 'blue.300' : 'white'} `}>Home</div>
            </Link>
            <Link href={'/resume'}>
              <div color={`${pathname === '/resume' ? 'blue.300' : 'white'} `}>Resume</div>
            </Link>
            <DrawerClose className='absolute top-5 right-5'>
              <div>X</div>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className='hidden sm:block container mx-auto text-base font-bold pt-8'>
        <div className='flex'>
          <div className='flex items-center text-slate-400'>
            <div className='w-3 h-3 bg-blue-400 rounded-full mr-2' />
            <Link href={'/'}>
              <div>Shawn Stringfield</div>
            </Link>
          </div>
          <div className='flex flex-1 justify-end space-x-4'>
            <Link href={'/#contact'}>
              <div color='blue.500'>
                <div color={`${pathname === '/' ? 'blue.300' : ''} `}>Home</div>
              </div>
            </Link>
            <Link href={'/resume'}>
              <div color='blue.500'>
                <div color={`${pathname === '/resume' ? 'blue.300' : ''} `}>Resume</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
