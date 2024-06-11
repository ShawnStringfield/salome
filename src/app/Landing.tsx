'use client';

import React, { useEffect, useState } from 'react';
import { Services } from './components/sections/Services';
import { Box, Heading, Text, Hide, chakra, Show } from '@chakra-ui/react';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { motion } from 'framer-motion';
import { MarketingNav } from './components/nav/MarketingNav';
import { NavDrawer } from './components/sections/NavDrawer';
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
  console.log('work', work);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Show breakpoint={'(max-width: 431px)'}>
          <Box m={5}>
            <NavDrawer />
          </Box>
        </Show>
        <Hide breakpoint={'(max-width: 431px)'}>
          <MarketingNav />
        </Hide>
      </motion.div>
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
        <div className='container mx-auto justify-center flex'>
          {work.map((item: any, index) => {
            return (
              <Box key={index}>
                <div className='container mx-auto py-16'>
                  <div className='flex'>
                    <Heading as={'h5'} size={'h5'} className='mb-4 w-2/4'>
                      {item.company}
                    </Heading>
                    <Text className='mb-4 justify-end w-2/4 text-right'>{item.dateCreated}</Text>
                  </div>
                  <Link href={item.link}>
                    <Image width={600} height={0} src={item.image} alt={item.company} />
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
