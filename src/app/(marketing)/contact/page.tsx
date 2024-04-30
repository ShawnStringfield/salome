'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Flex, Center, Heading, Text, Hide, Show, chakra } from '@chakra-ui/react';
import { MaxWidthContainer } from '../../components/blocks/MaxWidthContainer';
import { MarketingNav } from '../../components/nav/MarketingNav';
import { sendEmail } from '../../emails/send';
import { motion } from 'framer-motion';
import { NavDrawer } from '../../components/sections/NavDrawer';

type Inputs = {
  name: string;
  email: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const MaxContainer = chakra(MaxWidthContainer);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('sent from client');
    sendEmail(data.name, data.email);
  };

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
      <MaxContainer w={'auto'}>
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
                  <Text>+1 (202) 215-1120</Text>
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
    </>
  );
}
