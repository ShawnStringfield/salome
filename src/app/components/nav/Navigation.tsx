'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

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
      {!useDesktopMenuOnMobile && <MobileMenu navItems={navItems} />}

      {/* Desktop Navigation (shown on desktop or when useDesktopMenuOnMobile is true) */}
      <div className={`${useDesktopMenuOnMobile ? 'block' : 'hidden sm:block'}`}>
        <div className='container mx-auto px-8 py-3 mt-6'>
          <div className='flex items-center justify-center'>
            {/* Navigation Items */}
            <nav className='flex items-center gap-2 bg-slate-200 rounded-full px-1 py-1 relative font-bold'>
              <AnimatePresence mode='wait'>
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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
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
              </AnimatePresence>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
