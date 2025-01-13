import { Card, CardContent, CardFooter, CardHeader } from '@/app/components/ui/card';

import { motion } from 'framer-motion';
import React from 'react';

type FeatureTextProps = {
  colorScheme?: string;
  title: string;
  text: string;
  subTitle?: React.ReactNode | string;
  footerLeft?: React.ReactNode | string;
  footerRight?: React.ReactNode | string;
};

export const FeatureText = ({ title, text, subTitle, footerLeft }: FeatureTextProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'linear' }}
      className='h-full'
    >
      <Card className='bg-white shadow-sm hover:shadow-md transition-shadow h-full flex flex-col'>
        <CardHeader className='space-y-2'>
          <div className='text-brand-emphasis font-medium'>{subTitle}</div>
          <h4 className='text-xl font-semibold'>{title}</h4>
        </CardHeader>
        <CardContent className='flex-1'>
          <p className='text-slate-600 text-base leading-relaxed'>{text}</p>
        </CardContent>
        <CardFooter>
          <span className='text-sm text-slate-500'>{footerLeft}</span>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
