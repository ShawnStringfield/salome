'use client';

import React, { useEffect, useState } from 'react';
import { Services } from './components/sections/Services';
import { Box, Heading, Text, Hide, chakra, Show, SimpleGrid } from '@chakra-ui/react';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { motion } from 'framer-motion';
import { MarketingNav } from './components/nav/MarketingNav';
import { NavDrawer } from './components/sections/NavDrawer';

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
  const [resume, setResume] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/resume.json');
      const data = await response.json();
      setResume(data[0]);
    };
    fetchData();
  }, []);

  const MaxContainer = chakra(MaxWidthContainer);
  console.log('resume', resume);

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
        <Box my={[20, 24, 28]} px={4}>
          <MaxContainer>
            <Heading as={'h3'} size={'h3'} mb={8} textAlign={'left'}>
              Why Choose Us?
            </Heading>
            <Text mb={16}>{landingData.whyChooseUsDescription}</Text>
            <SimpleGrid columns={[0, 2]} spacing={20}>
              {landingData.whyChooseUs?.map((whyChooseUs, index) => (
                <Box key={index}>
                  <Heading as={'h6'} size={'h6'} mb={4}>
                    {whyChooseUs.title}
                  </Heading>
                  <Text>{whyChooseUs.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </MaxContainer>
        </Box>
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
