import React, { useState } from "react";

// Mock AirPods data
const airpods = [
  {
    id: 1,
    name: "AirPods 2nd Gen",
    description:
      "The classic AirPods with easy pairing and exceptional sound quality.",
    price: "$129",
    bgColor: "bg-white",
    borderColor: "border-gray-300",
    priceColor: "text-gray-800",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj41EAL3Ibh-taLNANJz2vjkCtkjc7MOFKUQ&s",
    details:
      'The AirPods 2nd Generation feature the H1 chip, which provides a seamless wireless experience and supports "Hey Siri" functionality.',
  },
  {
    id: 2,
    name: "AirPods Pro",
    description:
      "In-ear design with Active Noise Cancellation and Transparency mode.",
    price: "$249",
    bgColor: "bg-gray-100",
    borderColor: "border-gray-300",
    priceColor: "text-gray-600",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmpTyclaEb_DgecaGnL3nTW5mqteKbHh0Cw&s",
    details:
      "The AirPods Pro feature Active Noise Cancellation for an immersive experience and Transparency mode to hear the world around you.",
  },
  {
    id: 3,
    name: "AirPods Max",
    description:
      "Over-ear headphones with high-fidelity audio, Active Noise Cancellation, and spatial audio.",
    price: "$549",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
    priceColor: "text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    imgSrc: "https://olcha.uz/image/700x700/products/2022-06-14/besprovodnye-naushniki-apple-airpods-max-58619-1.jpeg",
    details:
      "The AirPods Max provide exceptional sound quality with computational audio, Active Noise Cancellation, and spatial audio for an immersive experience.",
  },
  {
    id: 4,
    name: "AirPods 3rd Gen",
    description:
      "New generation AirPods with spatial audio and a more ergonomic design.",
    price: "$179",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-300",
    priceColor: "text-pink-600",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    imgSrc: "https://www.apple.com/v/airpods-3rd-generation/f/images/overview/value-props/battery_startframe__1ruivb5dm4ie_xlarge.jpg",
    details:
      "The AirPods 3rd Generation offer a new design with spatial audio and sweat and water resistance for an improved experience.",
  },
  {
    id: 5,
    name: "AirPods Pro 2nd Gen",
    description:
      "Enhanced AirPods Pro with improved noise cancellation and longer battery life.",
    price: "$299",
    bgColor: "bg-green-100",
    borderColor: "border-green-300",
    priceColor: "text-green-600",
    buttonColor: "bg-green-600 hover:bg-green-700",
    imgSrc: "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/2024/01/image-1-14-24-at-2-20-pm.jpeg",
    details:
      "The AirPods Pro 2nd Generation feature upgraded noise cancellation, better sound quality, and longer battery life for an enhanced listening experience.",
  },
];

const Airpods = () => {
  const [selectedAirpod, setSelectedAirpod] = useState(null);

  const openModal = (airpod) => {
    setSelectedAirpod(airpod);
  };

  const closeModal = () => {
    setSelectedAirpod(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">AirPods Showcase</h1>
          <p className="text-xl mt-2">
            Explore the latest AirPods models and their features.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {airpods.map((airpod) => (
            <div
              key={airpod.id}
              className={`p-6 rounded-lg shadow-lg border-2 ${airpod.bgColor} ${airpod.borderColor} transition-transform transform hover:scale-105 cursor-pointer`}
              onClick={() => openModal(airpod)}
            >
              <img
                src={airpod.imgSrc}
                alt={airpod.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{airpod.name}</h2>
              <p className="text-gray-700 mb-4">{airpod.description}</p>
              <div className="text-lg font-bold mb-4">
                <span className={airpod.priceColor}>{airpod.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedAirpod && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedAirpod.imgSrc}
              alt={selectedAirpod.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {selectedAirpod.name}
            </h2>
            <p className="text-gray-700 mb-4">{selectedAirpod.details}</p>
            <div className="text-lg font-bold mb-4">
              <span className={selectedAirpod.priceColor}>
                {selectedAirpod.price}
              </span>
            </div>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-white transition duration-200 ${selectedAirpod.buttonColor}`}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 AirPods Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Airpods;
