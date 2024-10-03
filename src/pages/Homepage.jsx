import React from "react";

const Homepage = () => {
  return (
    <div className="bg-blue-100">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url(https://zagrangid.com/wp-content/uploads/Apple-iPhone-16-price.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to Apple</h1>
          <p className="text-xl mb-8">
            Explore the latest and greatest cars from around the world
          </p>
          <a
            href="#explore"
            className="bg-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700"
          >
            Explore Now
          </a>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="bg-amber-900 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Iphone?
          </h2>
          <p className="text-lg mb-8">
 
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
