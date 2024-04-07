import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  header: {},
  body: {},
  footer: {},
});

const outline = definePartsStyle({
  container: {
    borderColor: 'slate.200',
    borderWidth: '1px',
    borderRadius: 'lg',
  },
  header: {},
  body: {},
  footer: {},
});

const sizes = {
  lg: definePartsStyle({
    container: {},
  }),
  md: definePartsStyle({
    container: {},
  }),
  sm: definePartsStyle({
    container: {
      fontSize: 'sm',
    },
  }),
};

export const Card = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    variant: 'outline',
  },
  variants: {
    outline,
  },
});
