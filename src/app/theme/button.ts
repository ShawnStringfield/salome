import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle({
  borderRadius: 'md',
});

const brand = defineStyle({
  bg: 'hsla(27, 100%, 50%, 1)',
  color: 'white',
  _hover: { bg: 'hsla(27, 100%, 45%, 1)' },
  _focus: { boxShadow: 'outline' },
  _active: { bg: 'brand.800' },
});

const slate = defineStyle({
  color: 'slate.500',
  border: '1px solid',
  borderColor: 'slate.200',
  _hover: { bg: 'slate.200' },
  _focus: { boxShadow: 'outlineGray' },
  _active: { bg: 'slate.300' },
});

const white = defineStyle({
  bg: 'white',
  color: 'slate.500',
  border: '1px solid',
  borderColor: 'slate.300',
  _hover: { bg: 'slate.200' },
  _focus: { boxShadow: 'outlineGray' },
  _active: { bg: 'slate.200' },
});

const disabled = defineStyle({
  bg: 'slate.200',
  color: 'slate.400',
});

export const Button = defineStyleConfig({
  defaultProps: { variant: 'brand', size: 'md' },
  baseStyle,
  variants: {
    brand,
    disabled,
    slate,
    white,
  },
});
