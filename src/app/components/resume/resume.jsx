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
          <div className={`text-2xl font-bold mt-5 mb-1`}>{heading}</div>
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

  return (
    <div className="container mx-auto">
      <div className="container p-8">{summary}</div>
      <div className="container p-8 skills">
        <div className="text-6xl font-bold mb-6">Skillz</div>
        {renderSkills()}
      </div>
    </div>
  );
};

// const headingStyle = `text-2xl font-bold`;
