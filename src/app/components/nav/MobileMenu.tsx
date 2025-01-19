import { IoIosMenu } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/app/components/ui/drawer';

interface MobileMenuProps {
  navItems: Array<{
    href: string;
    label: string;
  }>;
}

export const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
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
                <div color={`${pathname === item.href ? 'blue.300' : 'white'} `}>{item.label}</div>
              </DrawerClose>
            </Link>
          ))}
          <DrawerClose className='absolute top-5 right-5'>
            <div>X</div>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
