import { Container, Box, Flex, Heading, Tag, Text } from '@chakra-ui/react';
import { jsonImporter } from '@/src/app/lib/jsonImporter';
import resumestyles from './resume.module.css';

export const ResumePage = async () => {
  const resume = await jsonImporter('/src/app/(features)/resume/api/resume.json');
  const { summary } = resume;

  const renderSkills = () => {
    return (
      <Box className={resumestyles.skills}>
        <Heading as="h2">Skills</Heading>
        {resume.skills.map((skill) => {
          const skills = skill[Object.keys(skill)];
          const heading = Object.keys(skill)[0];

          return (
            <Box className={resumestyles.section} key={skill}>
              <Heading as="h3">{heading}</Heading>
              <Box>
                {skills.map((skill) => (
                  <Tag mr={3} key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  };

  const renderHistory = () => {
    return (
      <Box>
        <Heading as="h2">History</Heading>
        {resume.experience.map(({ jobTitle, company, startDate, endDate, description }, index) => {
          return (
            <Box mb={20} key={index}>
              <Box fontSize={'sm'} color={'gray.500'} mb={1}>
                {startDate} - {endDate}
              </Box>

              <Box lineHeight={0}>
                <Heading as="h3">{jobTitle}</Heading>
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
      <Container className={resumestyles.resumepage} maxW="4xl">
        <Box my={5}>
          <Heading as="h1" size={'2xl'}>
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
