'use client';

import React from 'react';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { sendEmail } from '../../emails/send';
// import { motion } from 'framer-motion';

// type Inputs = {
//   name: string;
//   email: string;
//   message: string;
// };

export default function Contact() {
  // const { register, handleSubmit } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  //   sendEmail(data.name, data.email);
  // };

  return (
    <>
      {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
      <></>
      </motion.div>
      <MaxContainer w={'auto'}>
        <Center mt={48}>
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
              </Flex>

              <Box mt={16}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box my={8}>
                    <Text size={'lg'} mb={4}>
                      Name
                    </Text>
                    <Input bg={'white'} {...register('name')} type='text' placeholder='Name' />
                  </Box>

                  <Box my={8}>
                    <Text size={'lg'} mb={4}>
                      Email
                    </Text>
                    <Input bg={'white'} {...register('email')} type='email' placeholder='Email' />
                  </Box>

                  <Box my={8}>
                    <Text size={'lg'} mb={4}>
                      Message
                    </Text>
                    <Textarea h={200} bg={'white'} placeholder='Message' />
                  </Box>

                  <input type='submit' />
                </form>
              </Box>
            </Box>
          </Box>
        </Center>
      </MaxContainer> */}
    </>
  );
}
