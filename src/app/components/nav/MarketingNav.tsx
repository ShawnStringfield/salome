import { Box, Flex, Text, Button, chakra } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { MaxWidthContainer } from '../blocks/MaxWidthContainer';
import Link from 'next/link';

export const MarketingNav = () => {
  const pathname = usePathname();
  const MaxContainer = chakra(MaxWidthContainer);

  return (
    <MaxContainer w={'auto'} pt={[8, 8, 8]} pb={[0, 0, 0]} textAlign={['center', 'left', 'left']} fontSize={'sm'}>
      <Flex justify={'space-between'}>
        <Box>
          <Link href={'/'}>
            <Text color={'slate.400'}>Freelance Designer // Developer</Text>
          </Link>
        </Box>
        <Box>
          <Link href={'/resume'}>
            <Button _hover={{ bg: 'slate.200' }} color='blue.500' variant={'ghost'} size={'sm'}>
              <Box color={`${pathname === '/resume' ? 'blue.300' : ''} `}>Resume</Box>
            </Button>
          </Link>
          <Link href={'/contact'}>
            <Button _hover={{ bg: 'slate.200' }} color='blue.500' variant={'ghost'} size={'sm'}>
              <Box color={`${pathname === '/contact' ? 'blue.300' : ''} `}>Contact</Box>
            </Button>
          </Link>
        </Box>
      </Flex>
    </MaxContainer>
  );
};
