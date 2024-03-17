import { extendTheme } from '@chakra-ui/react';
import { Menu } from './menuTheme';
import { Avatar } from './avatarTheme';
import { Container } from './containerTheme';

export const theme = extendTheme({
  colors: {},
  components: {
    Container,
    Avatar,
    Menu,
  },
});
