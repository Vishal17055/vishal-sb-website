
const Services = () => {
  const services = [
    {
      title: "Full Stack Development",
      description: "Building responsive web applications using front-end and back-end technologies.",
      icon: "💻",
    },
    {
      title: "Problem Solving",
      description: "Analyzing complex problems and developing efficient, scalable solutions.",
      icon: "🧩",
    },
    {
      title: "Technical Learning",
      description: "Continuously learning new technologies and best practices in software development.",
      icon: "📚",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4">Services I provide</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
