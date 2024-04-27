'use client';

import React, { useEffect, useState } from 'react';
import { Flex, Box, Heading, Text, useMediaQuery, SimpleGrid, AbsoluteCenter, Icon, chakra } from '@chakra-ui/react';
import { MaxWidthContainer } from './components/blocks/MaxWidthContainer';
import { HeroSplit } from './components/sections/HeroSplit';
import { TbRulerMeasure } from 'react-icons/tb';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

type LandingDataTypes = {
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

const getIcon = (icon: string) => {
  const color = 'slate.400';
  const iconSize = 32;
  switch (icon) {
    case 'TbRulerMeasure':
      return <Icon as={TbRulerMeasure} fontSize={iconSize} color={color} />;
    case 'TbPhotoEdit':
      return <Icon as={TbPhotoEdit} fontSize={iconSize} color={color} />;
    case 'RiPagesLine':
      return <Icon as={RiPagesLine} fontSize={iconSize} color={color} />;
    case 'CgWebsite':
      return <Icon as={CgWebsite} fontSize={iconSize} color={color} />;
    default:
      return null;
  }
};

export default function Home() {
  const [landingData, setLandingData] = useState<LandingDataTypes>({});
  const [landingError, setLandingError] = useState<Error | undefined>(undefined);
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [isTablet] = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const [isDesktop] = useMediaQuery('(min-width: 1025px)');

  const MaxContainer = chakra(MaxWidthContainer);
  const bottomMargin = 48;
  const gridSpacing = isDesktop ? 24 : 16;

  useEffect(() => {
    const fetchLandingData = async () => {
      try {
        const response = await fetch('/landing.json');
        setLandingData(await response.json());
      } catch (error) {
        if (error instanceof Error) {
          setLandingError(error);
        } else {
          setLandingError(new Error('An unknown error occurred'));
        }
      }
    };
    fetchLandingData();
  }, []);

  if (landingError) {
    return (
      <Box position={'relative'} h={'100vh'}>
        <AbsoluteCenter>
          <Heading as={'h6'} size={'h6'}>
            Error: {landingError.message}
          </Heading>
        </AbsoluteCenter>
      </Box>
    );
  }

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
          {isDesktop ? (
            <>
              <Flex align={'center'} h={500}>
                <Flex justify={'center'} align={'flex-start'}>
                  <Box mr={32}>
                    <Text fontSize={'xl'} as={'p'} fontWeight={'bold'}>
                      Services
                    </Text>
                    <Heading as={'h3'} size={'h3'}>
                      {landingData.servicesTagline}
                    </Heading>
                  </Box>

                  <SimpleGrid columns={2} spacing={gridSpacing}>
                    {landingData.services?.map((service, index) => {
                      return (
                        <Box key={index}>
                          {getIcon(service.icon)}
                          <Heading as={'h6'} size={'h6'} mb={4}>
                            {service.title}
                          </Heading>
                          <Text>{service.description}</Text>
                        </Box>
                      );
                    })}
                  </SimpleGrid>
                </Flex>
              </Flex>
            </>
          ) : (
            <></>
          )}

          {isTablet ? (
            <>
              <>
                <Box mb={8}>
                  <Heading as={'h2'} size={'h2'}>
                    Services
                  </Heading>
                </Box>

                <SimpleGrid columns={2} spacing={gridSpacing}>
                  {landingData.services?.map((service, index) => (
                    <Box key={index} mb={8}>
                      {getIcon(service.icon)}
                      <Heading as={'h6'} size={'h6'}>
                        {service.title}
                      </Heading>
                      <Text>{service.description}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </>
            </>
          ) : (
            <></>
          )}

          <Box>
            {isMobile ? (
              <>
                <Box mb={8}>
                  <Heading as={'h2'} size={'h2'}>
                    Services
                  </Heading>
                </Box>

                {landingData.services?.map((service, index) => (
                  <Box key={index} mb={8}>
                    {getIcon(service.icon)}
                    <Heading as={'h6'} size={'h6'}>
                      {service.title}
                    </Heading>
                    <Text>{service.description}</Text>
                  </Box>
                ))}
              </>
            ) : (
              <></>
            )}
          </Box>
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
        </MaxContainer>
      </Box>
    </>
  );
}
