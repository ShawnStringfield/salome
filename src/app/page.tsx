'use client';

import { useState, useEffect } from 'react';
import { Container, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { Hero } from './components/sections/Hero';
import { FeatureText } from './components/sections/FeatureText';
import Link from 'next/link';
import { formatShortDate } from './utils/dates';

type Experience = {
  map: (arg0: (exp: Experience, index: number) => import('react/jsx-runtime').JSX.Element) => JSX.Element[];
  jobTitle: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
};

type ResumeItem = {
  experience: Experience;
  jobTitle: string;
  company: string;
  description: string;
  startDate: string;
  endDate: string;
  tools: string;
};

const buttonActions = () => {
  return (
    <Link href="/resume.pdf">
      <Button size={['md', 'lg', 'lg']} variant="brand">
        Download Resume
      </Button>
    </Link>
  );
};

export default function Home() {
  const [resume, setResume] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/resume.json');
      const data = await response.json();
      setResume(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {Hero({
        title: 'Software Engineer',
        subtext: 'Dynamic and innovative Front End Engineer with a passion for creating engaging user experiences and cutting-edge web applications. Leveraging expertise in modern web technologies and frameworks to deliver high-quality, responsive designs. Seeking to contribute technical proficiency and creativity to a forward-thinking team.',
        actions: (
          <Flex gridGap={4} justify={'center'}>
            {buttonActions()}
          </Flex>
        ),
      })}
      <Container my={18} p={8} maxW={['full', 'full', '3xl']}>
        <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          {resume.map((item: ResumeItem) =>
            item.experience.map((exp: Experience, index: number) => {
              return <FeatureText key={index} title={exp.jobTitle} subTitle={exp.company} text={exp.description} footerLeft={`${formatShortDate(exp.startDate)} - ${formatShortDate(exp.endDate)}`} footerRight={exp.tools} />;
            })
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
