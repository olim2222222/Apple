import React, { useState } from 'react';

// Mock iPhone data
const iphones = [
  {
    id: 1,
    name: 'iPhone 15',
    description: 'The latest iPhone with advanced features and improved performance.',
    price: '$999',
    bgColor: 'bg-white',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-800',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://assets.asaxiy.uz/product/items/desktop/4fa7c62536118cc404dec4a0ca88d4f620231031173842318545eh7QZgTTX.png.webp',
    details: 'The iPhone 15 offers a stunning display, advanced camera system, and the new A16 Bionic chip for exceptional performance.'
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    description: 'Premium iPhone with ProMotion display and advanced camera capabilities.',
    price: '$1,199',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
    priceColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    imgSrc: 'https://istyle.bg/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/i/p/iphone_15_pro_max_natural_titanium_pdp_image_position-5__cz-cs_1_1.jpg',
    details: 'The iPhone 15 Pro features a ProMotion display, advanced camera system with ProRAW and ProRes capabilities, and the powerful A16 Bionic chip.'
  },
  {
    id: 3,
    name: 'iPhone 14',
    description: 'Reliable and high-performing with excellent camera and battery life.',
    price: '$799',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-600',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_DuJyhFo9ha8A5fvOWZz1dCuCk4sqYX7Kw&s',
    details: 'The iPhone 14 offers a great balance of performance, camera quality, and battery life. It comes with the A15 Bionic chip and advanced photography features.'
  },
  {
    id: 4,
    name: 'iPhone 14 Pro',
    description: 'High-end iPhone with a ProMotion display and Pro-level camera features.',
    price: '$999',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    priceColor: 'text-pink-600',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    imgSrc: 'https://s3p.kattabozor.uz/ri/afd6567e95740dbdcee3edf48301dcf5daec1d17ef535e61ba64459d5a4d6c44_ieIYrj_640l.jpg',
    details: 'The iPhone 14 Pro features a 120Hz ProMotion display, enhanced camera system with ProRAW and ProRes, and the powerful A16 Bionic chip.'
  },
  {
    id: 5,
    name: 'iPhone SE (2024)',
    description: 'Compact and affordable iPhone with the latest features.',
    price: '$429',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    priceColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    imgSrc: 'https://images.hindustantimes.com/tech/img/2024/09/13/960x540/iPhone_SE_4_1724987943521_1726204392124.jpg',
    details: 'The iPhone SE (2024) combines the compact design with powerful performance featuring the A15 Bionic chip and a high-quality camera system.'
  },
  {
    id: 6,
    name: 'iPhone 15 Plus',
    description: 'Larger iPhone with extended battery life and a bigger display.',
    price: '$1,099',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    priceColor: 'text-yellow-600',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    imgSrc: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-finish-select-202309-6-7inch-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=cHJOTXEwTU92OEtKVDV2cVB1R2FTSjlERndlRTljaUdZeHJGM3dlLzR2OGNDaFdYdHQ0L2VyT2lVS3J0dUtUeHF2TWlpSzUzejRCZGt2SjJUNGl1VExZc3g4ZkhUVEc0bFNFL1l3MHJZd1ZDdlhJUkxIbVh4anFsSnFKRDMxd3Q=&traceId=1',
    details: 'The iPhone 15 Plus offers a larger display and extended battery life, making it perfect for media consumption and extended use.'
  },
];

const Iphone = () => {
  const [selectedIphone, setSelectedIphone] = useState(null);

  const openModal = (iphone) => {
    setSelectedIphone(iphone);
  };

  const closeModal = () => {
    setSelectedIphone(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">iPhone Showcase</h1>
          <p className="text-xl mt-2">Discover the latest iPhone models and their features.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {iphones.map(iphone => (
            <div
              key={iphone.id}
              className={`p-6 rounded-lg shadow-lg border-2 ${iphone.bgColor} ${iphone.borderColor} transition-transform transform hover:scale-105 cursor-pointer`}
              onClick={() => openModal(iphone)}
            >
              <img
                src={iphone.imgSrc}
                alt={iphone.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{iphone.name}</h2>
              <p className="text-gray-700 mb-4">{iphone.description}</p>
              <div className="text-lg font-bold mb-4">
                <span className={iphone.priceColor}>{iphone.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedIphone && (
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
              src={selectedIphone.imgSrc}
              alt={selectedIphone.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedIphone.name}</h2>
            <p className="text-gray-700 mb-4">{selectedIphone.details}</p>
            <div className="text-lg font-bold mb-4">
              <span className={selectedIphone.priceColor}>{selectedIphone.price}</span>
            </div>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-white transition duration-200 ${selectedIphone.buttonColor}`}
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
          <p>&copy; 2024 iPhone Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Iphone;
