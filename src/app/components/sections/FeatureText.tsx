import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

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
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'linear' }}>
      <Card className='mb-8 md:mb-0 text-slate-500 text-base min-h-72'>
        <CardHeader>
          <div className='text-primary -mb-2 font-bold'>{subTitle}</div>
          <h4>{title}</h4>
        </CardHeader>
        <CardContent>
          <div>{text}</div>
        </CardContent>
        <CardFooter>{footerLeft}</CardFooter>
      </Card>
    </motion.div>
  );
};
