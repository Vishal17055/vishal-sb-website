import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <img alt="Vishal SB" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover" src="/lovable-uploads/0f729030-3358-4d1a-b35d-3dca05abb33f.jpg" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{" "}
            <span className="text-blue-600">Vishal SB</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
            Aspiring Full Stack Developer.
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Computer Science student passionate about building solutions through code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection("#portfolio")} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View My Work
            </Button>
            <Button onClick={() => scrollToSection("#contact")} variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;