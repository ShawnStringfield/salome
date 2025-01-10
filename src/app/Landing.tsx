'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { Services } from './components/sections/Services';
import { ProjectSlider } from './components/sections/ProjectSlider';
import { ContactForm } from './components/sections/ContactForm';
import work from '../../public/work.json';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface LandingData {
  title: string;
  tagline: string;
  subTagline: string;
  services?: Service[];
  servicesTagline?: string;
}

type LandingDataTypes = {
  landingData: LandingData;
};

export const Landing = ({ landingData }: LandingDataTypes) => {
  const portfolio = work.portfolio || [];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MaxWidthContainer>
          <HeroSplit
            title={landingData.title}
            tagline={landingData.tagline}
            subTagline={landingData.subTagline}
          />
        </MaxWidthContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='bg-slate-200 bg-[url("/radial.svg")] bg-cover py-8'>
          <MaxWidthContainer>
            <Services
              services={landingData.services ?? []}
              servicesTagline={landingData.servicesTagline || ''}
            />
          </MaxWidthContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ProjectSlider projects={portfolio} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className='bg-slate-200' id='contact'>
          <MaxWidthContainer>
            <ContactForm title="Let's Create Something Together" />
          </MaxWidthContainer>
        </div>
      </motion.div>
    </>
  );
};
