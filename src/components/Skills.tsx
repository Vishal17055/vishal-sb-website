
const Skills = () => {
  const skills = [
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "Linux", level: 70 },
    { name: "Computer Networking", level: 65 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4">Technologies I work with</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-medium text-gray-900">{skill.name}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
