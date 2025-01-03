import { motion } from 'framer-motion';

import { TbRulerMeasure } from 'react-icons/tb';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

const getIcon = (icon: string) => {
  const color = 'text-slate-400';
  switch (icon) {
    case 'TbRulerMeasure':
      return (
        <div className='flex justify-center sm:justify-start mb-4'>
          <TbRulerMeasure className={`text-4xl ${color}`} />
        </div>
      );
    case 'TbPhotoEdit':
      return (
        <div className='flex justify-center sm:justify-start mb-4'>
          <TbPhotoEdit className={`text-4xl ${color}`} />
        </div>
      );
    case 'RiPagesLine':
      return (
        <div className='flex justify-center sm:justify-start mb-4'>
          <RiPagesLine className={`text-4xl ${color}`} />
        </div>
      );
    case 'CgWebsite':
      return (
        <div className='flex justify-center sm:justify-start mb-4'>
          <CgWebsite className={`text-4xl ${color}`} />
        </div>
      );
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
  return (
    <>
      <h2 className='text-5xl lg:hidden mb-8 text-center '>Services</h2>
      <h2 className='text-4xl text-center md: lg:hidden mb-16'>{servicesTagline}</h2>
      <div className='flex'>
        <div className='mr-8 hidden lg:block'>
          <h4>Services</h4>
          <h2 className='text-5xl'>{servicesTagline}</h2>
        </div>

        <div className='block sm:grid grid-cols-2 gap-8'>
          {services?.map((service, index) => {
            return (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={index}>
                <div className='pb-16 sm:pb-8 text-center sm:text-left'>
                  {getIcon(service.icon)}
                  <h6 className='text-2xl mb-2'>{service.title}</h6>
                  <p className=''>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};
