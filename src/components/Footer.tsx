
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Vishal SB</h3>
          <p className="text-gray-400 mb-6">
            Aspiring Full Stack Developer passionate about building solutions through code.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span>📧</span>
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span>💼</span>
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <span>🐙</span>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Vishal SB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
