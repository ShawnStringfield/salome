import { motion } from 'framer-motion';

import { TbRulerMeasure } from 'react-icons/tb';
import { TbPhotoEdit } from 'react-icons/tb';
import { RiPagesLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

const getIcon = (icon: string) => {
  const color = 'text-slate-400';
  switch (icon) {
    case 'TbRulerMeasure':
      return <TbRulerMeasure className={`text-4xl ${color}`} />;
    case 'TbPhotoEdit':
      return <TbPhotoEdit className={`text-4xl ${color}`} />;
    case 'RiPagesLine':
      return <RiPagesLine className={`text-4xl ${color}`} />;
    case 'CgWebsite':
      return <CgWebsite className={`text-4xl ${color}`} />;
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
      <h2 className='text-5xl lg:hidden mb-8 text-center sm:text-left'>Services</h2>
      <div className='flex'>
        <div className='mr-8 hidden md:block'>
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
