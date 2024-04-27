import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    bg: 'slate.200',
    color: 'slate.200',
    border: '2px solid white',
  },
});

export const Avatar = defineMultiStyleConfig({ baseStyle });
