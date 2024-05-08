'use client';

import React, { useState, useEffect } from 'react';
import { Container, /* Button, Flex,*/ SimpleGrid, Hide, Show, Box } from '@chakra-ui/react';
// import { Hero } from '../../../components/sections/Hero';
import { FeatureText } from '../../../components/sections/FeatureText';
// import Link from 'next/link';
import { formatShortDate } from '../../../utils/dates';
import { MarketingNav } from '../../../components/nav/MarketingNav';
import { motion } from 'framer-motion';
import { NavDrawer } from '../../../components/sections/NavDrawer';

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

// const buttonActions = () => {
//   return (
//     <Link href='/resume.pdf'>
//       <Button size={['md', 'lg', 'lg']} variant='brand'>
//         Download Resume
//       </Button>
//     </Link>
//   );
// };

export const ResumePage = () => {
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        <Show breakpoint={'(max-width: 431px)'}>
          <Box m={5}>
            <NavDrawer />
          </Box>
        </Show>
        <Hide breakpoint={'(max-width: 431px)'}>
          <MarketingNav />
        </Hide>
      </motion.div>
      {/* {Hero({
        title: 'Software Engineer',
        subtext:
          "Imagine a world where every website you visit feels like coming home - intuitive, cozy, and just what you need. That's the world I build as a Front-End Engineer.",
        actions: (
          <Flex gridGap={4} justify={'center'}>
            {buttonActions()}
          </Flex>
        ),
      })} */}
      <Container my={18} p={8} maxW={['full', 'full', '2xl']}>
        <SimpleGrid columns={[1, 2, 2]} spacing={8}>
          {resume.map((item: ResumeItem) =>
            item.experience.map((exp: Experience, index: number) => {
              return (
                <FeatureText
                  key={index}
                  title={exp.jobTitle}
                  subTitle={exp.company}
                  text={exp.description}
                  footerLeft={`${formatShortDate(exp.startDate)} - ${formatShortDate(exp.endDate)}`}
                  footerRight={exp.tools}
                />
              );
            })
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};
