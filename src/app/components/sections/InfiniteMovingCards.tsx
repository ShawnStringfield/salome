import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Logo } from '@/app/config/clientLogos';

interface InfiniteMovingCardsProps {
  items: Logo[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
}: InfiniteMovingCardsProps) => {
  const [duplicatedItems, setDuplicatedItems] = useState<Logo[]>([]);

  useEffect(() => {
    // Triple the items to ensure seamless looping
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 100;
      case 'fast':
        return 60;
      default:
        return 90;
    }
  };

  return (
    <div
      className='relative m-auto w-full overflow-hidden bg-transparent'
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <motion.div
        className='flex w-fit'
        initial={{ x: 0 }}
        animate={{
          x: direction === 'left' ? '-33.33%' : '33.33%',
        }}
        transition={{
          duration: getSpeed(),
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        <div className='flex gap-16 px-8'>
          {duplicatedItems.map((item, idx) => (
            <div
              key={item.id + idx}
              className='relative flex h-32 w-56 flex-shrink-0 items-center justify-center p-4'
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={96}
                className='max-h-24 w-auto object-contain brightness-0 invert'
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
