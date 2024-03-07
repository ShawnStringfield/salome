import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(['menu', 'list', 'item']);

export const Menu = helpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      boxShadow: 'lg',
      rounded: 'lg',
      borderRadius: 'xl',
      flexDirection: 'column',
      py: '2',
      
    },
    list: {
      p: '2',
      borderRadius: 'md',
    },
    item: {
      lineHeight: 'normal',
      padding: '10px',
      borderRadius: 'md',
      _hover: {
        bg: 'blue.100',
      },
      _focus: {
        bg: 'blue.100',
      }
    },
  },
});