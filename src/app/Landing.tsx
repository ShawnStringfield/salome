'use client';

import React, { useEffect, useState } from 'react';
import { Services } from './components/sections/Services';
import { Box, Heading, Text, chakra } from '@chakra-ui/react';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

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

  const MaxContainer = chakra(MaxWidthContainer);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <MaxContainer>
          <HeroSplit
            tagLineColor={'blue.500'}
            subTagLineColor={'slate.500'}
            title={landingData.title}
            tagline={landingData.tagline}
            subTagline={landingData.subTagline}
            pulseColor={'blue.500'}
          />
        </MaxContainer>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box
          bg={'slate.200'}
          backgroundSize={'cover'}
          backgroundImage="url('/radial.svg')"
          backgroundPosition='left top'
          backgroundRepeat='no-repeat'
          backgroundBlendMode={'normal'}
          py={8}
        >
          <MaxContainer>
            <Services services={landingData.services ?? []} servicesTagline={landingData.servicesTagline || ''} />
          </MaxContainer>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='container mx-auto justify-center sm:flex gap-8 px-8 sm:px-8'>
          {work.map((item: any, index) => {
            return (
              <Box key={index}>
                <div className='container mx-auto py-16'>
                  <div className='flex'>
                    <Heading as={'h6'} size={'h6'} className='mb-4 w-3/4'>
                      {item.company}
                    </Heading>
                    <p className='text-sm mb-4 self-center justify-end w-1/4 text-right'>{item.dateCreated}</p>
                  </div>
                  <Link target='_blank' href={item.link}>
                    <div className='rounded-md border-2 border-slate-200'>
                      <Image width={600} height={0} src={item.image} alt={item.company} className='rounded-md' />
                    </div>
                  </Link>
                </div>
              </Box>
            );
          })}
        </div>
      </motion.div>

      <Box bg={'slate.200'} id={'contact'}>
        <MaxContainer textAlign={'center'}>
          <Heading as={'h4'} size={'h4'}>
            {'Let’s Create Something Together'}
          </Heading>
          <Text my={2}>Phone: +1 (202) 215-1120</Text>
          <Text>
            <a href='mailto:info@shawnstringfield.com'>info@shawnstringfield.com</a>
          </Text>
        </MaxContainer>
      </Box>
    </>
  );
};
