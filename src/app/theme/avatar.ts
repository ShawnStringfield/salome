import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const big = defineStyle({
  width: 175,
  height: 175,
  fontSize: "6xl"
});

const sizes = {
  big: definePartsStyle({ container: big }),
};


const baseStyle = definePartsStyle({
  container: {
    bg: 'brand.400',
    color: 'brand.400',
    border: '2px solid white',
  },
});

export const Avatar = defineMultiStyleConfig({ baseStyle, sizes });
