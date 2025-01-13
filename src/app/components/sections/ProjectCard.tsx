import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCardProps {
  company: string;
  link: string;
  image: string;
  alt: string;
  dateCreated: string;
  tech: string[];
  index: number;
  isLast?: boolean;
  hasCaseStudy?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ProjectCard = ({
  company,
  link,
  image,
  alt,
  tech,
  isLast,
  hasCaseStudy,
  onPrevious,
  onNext,
}: ProjectCardProps) => {
  return (
    <div className='relative w-full bg-slate-100'>
      <div className='relative max-w-4xl mx-auto px-8'>
        {/* Content Section */}
        <div className='pt-24 md:pt-32'>
          {/* Tech Stack Pills and Case Study Button (Desktop) */}
          <div className='flex justify-between items-center mb-6'>
            <div className='flex flex-wrap gap-2'>
              {tech.map((item, index) => (
                <span
                  key={index}
                  className='px-4 py-1 rounded-full border border-brand-emphasis/30 text-brand-emphasis text-sm'
                >
                  {item}
                </span>
              ))}
            </div>
            {hasCaseStudy && (
              <Link href={link} className='hidden md:block'>
                <Button
                  variant='ghost'
                  className='group p-0 h-auto font-normal text-brand-emphasis hover:bg-transparent hover:opacity-100'
                >
                  View Case Study
                  <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                </Button>
              </Link>
            )}
          </div>

          {/* Project Title */}
          <div className='mb-4'>
            <div className='flex justify-between items-center'>
              <h2 className='text-3xl md:text-4xl font-bold'>{company}</h2>
              <div className='hidden md:flex gap-2'>
                <Button
                  variant='default'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={onPrevious}
                  aria-label='Previous project'
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <Button
                  variant='default'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={onNext}
                  aria-label='Next project'
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className='md:hidden flex justify-between items-center mt-4'>
              {hasCaseStudy && (
                <Link href={link}>
                  <Button
                    variant='link'
                    className='group p-0 h-auto font-normal  hover:text-brand-strong'
                  >
                    View Case Study
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </Button>
                </Link>
              )}
              <div className='flex gap-2 ml-auto'>
                <Button
                  variant='default'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={onPrevious}
                  aria-label='Previous project'
                >
                  <ChevronLeft className='h-4 w-4' />
                </Button>
                <Button
                  variant='default'
                  size='icon'
                  className='h-8 w-8 rounded-full'
                  onClick={onNext}
                  aria-label='Next project'
                >
                  <ChevronRight className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Screenshot with Link */}
        <div className='overflow-hidden'>
          <Link href={hasCaseStudy ? link : link} target={hasCaseStudy ? undefined : '_blank'}>
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
