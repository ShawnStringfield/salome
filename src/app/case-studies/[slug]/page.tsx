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
    <div className='min-h-screen bg-slate-50'>
      <MaxWidthContainer className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Hero Section */}
        <div className='py-16'>
          <h1 className='text-6xl font-bold text-slate-900 mb-6'>{caseStudy.title}</h1>
        </div>
      </MaxWidthContainer>

      {/* Project Screenshot */}
      <div className='relative w-full bg-slate-100 pt-24'>
        <div className='relative max-w-4xl mx-auto px-8'>
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

      {/* Metadata Section */}
      <div className='border-t border-b border-slate-200 bg-white'>
        <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl'>
          <dl className='grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-6 py-12 justify-items-center'>
            {Object.entries(caseStudy.metadata).map(([key, value]) => (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                key={key}
                className='space-y-2 text-left'
              >
                <dt className='text-sm font-medium text-slate-500 uppercase'>{key}</dt>
                <dd className='text-base font-medium text-slate-900'>{String(value)}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      <MaxWidthContainer className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Client Information */}
        <section className='py-20'>
          <div>
            <h2 className='text-4xl font-bold mb-8 text-slate-900'>
              {caseStudy.clientInformation.title}
            </h2>
            <p className='text-xl text-slate-600 leading-relaxed'>
              {caseStudy.clientInformation.content}
            </p>
          </div>
        </section>

        {/* Project Overview */}
        <section className='py-20'>
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

            <div className='bg-slate-50 p-8 rounded-xl'>
              <h3 className='text-2xl font-bold mb-4 text-slate-900'>Outcome</h3>
              <p className='text-lg text-slate-700'>{caseStudy.projectOverview.outcome}</p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className='py-20'>
          <h2 className='text-4xl font-bold mb-12 text-slate-900'>
            {caseStudy.problemStatement.title}
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {caseStudy.problemStatement.challenges.map((challenge, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                key={index}
                className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-200'
              >
                <div className='flex items-center mb-6'>
                  <span className='w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mr-4'>
                    <span className='text-xl font-bold text-slate-600'>{index + 1}</span>
                  </span>
                  <h3 className='text-2xl font-bold text-slate-900'>{challenge.title}</h3>
                </div>
                <p className='text-lg text-slate-600 leading-relaxed'>{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className='py-20'>
          <h2 className='text-4xl font-bold mb-8 text-slate-900'>{caseStudy.solution.title}</h2>
          <p className='text-xl text-slate-600 mb-16 max-w-4xl'>{caseStudy.solution.intro}</p>

          <div className='bg-slate-900 text-white rounded-2xl p-12 mb-16'>
            <h3 className='text-3xl font-bold mb-12'>{caseStudy.solution.technicalStack.title}</h3>
            <div className='grid md:grid-cols-2 gap-8'>
              {caseStudy.solution.technicalStack.items.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  key={index}
                  className='bg-slate-800/50 backdrop-blur-lg p-6 rounded-xl hover:bg-slate-800/70 transition-colors duration-300'
                >
                  <h4 className='text-xl font-bold mb-3'>{item.name}</h4>
                  <p className='text-slate-300'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
}
