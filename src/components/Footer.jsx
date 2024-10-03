import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo or Title */}
          <div className="text-2xl font-bold mb-4 md:mb-0">Apple</div>

          {/* Links */}
          <div className="space-x-4 mb-4 md:mb-0">
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#blog" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6">
          &copy; 2024 MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
