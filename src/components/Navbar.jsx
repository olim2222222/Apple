import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-300 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Apple</div>

        {/* Links */}
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/mac" className="hover:text-gray-300">
            Mac
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
          <a href="/iphone" className="hover:text-gray-300">
            Iphone
          </a>
          <a href="/ipad" className="hover:text-gray-300">
            Ipad
          </a>
          <a href="/airpods" className="hover:text-gray-300">
            Airpods
          </a>
        </div>

        <div>
          <a
            href="/login"
            className="bg-white text-amber-900 px-4 py-2 rounded-md shadow hover:bg-gray-100"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
