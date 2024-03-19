import { Box, Text } from '@chakra-ui/react';

export const ListItem = ({ children, type }) => {
  const withText = () => (
    <Text fontSize={'xs'} color={'gray.500'}>
      {children}
    </Text>
  );

  return type === 'text' ? withText() : <Box>{children}</Box>;
};
