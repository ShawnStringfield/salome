'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/app/components/ui/button';
import { Hero } from '../../../components/sections/Hero';
import { FeatureText } from '../../../components/sections/FeatureText';
import Link from 'next/link';
import { MaxWidthContainer } from '@/app/components/blocks/MaxWidthContainer';
import { formatShortDate } from '../../../utils/dates';

type Experience = {
  jobTitle: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
};

type ResumeData = {
  experience: Experience[];
};

const buttonActions = () => {
  return (
    <Link href='/resume.pdf'>
      <Button className='font-bold text-lg'>Download Resume</Button>
    </Link>
  );
};

export const ResumePage = () => {
  const [resume, setResume] = useState<ResumeData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/resume.json');
      const data = await response.json();
      setResume(data);
    };
    fetchData();
  }, []);

  return (
    <div className='min-h-screen'>
      <div className='pt-24'>
        {Hero({
          title: 'Software Engineer',
          actions: <div className='flex justify-center'>{buttonActions()}</div>,
        })}

        <MaxWidthContainer>
          <div className='px-4 md:px-8 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
              {resume.flatMap((item: ResumeData) =>
                item.experience.map((exp: Experience, index: number) => (
                  <FeatureText
                    key={index}
                    title={exp.jobTitle}
                    subTitle={exp.company}
                    text={exp.description}
                    footerLeft={`${formatShortDate(exp.startDate)} - ${formatShortDate(exp.endDate)}`}
                    footerRight={exp.tools}
                  />
                ))
              )}
            </div>
          </div>
        </MaxWidthContainer>
      </div>
    </div>
  );
};
