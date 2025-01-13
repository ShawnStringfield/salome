'use client';

import { motion } from 'framer-motion';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';

export default function Loading() {
  return (
    <MaxWidthContainer className='min-h-screen flex items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='flex flex-col items-center gap-4'
      >
        <div className='flex gap-2'>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8 }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className='w-4 h-4 bg-brand rounded-full'
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className='text-brand-emphasis font-medium'
        >
          Loading...
        </motion.div>
      </motion.div>
    </MaxWidthContainer>
  );
}
