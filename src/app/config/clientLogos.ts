export interface Logo {
  id: number;
  name: string;
  image: string;
}

export const clientLogos: Logo[] = [
  {
    id: 1,
    name: 'US News',
    image: '/client_logos/usnews.svg',
  },
  {
    id: 2,
    name: 'FINRA',
    image: '/client_logos/finra.svg',
  },
  {
    id: 3,
    name: 'FEVO',
    image: '/client_logos/fevo.svg',
  },
  {
    id: 4,
    name: 'CDC',
    image: '/client_logos/cdc.svg',
  },
  {
    id: 5,
    name: 'CVS',
    image: '/client_logos/cvs.svg',
  },
  {
    id: 6,
    name: 'AARP',
    image: '/client_logos/aarp.svg',
  },
  {
    id: 7,
    name: 'Ford',
    image: '/client_logos/ford.svg',
  },
];
