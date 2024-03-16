import { extendTheme } from '@chakra-ui/react';
import { Menu } from './menuTheme';
import { Avatar } from './avatarTheme';

export const theme = extendTheme({
  colors: {},
  components: {
    Avatar,
    Menu,
  },
});
