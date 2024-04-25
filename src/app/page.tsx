'use client';

import { Container, Flex, Box, Heading, Avatar, Center } from '@chakra-ui/react';
import { Pulse } from './components/blocks/buttons/Pulse';

export default function Home() {
  return (
    <Container p={20}>
      <Center>
        <Flex align={'center'} maxWidth={'4xl'}>
          <Box>
            <Heading as={'h1'} mb={4} size={'2xl'}>
              Software Engineer
            </Heading>
            <Heading as={'h2'} size={'xl'} lineHeight={'2.5rem'} color={'white'}>
              Designing Digital Experiences That Engage: Turn Every Interaction into an Opportunity for Connection.
            </Heading>
          </Box>
          <Flex flex={1} align={'center'} justify={'center'} ml={'50px'}>
            <Box m={20}>
              <Pulse size={175} bgColor={'brand.500'} borderStroke={2}>
                <Avatar src={'me.jpg'} size={'big'} />
              </Pulse>
            </Box>
          </Flex>
        </Flex>
      </Center>
    </Container>
  );
}
