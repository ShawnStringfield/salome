import { jsonImporter } from "@/lib/jsonImporter";

export const Resume = async () => {
  const resume = await jsonImporter("/src/api/resume.json");
  const { summary } = resume;

  const renderSkills = () => {
    return resume.skills.map((skill) => {
      const skills = skill[Object.keys(skill)];
      const heading = Object.keys(skill)[0];

      return (
        <div key={skill}>
          <div className={`${headingStyle} mt-5 mb-1`}>{heading}</div>
          {skills.map((skill) => {
            return (
              <span className="skill mr-5" key={skill}>
                {skill}
              </span>
            );
          })}
        </div>
      );
    });
  };

  const renderHistory = () => {
    return resume.experience.map(
      ({ jobTitle, company, startDate, endDate, description }) => {
        return (
          <div className="experience mb-4">
            <div className="font-bold">Job Title: {jobTitle}</div>
            <div>Company: {company}</div>
            <div>Start Date: {startDate}</div>
            <div>End Date: {endDate}</div>
            <div>Description: {description}</div>
          </div>
        );
      }
    );
  };

  return (
    <div className="container mx-auto">
      <div className="container p-8">{summary}</div>
      <div className="container p-8 skills">
        <div className="text-6xl font-bold mb-6">Skillz</div>
        {renderSkills()}
      </div>
      <div className="ontainer p-8 history">
        <div className="text-6xl font-bold mb-6">History</div>
        {renderHistory()}
      </div>
    </div>
  );
};

const headingStyle = `text-2xl font-bold`;
