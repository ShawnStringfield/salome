'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { Services } from './components/sections/Services';
import ProjectCard from './components/sections/ProjectCard';
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
        <div>
          {portfolio.map((item, index) => (
            <ProjectCard
              key={index}
              company={item.company}
              link={item.link}
              image={item.image}
              alt={item.alt}
              dateCreated={item.dateCreated}
              tech={item.tech}
              hasCaseStudy={item.hasCaseStudy}
              index={index}
              isLast={index === portfolio.length - 1}
            />
          ))}
        </div>
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
