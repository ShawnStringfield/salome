import { extendTheme } from '@chakra-ui/react';
import { Heading } from './headingTheme';
import { Menu } from './menuTheme';
import { Avatar } from './avatarTheme';
import { Container } from './containerTheme';
import { globals } from './foundations/globals';
import { colors } from './foundations/colors';
import { typography } from './foundations/typography';
import {sizes} from './foundations/sizes';

export const theme = extendTheme({
  styles: globals,
  sizes: sizes,
  colors: colors,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  components: {
    Container,
    Avatar,
    Menu,
    Heading,
  },
});
