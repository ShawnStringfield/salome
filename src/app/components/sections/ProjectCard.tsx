import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  company: string;
  link: string;
  image: string;
  alt: string;
  dateCreated: string;
  tech: string[];
  index: number;
  isLast?: boolean;
}

const ProjectCard = ({ company, link, image, alt, dateCreated, tech, index, isLast }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative w-full ${isEven ? 'bg-slate-900' : 'bg-gray-50'}`}>
      <div className='relative max-w-4xl mx-auto px-8'>
        {/* Content Section */}
        <div className='pt-16 pb-8'>
          {/* Tech Stack Pills */}
          <div className='flex flex-wrap gap-2 mb-6'>
            {tech.map((item, index) => (
              <span
                key={index}
                className={`px-4 py-1 rounded-full border ${
                  isEven ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600'
                } text-sm`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Project Title and Date */}
          <div className='flex justify-between items-baseline mb-8'>
            <h2 className={`text-4xl font-bold ${isEven ? 'text-white' : 'text-slate-900'}`}>{company}</h2>
            <h5 className={isEven ? 'text-gray-400' : 'text-gray-500'}>{dateCreated}</h5>
          </div>
        </div>

        {/* Project Screenshot with Link */}
        <div className='overflow-hidden'>
          <Link href={link} target='_blank'>
            <div className='relative -mb-10'>
              <Image
                src={image}
                alt={alt}
                width={1200}
                height={675}
                className={`w-full object-cover rounded-t-lg ${!isLast ? 'shadow-xl' : ''}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
