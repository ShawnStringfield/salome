import { extendTheme } from '@chakra-ui/react';
import { Button } from './button';
import { Heading } from './heading';
import { Menu } from './menu';
import { Avatar } from './avatar';
import { Card } from './card';
import { Container } from './container';
import { globals } from './foundations/globals';
import { COLORS } from './foundations/colors';
import { shadows } from './foundations/shadows';
import { typography } from './foundations/typography';
import { sizes } from './foundations/sizes';

export const theme = extendTheme({
  styles: globals,
  sizes: sizes,
  colors: COLORS,
  shadows: shadows,
  fonts: typography.fonts,
  fontSizes: typography.fontSizes,
  components: {
    Container,
    Card,
    Avatar,
    Button,
    Menu,
    Heading,
  },
});
