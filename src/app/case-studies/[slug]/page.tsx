'use client';

import { useEffect, useState } from 'react';
import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import type { PortfolioItem, WorkData } from '@/app/types/work';
import Image from 'next/image';

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
      <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500'></div>
      </div>
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
          <h1 className='text-6xl mb-4'>{caseStudy.title}</h1>
        </div>
      </MaxWidthContainer>

      {/* Project Screenshot with Metadata */}
      <div className='relative w-full bg-slate-200 pt-16'>
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
                  <dt className='text-sm font-medium text-slate-500 uppercase mb-1'>{key}</dt>
                  <dd className='text-base font-medium text-slate-900'>{String(value)}</dd>
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

      <MaxWidthContainer className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-16'>
        {/* Client Information */}
        <section className='py-16'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-4xl font-bold mb-8 text-slate-900'>
              {caseStudy.clientInformation.title}
            </h2>
            <p className='text-xl text-slate-600 leading-relaxed'>
              {caseStudy.clientInformation.content}
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className='py-16'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-sm p-12 border border-slate-200'>
              <h2 className='text-4xl font-bold mb-8 text-slate-900'>
                {caseStudy.projectOverview.title}
              </h2>
              <p className='text-xl text-slate-600 mb-12 leading-relaxed'>
                {caseStudy.projectOverview.summary}
              </p>

              <div className='mb-12'>
                <h3 className='text-2xl font-bold mb-6 text-slate-900'>Project Goals</h3>
                <ul className='grid gap-4'>
                  {caseStudy.projectOverview.goals.map((goal: string, index: number) => (
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      key={index}
                      className='flex items-start space-x-3'
                    >
                      <span className='flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center mt-1'>
                        <span className='w-2 h-2 rounded-full bg-slate-600' />
                      </span>
                      <span className='text-lg text-slate-700'>{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className='-mx-12 bg-slate-800 px-12 py-8 border-t border-b border-slate-700/60'>
                <div className='max-w-none'>
                  <h3 className='text-2xl font-bold mb-4 text-slate-200'>Outcome</h3>
                  <p className='text-lg text-slate-300'>{caseStudy.projectOverview.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthContainer>

      {/* Visit Website Button */}
      <div className='py-16 text-center'>
        {project.websiteUrl && (
          <motion.a
            href={project.websiteUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>Visit Website</span>
            <svg
              className='ml-2 -mr-1 w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
          </motion.a>
        )}
      </div>
    </div>
  );
}
