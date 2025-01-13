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
  showIcons = true,
}: {
  services: Array<{ title: string; description: string; icon: keyof typeof iconMap }>;
  servicesTagline: string;
  showIcons?: boolean;
}) => {
  return (
    <div className='min-h-[500px] flex flex-col gap-12 py-16 md:py-24'>
      <div className='max-w-4xl mx-auto px-8 w-full'>
        <div className='text-center mb-16'>
          <h4 className='text-brand-emphasis font-normal'>Services</h4>
          <h2 className='text-4xl md:text-5xl font-bold '>{servicesTagline}</h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
          {services?.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} key={index}>
                <div className='space-y-4 text-center sm:text-left'>
                  {showIcons && (
                    <div className='flex justify-center sm:justify-start'>
                      <Icon className='h-8 w-8 text-brand-emphasis -mb-2' strokeWidth={2} />
                    </div>
                  )}
                  <h6 className='text-2xl'>{service.title}</h6>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
