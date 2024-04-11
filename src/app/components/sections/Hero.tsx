import React from 'react';
import { Heading, Text, Box, Container, Avatar } from '@chakra-ui/react';
import { colors } from '../../theme/colorScheme';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  subtext: string;
  actions?: React.ReactNode;
  variant?: string;
};

export const Hero = ({ title, subtext, actions, variant = 'slate' }: Props) => {
  return (
    <Container bg={colors[variant].bgColor} py={[8, 12, 24, 24]} w={['full']}>
      <Container maxW={1024} w={['85%', '90%', '80%']}>
        <Box as="div" textAlign={'center'} mb={8}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.25, duration: 1, ease: 'linear' }}>
            <Avatar src="me.jpg" size={'2xl'} />
          </motion.div>
        </Box>
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, ease: 'linear' }}>
          <Box as="div">
            <Heading color={colors[variant].heroHeaderColor} as="h1" size="h1" textAlign="center" lineHeight={'none'} my={-1}>
              {title}
            </Heading>
          </Box>
          <Box as="div" mt={8} mb={actions ? 8 : 0}>
            <Text align="center" fontSize={['md', 'lg', '2xl']} color={colors[variant].heroHeaderSubColor}>
              {subtext}
            </Text>
          </Box>
          <Box textAlign="center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }}>
              {actions ? actions : null}
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Container>
  );
};
