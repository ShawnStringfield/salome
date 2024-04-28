'use client';

import React from 'react';
import { Box, AbsoluteCenter, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Box position={'relative'} h={'100vh'}>
      <AbsoluteCenter>
        <Spinner />
      </AbsoluteCenter>
    </Box>
  );
}
