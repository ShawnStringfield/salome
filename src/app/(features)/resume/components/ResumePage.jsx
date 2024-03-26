import { Container, Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import { jsonImporter } from '@/src/app/lib/jsonImporter';
import resumestyles from './resume.module.css';
import { formatShortDate } from '@/src/app/utils/dates';

export const ResumePage = async () => {
  const resume = await jsonImporter('/src/app/(features)/resume/api/resume.json');
  const { summary } = resume;

  const renderSkills = () => {
    return (
      <Box my={32}>
        <Heading as="h2" size={'h2'}>
          Skills
        </Heading>
        {resume.skills.map((skill, index) => {
          const skills = skill[Object.keys(skill)];
          const heading = Object.keys(skill)[0];

          return (
            <Flex className={resumestyles.skillssection} key={index} align={'center'} my={4}>
              <Heading mr={2} as="h6" size={'h6'}>
                {heading}
              </Heading>
              <Box>
                {skills.map((skill) => (
                  <Tag mr={3} key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Box>
            </Flex>
          );
        })}
      </Box>
    );
  };

  const renderHistory = () => {
    return (
      <Box>
        <Heading as="h2" size={'h2'}>
          History
        </Heading>
        {resume.experience.map(({ jobTitle, company, startDate, endDate, description }, index) => {
          return (
            <Box my={20} key={index}>
              <Text fontSize={'sm'} color={'gray.500'}>
                {formatShortDate(startDate)} - {formatShortDate(endDate)}
              </Text>

              <Box>
                <Heading as="h6" size={'h6'} mb={4}>
                  {jobTitle}
                </Heading>
              </Box>

              <Text fontWeight={'bold'}>{company}</Text>
              <Text>{description}</Text>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <>
      <Container className={resumestyles.resumepage} maxW="2xl">
        <Box my={5}>
          <Heading as="h1" size="h1">
            Summary
          </Heading>
          <Box>{summary}</Box>
        </Box>
        {renderSkills()}
        {renderHistory()}
      </Container>
    </>
  );
};
