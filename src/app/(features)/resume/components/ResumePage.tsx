'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Hero } from '../../../components/sections/Hero';
import { FeatureText } from '../../../components/sections/FeatureText';
import Link from 'next/link';
import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';
import { formatShortDate } from '../../../utils/dates';
import { motion } from 'framer-motion';

type Experience = {
  map: (arg0: (exp: Experience, index: number) => import('react/jsx-runtime').JSX.Element) => JSX.Element[];
  jobTitle: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
};

type ResumeItem = {
  experience: Experience;
  jobTitle: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
};

const buttonActions = () => {
  return (
    <Link href='/resume.pdf'>
      <Button className='bg-secondary font-bold text-lg'>Download Resume</Button>
    </Link>
  );
};

export const ResumePage = () => {
  const [resume, setResume] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/resume.json');
      const data = await response.json();
      setResume(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}></motion.div>
      {Hero({
        title: 'Software Engineer',
        subtext:
          "Imagine a world where every website you visit feels like coming home - intuitive, cozy, and just what you need. That's the world I build as a Front-End Engineer.",
        actions: <div className='flex justify-center'>{buttonActions()}</div>,
      })}

      <MaxWidthContainer>
        <div className='block md:grid grid-cols-2 gap-8'>
          {resume.map((item: ResumeItem) =>
            item.experience.map((exp: Experience, index: number) => {
              return (
                <FeatureText
                  key={index}
                  title={exp.jobTitle}
                  subTitle={exp.company}
                  text={exp.description}
                  footerLeft={`${formatShortDate(exp.startDate)} - ${formatShortDate(exp.endDate)}`}
                  footerRight={exp.tools}
                />
              );
            })
          )}
        </div>
      </MaxWidthContainer>
    </>
  );
};
