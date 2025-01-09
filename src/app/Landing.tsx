'use client';

import React, { useEffect, useState } from 'react';
import { Services } from './components/sections/Services';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { ContactForm } from './components/sections/ContactForm';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './components/sections/ProjectCard';

type LandingData = {
  name?: string;
  title?: string;
  tagline?: string;
  subTagline?: string;
  servicesTagline?: string;
  whyChooseUsDescription?: string;
  services?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  whyChooseUs?: Array<{
    title: string;
    description: string;
  }>;
};

type LandingDataTypes = {
  landingData: LandingData;
};

export const Landing = ({ landingData }: LandingDataTypes) => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const work = await fetch('/work.json');
      const workData = await work.json();
      setWork(workData.portfolio);
    };
    fetchData();
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <MaxWidthContainer>
          <HeroSplit title={landingData.title} tagline={landingData.tagline} subTagline={landingData.subTagline} />
        </MaxWidthContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='bg-slate-200 bg-[url("/radial.svg")] bg-cover py-8'>
          <MaxWidthContainer>
            <Services services={landingData.services ?? []} servicesTagline={landingData.servicesTagline || ''} />
          </MaxWidthContainer>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div>
          {work.map((item: any, index: number) => (
            <ProjectCard
              key={index}
              company={item.company}
              link={item.link}
              image={item.image}
              alt={item.alt}
              dateCreated={item.dateCreated}
              tech={item.tech}
              index={index}
              isLast={index === work.length - 1}
            />
          ))}
        </div>
      </motion.div>

      <div className='bg-slate-200' id={'contact'}>
        <MaxWidthContainer>
          <ContactForm title="Let's Create Something Together" />
        </MaxWidthContainer>
      </div>
    </>
  );
};
