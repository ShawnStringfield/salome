import { jsonImporter } from '@/src/app/lib/jsonImporter';

export const ResumePage = async () => {
  const resume = await jsonImporter('/src/app/(features)/resume/api/resume.json');
  const { summary } = resume;

  const renderSkills = () => {
    return resume.skills.map((skill) => {
      const skills = skill[Object.keys(skill)];
      const heading = Object.keys(skill)[0];

      return (
        <div key={skill}>
          <div>{heading}</div>
          <div>
            {skills.map((skill) => (
              <span className="text-sm text-slate-400" key={skill}>
                {skill}
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
        <div key={index}>
          <div>
            <div color="primary" radius="sm" variant="bordered">
              {startDate} - {endDate}
            </div>
          </div>
          <div>{jobTitle}</div>
          <div>{company}</div>
          <div>{description}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div>{summary}</div>
      <div className="">
        <div>Skills</div>
        {renderSkills()}
        <div>History</div>
        {renderHistory()}
      </div>
    </>
  );
};
