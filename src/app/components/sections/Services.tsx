import { Flex, Box, Heading, Text, useMediaQuery, SimpleGrid, Icon, Show } from '@chakra-ui/react';

import { TbRulerMeasure } from 'react-icons/tb';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

const getIcon = (icon: string) => {
  const color = 'slate.400';
  const iconSize = 32;
  switch (icon) {
    case 'TbRulerMeasure':
      return <Icon as={TbRulerMeasure} fontSize={iconSize} color={color} />;
    case 'TbPhotoEdit':
      return <Icon as={TbPhotoEdit} fontSize={iconSize} color={color} />;
    case 'RiPagesLine':
      return <Icon as={RiPagesLine} fontSize={iconSize} color={color} />;
    case 'CgWebsite':
      return <Icon as={CgWebsite} fontSize={iconSize} color={color} />;
    default:
      return null;
  }
};

export const Services = ({
  services,
  servicesTagline,
}: {
  services: Array<{ icon: string; title: string; description: string }>;
  servicesTagline: string;
}) => {
  const [isDesktop] = useMediaQuery('(min-width: 1025px)');
  const gridSpacing = isDesktop ? 24 : 16;
  const mobileGridPadding = 12;

  const servicesMobileView = () => {
    return (
      <Box p={4}>
        <Box>
          <Heading as={'h2'} size={'h2'}>
            Services
          </Heading>
        </Box>

        <SimpleGrid columns={[1, 2]} spacing={gridSpacing}>
          {services?.map((service, index) => (
            <Box key={index}>
              {getIcon(service.icon)}
              <Heading as={'h6'} size={'h6'}>
                {service.title}
              </Heading>
              <Text>{service.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  const servicesTabletView = () => {
    return (
      <Box>
        <Box>
          <Heading as={'h2'} size={'h2'}>
            Services
          </Heading>
        </Box>

        <SimpleGrid columns={2} spacing={gridSpacing}>
          {services?.map((service, index) => (
            <Box key={index} my={mobileGridPadding}>
              {getIcon(service.icon)}
              <Heading as={'h6'} size={'h6'}>
                {service.title}
              </Heading>
              <Text>{service.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    );
  };

  const servicesDesktopView = () => {
    return (
      <Flex align={'center'} h={500}>
        <Flex justify={'center'} align={'flex-start'}>
          <Box mr={32}>
            <Text fontSize={'xl'} as={'p'} fontWeight={'bold'}>
              Services
            </Text>
            <Heading as={'h3'} size={'h3'}>
              {servicesTagline}
            </Heading>
          </Box>

          <SimpleGrid columns={2} spacing={gridSpacing}>
            {services?.map((service, index) => {
              return (
                <Box key={index}>
                  {getIcon(service.icon)}
                  <Heading as={'h6'} size={'h6'} mb={4}>
                    {service.title}
                  </Heading>
                  <Text>{service.description}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    );
  };

  return (
    <>
      <Show breakpoint={'(min-width: 1025px)'}>{servicesDesktopView()}</Show>
      <Show breakpoint={'(min-width: 768px) and (max-width: 1024px)'}>{servicesTabletView()}</Show>
      <Show breakpoint={'(max-width: 768px)'}>{servicesMobileView()}</Show>
    </>
  );
};
