import { motion } from 'framer-motion';
import {
  Layout,
  Code2,
  FileCode,
  Globe,
  ChevronsLeftRightEllipsis,
  Braces,
  PanelsTopLeft,
  LayoutDashboard,
  SquareChartGantt,
} from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  FileCode: FileCode,
  Globe: Globe,
  ChevronsLeftRightEllipsis: ChevronsLeftRightEllipsis,
  Braces: Braces,
  PanelsTopLeft: PanelsTopLeft,
  LayoutDashboard: LayoutDashboard,
  SquareChartGantt: SquareChartGantt,
};

export const Services = ({
  services,
  servicesTagline,
}: {
  services: Array<{ title: string; description: string; icon: keyof typeof iconMap }>;
  servicesTagline: string;
}) => {
  return (
    <div className='min-h-[400px] flex flex-col lg:flex-row items-start lg:items-center gap-8'>
      <div className='lg:w-1/3 text-center lg:text-left mb-12 lg:mb-0'>
        <h4>Services</h4>
        <h2 className='text-4xl'>{servicesTagline}</h2>
      </div>

      <div className='block sm:grid grid-cols-2 gap-8 lg:w-2/3'>
        {services?.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={index}>
              <div className='text-left sm:text-left text-center my-12 sm:my-0 space-y-4'>
                <Icon
                  className='h-8 w-8 text-brand-emphasis mb-2 mx-auto sm:mx-0'
                  strokeWidth={2}
                />
                <h6 className='text-2xl'>{service.title}</h6>
                <p className=''>{service.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
