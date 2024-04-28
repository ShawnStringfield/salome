'use client';

import React from 'react';
import { Services } from './components/sections/Services';
import { Box, Heading, Text, SimpleGrid, chakra } from '@chakra-ui/react';
import { sendEmail } from './emails/send';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';

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
  const bottomMargin = 48;

  return (
    <>
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

      <Box bg={'slate.200'} mb={bottomMargin} py={20}>
        <MaxContainer>
          <Services services={landingData.services ?? []} servicesTagline={landingData.servicesTagline || ''} />
        </MaxContainer>
      </Box>

      <Box mb={bottomMargin}>
        <MaxContainer>
          <Heading as={'h3'} size={'h3'} mb={8} textAlign={'center'}>
            Why Choose Us?
          </Heading>
          <Text mb={16}>{landingData.whyChooseUsDescription}</Text>
          <SimpleGrid columns={3} spacing={20}>
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

      <Box>
        <MaxContainer w={'auto'} textAlign={'center'}>
          <Heading as={'h3'} size={'h3'} mb={8}>
            Let’s Create Something Together
          </Heading>
          <Text>
            Ready to elevate your digital presence? Contact us today to start your journey with [Your Agency Name],
            where technology meets humanity.
          </Text>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('name')} type='text' placeholder='Name' />
              <input {...register('email')} type='email' placeholder='Email' />
              <input type='submit' />
            </form>
          </Box>
        </MaxContainer>
      </Box>
    </>
  );
};
