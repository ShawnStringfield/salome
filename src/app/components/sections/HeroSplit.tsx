import React from 'react';
import { Center, Heading, Text, Box, Flex, Avatar, useMediaQuery, Show, Button } from '@chakra-ui/react';
import { Pulse } from '../blocks/buttons/Pulse';

type HeroSplitProps = {
  tagline?: string;
  subTagline?: string;
  name?: string;
  tagLineColor?: string;
  subTagLineColor?: string;
  pulseColor?: string;
};

export const HeroSplit = ({ tagline, subTagline, name, tagLineColor, subTagLineColor, pulseColor }: HeroSplitProps) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const displayType = isMobile ? 'block' : 'flex';

  return (
    <>
      <Box display={displayType} py={[16, 16, 100, 100, 100, 150]} alignItems={'center'}>
        <Show breakpoint={'(min-width: 40px) and (max-width: 932px)'}>
          <Center px={8}>
            <Box m={['0', '75px', '90px', '125px', '150px']} mt={16} mb={20}>
              <Pulse size={150} bgColor={pulseColor} borderStroke={2}>
                <Avatar name={'Shawn Stringfield'} src={'me.jpg'} size={'full'} />
              </Pulse>
            </Box>
          </Center>
        </Show>
        <Show breakpoint={'(min-width: 1025px)'}>
          <Flex order={1} flex={1}>
            <Box m={['0', '75px', '90px', '125px', '150px']}>
              <Pulse size={[100, 125, 150, 200, 250]} bgColor={pulseColor} borderStroke={2}>
                <Avatar bg={'blue.200'} src={'me.jpg'} size={'full'} />
              </Pulse>
            </Box>
          </Flex>
        </Show>
        <Box>
          <Heading
            as={'h1'}
            mt={isMobile ? 8 : 0}
            mb={4}
            size={['xl', '2xl', '2xl', '3xl', '4xl']}
            textAlign={isMobile ? 'center' : 'left'}
          >
            {name}
          </Heading>
          <Heading
            as={'h2'}
            size={['md', 'lg', 'lg', 'xl', '2xl']}
            color={tagLineColor}
            textAlign={isMobile ? 'center' : 'left'}
            lineHeight={['1.75rem', '2rem', '3rem', '3.25rem', '3.5rem']}
          >
            <Text as={'span'} color={subTagLineColor}>
              {tagline}
              {tagline ? ':' : ''} {''}
            </Text>
            {subTagline}
          </Heading>
          <Flex justify={['center', 'center', 'left']}>
            <Button bg={'tomato'} size={'lg'} px={8} mt={8}>
              {"Let's Work Together"}
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
