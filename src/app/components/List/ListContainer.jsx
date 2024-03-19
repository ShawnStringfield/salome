import { Flex } from '@chakra-ui/react';

export const ListContainer = ({ children }) => {
  return (
    <Flex align={'center'} p={2} border={'1px'} borderColor={'gray.100'} my={5} borderRadius={'md'}>
      {children}
    </Flex>
  );
};
