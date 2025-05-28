
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a Computer Science student with a strong interest in technology and problem-solving. 
                I'm eager to gain hands-on experience and contribute to real-world projects in a professional environment.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My journey in technology has been driven by curiosity and a passion for creating solutions 
                that make a difference. I believe in continuous learning and staying updated with the latest 
                technological advancements.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Passionate about Full Stack Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Strong problem-solving skills</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Eager to learn and grow</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">Bachelor of Engineering</h4>
                    <p className="text-blue-600 font-medium">Computer Science Engineering</p>
                    <p className="text-gray-600">Jerusalem College of Engineering</p>
                    <p className="text-sm text-gray-500">2023 – Present</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
