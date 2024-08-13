import React from 'react';
import { motion } from 'framer-motion';
import { MaxWidthContainer } from '../blocks/MaxWidthContainer';
import { AvatarImg } from '../Avatar';

type Props = {
  title: string;
  subtext: string;
  actions?: React.ReactNode;
  variant?: string;
};

export const Hero = ({ title, subtext, actions }: Props) => {
  return (
    <MaxWidthContainer>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1, ease: 'linear' }}
        >
          <div className='flex justify-center'>
            <AvatarImg />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'linear' }}
      >
        <div className='flex justify-center'>
          <div>
            <div className='text-center my-8'>
              <h1 className='mb-4'>{title}</h1>
              <p>{subtext}</p>
            </div>
            <div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
                {actions ? actions : null}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </MaxWidthContainer>
  );
};
