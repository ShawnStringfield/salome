import React from 'react';
import { Container } from '@chakra-ui/react';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export const MaxWidthContainer = ({ children, className }: Props) => {
  return (
    <Container className={className} maxW={1440} w={'fit-content'} p={16}>
      {children}
    </Container>
  );
};
