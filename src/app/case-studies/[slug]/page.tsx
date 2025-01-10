import React from 'react';
import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '../config';
import type { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

// Validate if a slug is a valid case study
function isValidCaseStudy(slug: string): boolean {
  // Exclude icon and asset requests
  if (
    slug.endsWith('.ico') ||
    slug.endsWith('.png') ||
    slug.includes('favicon') ||
    slug.includes('apple-touch-icon')
  ) {
    return false;
  }
  return CASE_STUDIES.some(study => study.slug === slug);
}

function getCaseStudy(slug: string) {
  if (!isValidCaseStudy(slug)) {
    notFound();
  }
  const study = CASE_STUDIES.find(s => s.slug === slug);
  if (!study) {
    notFound();
  }
  return study;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const study = CASE_STUDIES.find(s => s.slug === params.slug);
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.caseStudy.title,
    description: study.caseStudy.projectOverview.summary,
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  const project = getCaseStudy(params.slug);
  const { caseStudy } = project;

  return (
    <div className='min-h-screen bg-white'>
      <MaxWidthContainer className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        {/* Hero Section */}
        <div className='py-16'>
          <h1 className='text-5xl font-bold text-slate-900 mb-6'>{caseStudy.title}</h1>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {Object.entries(caseStudy.metadata).map(([key, value]) => (
              <div key={key}>
                <p className='text-sm text-gray-500 uppercase mb-1'>{key}</p>
                <p className='text-lg font-medium'>{String(value)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Informations */}
        <section className='py-16 border-t border-gray-200'>
          <h2 className='text-3xl font-bold mb-8'>{caseStudy.clientInformation.title}</h2>
          <p className='text-lg text-gray-600 leading-relaxed'>
            {caseStudy.clientInformation.content}
          </p>
        </section>

        {/* Project Overview */}
        <section className='py-16 border-t border-gray-200'>
          <h2 className='text-3xl font-bold mb-8'>{caseStudy.projectOverview.title}</h2>
          <p className='text-lg text-gray-600 mb-8'>{caseStudy.projectOverview.summary}</p>

          <h3 className='text-xl font-semibold mb-4'>Project Goals</h3>
          <ul className='list-disc pl-6 space-y-2 mb-8'>
            {caseStudy.projectOverview.goals.map((goal: string, index: number) => (
              <li key={index} className='text-gray-600'>
                {goal}
              </li>
            ))}
          </ul>

          <div className='bg-slate-50 p-8 rounded-lg'>
            <h3 className='text-xl font-semibold mb-4'>Outcome</h3>
            <p className='text-gray-600'>{caseStudy.projectOverview.outcome}</p>
          </div>
        </section>

        {/* Problem Statement */}
        <section className='py-16 border-t border-gray-200'>
          <h2 className='text-3xl font-bold mb-8'>{caseStudy.problemStatement.title}</h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {caseStudy.problemStatement.challenges.map((challenge, index) => (
              <div key={index} className='bg-white p-8 rounded-lg border border-gray-200'>
                <h3 className='text-xl font-semibold mb-4'>{challenge.title}</h3>
                <p className='text-gray-600'>{challenge.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Solution */}
        <section className='py-16 border-t border-gray-200'>
          <h2 className='text-3xl font-bold mb-8'>{caseStudy.solution.title}</h2>
          <p className='text-lg text-gray-600 mb-12'>{caseStudy.solution.intro}</p>

          <h3 className='text-2xl font-semibold mb-8'>{caseStudy.solution.technicalStack.title}</h3>
          <div className='grid md:grid-cols-2 gap-8'>
            {caseStudy.solution.technicalStack.items.map((item, index) => (
              <div key={index} className='bg-slate-50 p-6 rounded-lg'>
                <h4 className='font-semibold mb-2'>{item.name}</h4>
                <p className='text-gray-600'>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className='py-16 border-t border-gray-200'>
          <h2 className='text-3xl font-bold mb-4'>{caseStudy.results.title}</h2>
          <p className='text-lg text-gray-600 mb-12'>{caseStudy.results.timeframe}</p>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className='text-center'>
                <p className='text-4xl font-bold text-slate-900 mb-2'>
                  {metric.value}
                  {metric.suffix}
                </p>
                <p className='text-gray-600'>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthContainer>
    </div>
  );
}
