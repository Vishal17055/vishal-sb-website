
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-lg animate-fade-in">
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Exciting Projects Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              I'm currently working on several innovative projects that showcase my skills in 
              full-stack development. Stay tuned for updates!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Web Applications</h4>
                <p className="text-gray-600 text-sm">Modern, responsive web applications using latest technologies</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Backend Solutions</h4>
                <p className="text-gray-600 text-sm">Robust backend systems and APIs for scalable applications</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Projects will be updated regularly as I continue my development journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
