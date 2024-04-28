'use client';

import React from 'react';
import { Services } from './components/sections/Services';
import { Box, Heading, Text, SimpleGrid, Flex, Center, Hide, chakra } from '@chakra-ui/react';
import { sendEmail } from './emails/send';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type LandingData = {
  name?: string;
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

type Inputs = {
  name: string;
  email: string;
};

export const Landing = ({ landingData }: LandingDataTypes) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('sent from client');
    sendEmail(data.name, data.email);
  };

  const MaxContainer = chakra(MaxWidthContainer);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box>
          <MaxContainer>
            <HeroSplit
              tagLineColor={'blue.500'}
              subTagLineColor={'slate.500'}
              name={landingData.name}
              tagline={landingData.tagline}
              subTagline={landingData.subTagline}
              pulseColor={'blue.500'}
            />
          </MaxContainer>
        </Box>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Box bg={'slate.200'} my={[0, 0, 20]} py={[12, 8, 12]}>
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
                  <Heading as={'h6'} size={'h6'}>
                    {whyChooseUs.title}
                  </Heading>
                  <Text>{whyChooseUs.description}</Text>
                </Box>
              ))}
            </SimpleGrid>
          </MaxContainer>
        </Box>
      </motion.div>

      <Hide>
        <Box>
          <MaxContainer w={'auto'} textAlign={'left'}>
            <Center>
              <Box w={['md', 'lg', 'xl']}>
                <Heading as={'h3'} size={'h3'} mb={8}>
                  Let’s Create Something Together
                </Heading>

                <Box>
                  <Flex gap={16}>
                    <Text>
                      Ready to elevate your digital presence? Contact us today to start your journey with [Your Agency
                      Name], where technology meets humanity.
                    </Text>
                    <Box>
                      {' '}
                      <Text>+1.202.215.1120</Text>
                      <Text>info@shawnstringfield.com</Text>
                    </Box>
                  </Flex>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('name')} type='text' placeholder='Name' />
                    <input {...register('email')} type='email' placeholder='Email' />
                    <input type='submit' />
                  </form>
                </Box>
              </Box>
            </Center>
          </MaxContainer>
        </Box>
      </Hide>

      <Box bg={'slate.200'}>
        <MaxContainer textAlign={'center'}>
          <Heading as={'h3'} size={['xl', '2xl', '3xl']} color={'slate.500'} mb={8}>
            info@shawnstringfield.com
          </Heading>
          <Heading as={'h3'} size={['xl', '2xl', '3xl']} color={'blue.500'}>
            +1 202.215.1120
          </Heading>

          <Center mt={8}>
            <Link href='https://www.linkedin.com/in/shawnstringfield' target='_blank'>
              <Image src='/linkedin.svg' alt='linkedin' width={50} height={50} />
            </Link>
          </Center>
        </MaxContainer>
      </Box>
    </>
  );
};
