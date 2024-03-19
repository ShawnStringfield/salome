import { extendTheme } from '@chakra-ui/react';
import { Menu } from './menuTheme';
import { Avatar } from './avatarTheme';
import { Container } from './containerTheme';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'gray.600',
      }
    }
  },
  colors: {},
  components: {
    Container,
    Avatar,
    Menu,
  },
});
