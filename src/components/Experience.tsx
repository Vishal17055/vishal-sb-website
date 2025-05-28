
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            <div className="relative pl-12 pb-8">
              <div className="absolute left-0 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg animate-fade-in">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Java Full Stack Developer Intern</h3>
                    <p className="text-blue-600 font-medium">Femtosoft Technologies</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-1 md:mt-0">Current</span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Working on developing and maintaining full-stack applications using Java-based technologies. 
                  Gaining hands-on experience in both front-end and back-end development, contributing to 
                  real-world projects and learning industry best practices.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Java</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Spring Boot</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Full Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
