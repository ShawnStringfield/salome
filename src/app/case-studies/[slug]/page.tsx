'use client';

import { useEffect, useState } from 'react';
import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import type { PortfolioItem, WorkData } from '@/app/types/work';
import Image from 'next/image';
import { Button } from '@/app/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

// Validate if a slug is a valid case study
function isValidCaseStudy(workData: WorkData | null, slug: string): boolean {
  if (!workData) return false;
  const cleanSlug = slug.replace('/case-studies/', '');
  return workData.portfolio.some(
    (item: PortfolioItem) => item.link === `/case-studies/${cleanSlug}` && item.hasCaseStudy
  );
}

function getCaseStudy(workData: WorkData | null, slug: string): PortfolioItem | null {
  if (!workData) return null;
  const cleanSlug = slug.replace('/case-studies/', '');
  return (
    workData.portfolio.find(
      (item: PortfolioItem) => item.link === `/case-studies/${cleanSlug}` && item.hasCaseStudy
    ) || null
  );
}

export default function Page({ params }: PageProps): JSX.Element {
  const [workData, setWorkData] = useState<WorkData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkData() {
      try {
        const response = await fetch('/work.json');
        const data = await response.json();
        setWorkData(data);

        // Validate the case study after fetching data
        if (!isValidCaseStudy(data, params.slug)) {
          notFound();
        }
      } catch (error) {
        console.error('Error fetching work data:', error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    }

    fetchWorkData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <MaxWidthContainer className='min-h-screen flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className='flex flex-col items-center gap-4'
        >
          <div className='flex gap-2'>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.2, 0.8] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
                className='w-4 h-4 bg-brand rounded-full'
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.2 }}
            className='text-brand-emphasis font-medium'
          >
            Loading...
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    );
  }

  const project = getCaseStudy(workData, params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className='min-h-screen'>
      <MaxWidthContainer className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Hero Section */}
        <div className='py-16 text-center'>
          <h1 className='text-4xl sm:text-6xl mb-4'>{caseStudy.title}</h1>
        </div>
      </MaxWidthContainer>

      {/* Project Screenshot with Metadata */}
      <div className='relative w-full bg-slate-200 pt-16 px-8'>
        <div className='relative max-w-4xl mx-auto '>
          {/* Metadata Section */}
          <dl className='grid grid-cols-2 gap-6 mb-4'>
            {Object.entries(caseStudy.metadata)
              .filter(([key]) => key === 'date' || key === 'duration')
              .map(([key, value]) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  key={key}
                  className={`flex flex-col ${key === 'date' ? 'items-start' : 'items-end'}`}
                >
                  <dt className='text-sm font-medium  uppercase mb-1'>{key}</dt>
                  <dd className='text-base font-medium text-brand-emphasis'>{String(value)}</dd>
                </motion.div>
              ))}
          </dl>

          <div className='overflow-hidden'>
            <div className='relative -mb-10'>
              <Image
                src={project.image}
                alt={project.alt}
                width={1200}
                height={675}
                className='w-full object-cover rounded-t-lg shadow-xl'
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <MaxWidthContainer className='mx-auto sm:px-6 lg:px-8 max-w-7xl mt-8 px-8'>
        {/* Client Information */}
        <section className='py-16'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-bold mb-8'>{caseStudy.clientInformation.title}</h2>
            <p className='text-lg sm:text-xl leading-relaxed mb-8'>
              {caseStudy.clientInformation.content}
            </p>
            {project.websiteUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Button asChild variant='link' size='lg' className='text-lg font-medium p-0 group'>
                  <a
                    href={project.websiteUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center'
                  >
                    <span>Visit Website</span>
                    <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Overview */}
        <section className='py-12'>
          <div className='max-w-4xl mx-auto'>
            <div className='sm:bg-white sm:rounded-2xl sm:shadow-sm sm:p-12 sm:border sm:border-slate-200'>
              <h2 className='text-4xl font-bold mb-8'>{caseStudy.projectOverview.title}</h2>
              <p className='text-xl text-slate-600 mb-12 leading-relaxed'>
                {caseStudy.projectOverview.summary}
              </p>

              <div className='mb-12'>
                <h3 className='text-2xl font-bold mb-6 '>Project Goals</h3>
                <ul className='grid gap-4'>
                  {caseStudy.projectOverview.goals.map((goal: string, index: number) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className='flex items-start space-x-3'
                    >
                      <span className='flex-shrink-0 w-6 h-6 rounded-full bg-brand-subtle/50 flex items-center justify-center mt-1'>
                        <span className='w-2 h-2 rounded-full bg-brand' />
                      </span>
                      <span className='text-lg text-slate-700'>{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className='-mx-4 sm:-mx-12 sm:bg-slate-800 px-4 sm:px-12 py-8 border-t sm:border-b sm:border-slate-700/60'>
                <div className='max-w-none'>
                  <h3 className='text-2xl font-bold mb-4 sm:text-slate-200'>Outcome</h3>
                  <p className='text-lg sm:text-slate-300'>{caseStudy.projectOverview.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
}
