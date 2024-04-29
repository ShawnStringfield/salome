type Color = {
  textColor: string;
  bgColor: string;
  heroHeaderColor?: string;
  heroHeaderSubColor?: string;
};

export const colors: { [key: string]: Color } = {
  brand: {
    textColor: 'brand.500',
    bgColor: 'brand.900',
    heroHeaderColor: 'white',
    heroHeaderSubColor: 'brand.400',
  },
  blue: {
    textColor: 'blue.500',
    bgColor: 'blue.900',
    heroHeaderColor: 'white',
    heroHeaderSubColor: 'blue.400',
  },
  slate: {
    textColor: 'red',
    bgColor: 'slate.100',
    heroHeaderColor: 'slate.500',
    heroHeaderSubColor: 'slate.400',
  },
};
