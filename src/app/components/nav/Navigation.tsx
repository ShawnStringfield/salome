'use client';

import { IoIosMenu } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/app/components/ui/drawer';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Resume' },
];

interface NavigationProps {
  useDesktopMenuOnMobile?: boolean;
}

export const Navigation = ({ useDesktopMenuOnMobile = false }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <div className='relative z-50'>
      {!useDesktopMenuOnMobile && (
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
              {navItems.map(item => (
                <Link key={item.href} href={item.href} prefetch>
                  <DrawerClose>
                    <div color={`${pathname === item.href ? 'blue.300' : 'white'} `}>
                      {item.label}
                    </div>
                  </DrawerClose>
                </Link>
              ))}
              <DrawerClose className='absolute top-5 right-5'>
                <div>X</div>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}

      {/* Desktop Navigation (shown on desktop or when useDesktopMenuOnMobile is true) */}
      <div className={`${useDesktopMenuOnMobile ? 'block' : 'hidden sm:block'}`}>
        <div className='container mx-auto px-8 py-3 mt-6'>
          <div className='flex items-center justify-center'>
            {/* Navigation Items */}
            <nav className='flex items-center gap-2 bg-slate-200 rounded-full px-1 py-1 relative font-bold'>
              {navItems.map(item => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} prefetch>
                    <div
                      className={`relative px-4 py-1 rounded-full text-sm transition-colors z-10 ${
                        isActive ? 'text-white' : 'text-brand-emphasis hover:text-gray-900'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId='pill'
                          className='absolute inset-0 bg-brand rounded-full -z-10'
                          transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
