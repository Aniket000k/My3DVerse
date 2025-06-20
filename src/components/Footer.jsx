const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-gray-800 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="transition-colors duration-200 hover:text-fuchsia-400">COMPANY</a>
          <a href="#" className="transition-colors duration-200 hover:text-fuchsia-400">FEATURES</a>
          <a href="#" className="transition-colors duration-200 hover:text-fuchsia-400">RESOURCES</a>
          <a href="#" className="transition-colors duration-200 hover:text-fuchsia-400">DOCS</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
