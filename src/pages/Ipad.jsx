import React, { useState } from 'react';

// Mock iPad data
const ipads = [
  {
    id: 1,
    name: 'iPad Air',
    description: 'Lightweight and powerful, perfect for productivity and entertainment.',
    price: '$599',
    bgColor: 'bg-white',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-800',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-model-unselect-gallery-2-202405_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80&.v=azZtTlRzREZ3NzhWaHRDQW5YeUV0UEs0TkxxOFYxN2dtSHJMdW5sNDFVOUlhVTFOeW83YW5oSmZSbkJQUVFVdFBTRzhFbXhrSlpyaVYxRTU4VUZ2NXlaSE1Qa0haZTFvMWVJTkxjaWwxSnhVaWV0MngrSm1qUU9yRGpSUGRKRFBiZGNxdlVhUVQ1T2lKZVdKL04ySU5BPT0=&traceId=1',
    details: 'The iPad Air features a stunning Retina display, A14 Bionic chip, and support for the Magic Keyboard and Apple Pencil.'
  },
  {
    id: 2,
    name: 'iPad Pro 11"',
    description: 'High-performance tablet with a stunning display and ProMotion technology.',
    price: '$799',
    bgColor: 'bg-blue-100',
    borderColor: 'border-blue-300',
    priceColor: 'text-blue-600',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    imgSrc: 'https://olcha.uz/image/600x600/products/2021-06-02/planshet-apple-ipad-pro-11-2021-128gb-wi-fi-space-gray-23956-0.jpeg',
    details: 'The iPad Pro 11" offers a Liquid Retina display with ProMotion, True Tone, and P3 wide color. It is powered by the M1 chip for unmatched performance.'
  },
  {
    id: 3,
    name: 'iPad Pro 12.9"',
    description: 'The ultimate iPad experience with a large display and advanced features.',
    price: '$1,099',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-300',
    priceColor: 'text-gray-600',
    buttonColor: 'bg-gray-600 hover:bg-gray-700',
    imgSrc: 'https://www.jarir.com/cdn-cgi/image/fit=contain,width=350,height=auto,quality=85,metadata=none/https://ak-asset.jarir.com/akeneo-prod/asset/9/9/8/e/998e3dcc2a5cf0a46bc37e547dc662ecaabc41ec_598790_1.jpg',
    details: 'The iPad Pro 12.9" comes with a stunning Liquid Retina XDR display, M1 chip, and supports the new Apple Pencil and Magic Keyboard for a complete experience.'
  },
  {
    id: 4,
    name: 'iPad Mini',
    description: 'Compact and powerful, ideal for on-the-go use and entertainment.',
    price: '$499',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-300',
    priceColor: 'text-pink-600',
    buttonColor: 'bg-pink-600 hover:bg-pink-700',
    imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-space-gray-wifi_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1670631639152',
    details: 'The iPad Mini features an 8.3-inch Liquid Retina display, A15 Bionic chip, and support for the 2nd generation Apple Pencil.'
  },
  {
    id: 5,
    name: 'iPad 10.2"',
    description: 'Affordable and versatile, great for everyday use and productivity.',
    price: '$329',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    priceColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    imgSrc: 'https://i03.hsncdn.com/is/image/HomeShoppingNetwork/rocs1200/apple-ipad-9th-gen-102-64gb-wifi-bundle-d-20231201161730867~22653547w_alt1.jpg',
    details: 'The iPad 10.2" features a large Retina display, A13 Bionic chip, and compatibility with the 1st generation Apple Pencil and Smart Keyboard.'
  },
  {
    id: 6,
    name: 'iPad Air 5th Gen',
    description: 'Latest generation iPad Air with improved performance and design.',
    price: '$699',
    bgColor: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    priceColor: 'text-yellow-600',
    buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeMlxiRuqqmaM0yTU476reA3kBfpvK1OzXA&s',
    details: 'The iPad Air 5th Generation features the M1 chip, 10.9-inch Liquid Retina display, and compatibility with Apple Pencil 2nd generation.'
  },
];

const Ipad = () => {
  const [selectedIpad, setSelectedIpad] = useState(null);

  const openModal = (ipad) => {
    setSelectedIpad(ipad);
  };

  const closeModal = () => {
    setSelectedIpad(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">iPad Showcase</h1>
          <p className="text-xl mt-2">Explore the latest iPad models and their features.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {ipads.map(ipad => (
            <div
              key={ipad.id}
              className={`p-6 rounded-lg shadow-lg border-2 ${ipad.bgColor} ${ipad.borderColor} transition-transform transform hover:scale-105 cursor-pointer`}
              onClick={() => openModal(ipad)}
            >
              <img
                src={ipad.imgSrc}
                alt={ipad.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h2 className="text-2xl font-semibold mb-2">{ipad.name}</h2>
              <p className="text-gray-700 mb-4">{ipad.description}</p>
              <div className="text-lg font-bold mb-4">
                <span className={ipad.priceColor}>{ipad.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedIpad && (
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
              src={selectedIpad.imgSrc}
              alt={selectedIpad.name}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{selectedIpad.name}</h2>
            <p className="text-gray-700 mb-4">{selectedIpad.details}</p>
            <div className="text-lg font-bold mb-4">
              <span className={selectedIpad.priceColor}>{selectedIpad.price}</span>
            </div>
            <button
              className={`w-full py-2 rounded-lg font-semibold text-white transition duration-200 ${selectedIpad.buttonColor}`}
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
          <p>&copy; 2024 iPad Showcase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Ipad;

