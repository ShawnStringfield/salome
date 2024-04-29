import { Flex, Heading, Box, Text, useMediaQuery, Card, CardBody } from '@chakra-ui/react';
import { colors } from '../../theme/colorScheme';
import { motion } from 'framer-motion';
import React from 'react';

type FeatureTextProps = {
  colorScheme?: string;
  title: string;
  text: string;
  subTitle?: React.ReactNode | string;
  footerLeft?: React.ReactNode | string;
  footerRight?: React.ReactNode | string;
};

export const FeatureText = ({
  title,
  text,
  subTitle,
  footerLeft,
  footerRight,
  colorScheme = 'blue',
}: FeatureTextProps) => {
  const [isMobile] = useMediaQuery('(min-width: 480px)');

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: 'linear' }}>
      <Card size={['sm', 'md', 'lg']} minH={250} fontSize={'16px'} lineHeight={'1.5rem'}>
        <CardBody>
          <Box>
            <Box>
              <Text fontSize='lg' color={colors[colorScheme].textColor} fontWeight={600}>
                {subTitle}
              </Text>
            </Box>
            <Box>
              <Heading as='h6' size='h6'>
                {title}
              </Heading>
            </Box>
            <Box my={4}>
              <Text>{text}</Text>
            </Box>
          </Box>
          {isMobile ? (
            <Flex>
              <Box>{footerLeft}</Box>
              <Flex flex={1} justifyContent={'flex-end'} color={colors[colorScheme].textColor}>
                <Text fontSize={'md'}>{footerRight}</Text>
              </Flex>
            </Flex>
          ) : (
            <Box>
              <Box>{footerLeft}</Box>
              <Box color={colors[colorScheme].textColor}>
                <Text fontSize={'md'}>{footerRight}</Text>
              </Box>
            </Box>
          )}
        </CardBody>
      </Card>
    </motion.div>
  );
};
