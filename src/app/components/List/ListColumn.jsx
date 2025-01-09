import { Box } from '@chakra-ui/react';

export const ListColumn = ({ children, flexEnd }) => {
  return (
    <>
      {flexEnd ? (
        <Box
          display={'flex'}
          justifyContent={'flex-end'}
          flex={1}
          flexDirection={'column'}
          alignItems={'flex-end'}
        >
          {children}
        </Box>
      ) : (
        <Box display={'flex'} flex={1} flexDirection={'column'}>
          {children}
        </Box>
      )}
    </>
  );
};
