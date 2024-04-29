import React from 'react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

type NavDrawerProps = {
  buttonText: string;
};

export const NavDrawer = ({ buttonText }: NavDrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>{buttonText}</Button>
      <Drawer isOpen={isOpen} placement='top' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>Body content goes here</DrawerBody>
          <DrawerFooter>Footer Content goes here</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
