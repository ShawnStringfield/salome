import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Box,
  Flex,
  AbsoluteCenter,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

export const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  return (
    <>
      <Flex justify={'end'}>
        <Button bg={'none'} onClick={onOpen} p={2} _hover={{ bg: 'none' }} color={'slate.400'} fontSize={'40px'}>
          <IoIosMenu />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose} size={'full'}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <DrawerOverlay />
          <DrawerContent bg={'slate.800'}>
            <DrawerCloseButton color={'white'} />
            <DrawerBody>
              <Box position={'relative'} height={'100vh'}>
                <AbsoluteCenter>
                  <Link href={'/'}>
                    <Button
                      _active={{ bg: 'slate.800' }}
                      _hover={{ bg: 'slate.800' }}
                      color='blue.500'
                      variant={'ghost'}
                      size={'sm'}
                      my={4}
                    >
                      <Box color={`${pathname === '/' ? 'blue.300' : 'white'} `} fontSize={'40px'}>
                        Home
                      </Box>
                    </Button>
                  </Link>
                  <Link href={'/resume'}>
                    <Button
                      _active={{ bg: 'slate.800' }}
                      _hover={{ bg: 'slate.800' }}
                      color='blue.500'
                      variant={'ghost'}
                      size={'sm'}
                      my={4}
                    >
                      <Box color={`${pathname === '/resume' ? 'blue.300' : 'white'} `} fontSize={'40px'}>
                        Resume
                      </Box>
                    </Button>
                  </Link>
                  <Link href={'/contact'}>
                    <Button
                      _active={{ bg: 'slate.800' }}
                      _hover={{ bg: 'slate.800' }}
                      color='blue.500'
                      variant={'ghost'}
                      size={'sm'}
                      my={4}
                    >
                      <Box color={`${pathname === '/contact' ? 'blue.300' : 'white'} `} fontSize={'40px'}>
                        Contact
                      </Box>
                    </Button>
                  </Link>
                </AbsoluteCenter>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </motion.div>
      </Drawer>
    </>
  );
};
