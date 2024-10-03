import React, { useState } from 'react';

// Mock Mac data
const macs = [
  {
    id: 1,
    name: 'MacBook Air',
    description: 'Lightweight and powerful, ideal for everyday use and portability.',
    price: '$999',
    bgColor: 'bg-white',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-800',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/161396-laptops-review-hands-on-macbook-air-review-image1-v2jzcb3rqd.jpg',
    details: 'The MacBook Air features a stunning Retina display, M2 chip, and is perfect for both professional and casual use with impressive battery life.'
  },
  {
    id: 2,
    name: 'MacBook Pro 14"',
    description: 'High-performance laptop with a stunning display and powerful M2 Pro chip.',
    price: '$1,499',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
    priceColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    imgSrc: 'https://cdn.mediapark.uz/imgs/69d17570-079a-415f-bd71-e595669ebc87_Artboard1@1300x-100.webp',
    details: 'The MacBook Pro 14" offers a Liquid Retina XDR display, M2 Pro chip, and advanced cooling system for intensive tasks and professional use.'
  },
  {
    id: 3,
    name: 'iMac 24"',
    description: 'All-in-one desktop with vibrant colors and powerful performance.',
    price: '$1,299',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-600',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://mtca.uz/image/cache/catalog/product/apple-imac-24-pink-1-700x500.jpg',
    details: 'The iMac 24" features a 4.5K Retina display, M1 chip, and comes in a variety of vibrant colors, making it a perfect addition to any workspace.'
  },
  {
    id: 4,
    name: 'Mac Studio',
    description: 'Powerful desktop with high-end performance for creative professionals.',
    price: '$1,999',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    priceColor: 'text-pink-600',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Mac_Studio_%282022%29_front.jpg',
    details: 'The Mac Studio delivers exceptional performance with the M1 Ultra chip, offering incredible power for demanding creative tasks and professional workflows.'
  },
  {
    id: 5,
    name: 'Mac Mini',
    description: 'Compact and versatile desktop with impressive performance for its size.',
    price: '$699',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    priceColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqLfiWNo1klfr32OzEl03f7bXOlLrPFJuMBA&s',
    details: 'The Mac Mini is a compact powerhouse featuring the M2 chip, making it a versatile option for both home and office use with a variety of connectivity options.'
  },
  {
    id: 6,
    name: 'MacBook Pro 16"',
    description: 'Large, high-performance laptop with advanced display and processing power.',
    price: '$2,499',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    priceColor: 'text-yellow-600',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    imgSrc: 'https://mini-io-api.texnomart.uz/catalog/product/1008/100835/178110/f1b7d266-6ab6-4d7d-afc5-4c2ae71a931b.jpg',
    details: 'The MacBook Pro 16" features a stunning Liquid Retina XDR display, M2 Max chip, and extensive battery life, making it ideal for professional use and multimedia tasks.'
  },
];

const Mac = () => {
  const [selectedMac, setSelectedMac] = useState(null);

  const openModal = (mac) => {
    setSelectedMac(mac);
  };

  const closeModal = () => {
    setSelectedMac(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mac Showcase</h1>
          <p className="text-xl mt-2">Explore the latest Mac models and their features.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
          {macs.map(mac => (
            <div
              key={mac.id}
              className={`p-8 rounded-lg shadow-lg border-2 ${mac.bgColor} ${mac.borderColor} transition-transform transform hover:scale-105 cursor-pointer`}
              onClick={() => openModal(mac)}
            >
              <img
                src={mac.imgSrc}
                alt={mac.name}
                className="w-full h-60 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-3xl font-semibold mb-2">{mac.name}</h2>
              <p className="text-gray-700 mb-4">{mac.description}</p>
              <div className="text-xl font-bold mb-4">
                <span className={mac.priceColor}>{mac.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedMac && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-4xl relative">
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
              src={selectedMac.imgSrc}
              alt={selectedMac.name}
              className="w-full h-72 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-3xl font-semibold mb-2">{selectedMac.name}</h2>
            <p className="text-gray-700 mb-4">{selectedMac.details}</p>
            <div className="text-xl font-bold mb-4">
              <span className={selectedMac.priceColor}>{selectedMac.price}</span>
            </div>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-white transition duration-200 ${selectedMac.buttonColor}`}
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
          <p>&copy; 2024 Mac Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Mac;
