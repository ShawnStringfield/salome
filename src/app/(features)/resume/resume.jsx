import { jsonImporter } from '@/lib/jsonImporter';
import { Chip } from '@nextui-org/react';

export const Resume = async () => {
  const resume = await jsonImporter('/src/api/resume.json');
  const { summary } = resume;

  const renderSkills = () => {
    return resume.skills.map((skill) => {
      const skills = skill[Object.keys(skill)];
      const heading = Object.keys(skill)[0];

      return (
        <div className="mb-5" key={skill}>
          <div className={`${headingStyle}`}>{heading}</div>
          <div className="leading-4">
            {skills.map((skill) => (
              <span className="text-sm text-slate-400" key={skill}>
                {skill}{' '}
              </span>
            ))}
          </div>
        </div>
      );
    });
  };

  const renderHistory = () => {
    return resume.experience.map(({ jobTitle, company, startDate, endDate, description }, index) => {
      return (
        <div key={index} className="experience mb-4">
          <div className="mb-4 mt-10">
            <Chip color="primary" radius="sm" variant="bordered">
              {startDate} - {endDate}
            </Chip>
          </div>
          <div className="font-bold">{jobTitle}</div>
          <div className="text-slate-400">{company}</div>
          <div className="mt-4">{description}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="mb-20">{summary}</div>
      <div className="">
        <div className="text-6xl font-bold mb-6">Skills</div>
        {renderSkills()}
        <div className="text-6xl font-bold mb-6">History</div>
        {renderHistory()}
      </div>
    </>
  );
};

const headingStyle = `text-mg leading-6 mb-2 font-bold`;
