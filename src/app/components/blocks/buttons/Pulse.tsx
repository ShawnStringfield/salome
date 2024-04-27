import React from 'react';
import { Box, Flex, AbsoluteCenter } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type PulseProps = {
  children?: React.ReactNode;
  size: string | number | (string | number)[];
  bgColor?: string;
  color?: string;
  borderStroke?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
};

export const Pulse = ({
  children,
  size,
  bgColor = 'tomato',
  color = 'white',
  borderStroke = 1,
  onClick,
  onMouseEnter,
}: PulseProps) => {
  const duration = 3.5;

  const MotionRing = (scale: number[]) => {
    return (
      <motion.div animate={{ scale: scale, opacity: 0 }} transition={{ duration: duration, repeat: Infinity }}>
        <AbsoluteCenter w={size} h={size} axis={'both'}>
          <Box
            position='absolute'
            top={0}
            left={0}
            right={0}
            bottom={0}
            borderRadius='full'
            borderColor={bgColor}
            borderWidth={borderStroke + 'px'}
            borderStyle={'solid'}
          />
        </AbsoluteCenter>
      </motion.div>
    );
  };

  return (
    <>
      <Flex position='absolute' onClick={onClick} onMouseEnter={onMouseEnter}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 2, type: 'spring', bounce: 0.75 }}
        >
          <AbsoluteCenter position={'absolute'} top={0} left={0} w={size} h={size} axis={'both'}>
            <Box
              position='absolute'
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg={bgColor}
              color={color}
              borderRadius={'full'}
            >
              {children}
            </Box>
          </AbsoluteCenter>

          {MotionRing([1, 1.1, 1])}
          {MotionRing([1, 1.2, 1])}
        </motion.div>
      </Flex>
    </>
  );
};
