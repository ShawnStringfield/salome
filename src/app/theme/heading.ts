import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';

const baseStyle = defineStyle({
  fontFamily: 'heading',
  fontWeight: 'bold',
  color: 'slate.500',
  letterSpacing: [0, 0, 0, 0, 0, 0]
});

const sizes = {
  h1: defineStyle({
    fontSize: ['DisplayMd', 'DisplayLg', 'Display2xl'],
    lineHeight: [null, null, '1rem', '5rem', '5.625rem'],
  }),
  h2: defineStyle({
    fontSize: ['DisplaySm', 'DisplayLg', 'DisplayXl'],
    lineHeight: ['4.5rem'],
  }),
  h3: defineStyle({
    fontSize: ['DisplayMd', null, 'DisplayLg'],
    lineHeight: [null, null, '1rem', '3.25rem', '3.5rem'],
  }),
  h4: defineStyle({
    fontSize: ['DisplaySm', null, 'DisplayMd'],
    lineHeight: ['2.375rem'],
  }),
  h5: defineStyle({
    fontSize: ['DisplayXs', null, 'DisplaySm'],
    lineHeight: ['2rem'],
  }),
  h6: defineStyle({
    fontSize: ['DisplayXs', null, 'DisplayXs'],
    lineHeight: ['1.875rem'],
  }),
};

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
});
