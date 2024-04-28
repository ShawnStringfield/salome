import React from 'react';
import { Container } from '@chakra-ui/react';

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export const MaxWidthContainer = ({ children, className }: Props) => {
  return (
    <Container className={className} maxW={1440} w={'fit-content'} px={[4, 4, 12, 16, 24]} py={[4, 4, 12, 16, 24]}>
      {children}
    </Container>
  );
};
