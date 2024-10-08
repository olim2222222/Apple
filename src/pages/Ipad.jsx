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
  // ... предыдущие iPad
  {
    id: 7,
    name: 'iPad Pro 13"',
    description: 'Next-level performance with an expansive display.',
    price: '$1,199',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-300',
    priceColor: 'text-purple-600',
    buttonColor: 'bg-purple-600 hover:bg-purple-700',
    imgSrc: 'https://www.apple.com/v/ipad-pro/g/images/meta/ipad-pro__c5ltuwokfsyi_og.png',
    details: 'The iPad Pro 13" features an M1 chip, Liquid Retina display, and advanced camera system for ultimate productivity and creativity.'
  },
  {
    id: 8,
    name: 'iPad 9th Gen',
    description: 'The classic iPad experience, now with enhanced features.',
    price: '$329',
    bgColor: 'bg-green-100',
    borderColor: 'border-green-300',
    priceColor: 'text-green-600',
    buttonColor: 'bg-green-600 hover:bg-green-700',
    imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-9th-gen-select-wifi-space-gray-202109_FMT_WHH?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631647165000',
    details: 'The iPad 9th Generation features a 10.2-inch Retina display, A13 Bionic chip, and compatibility with the Smart Keyboard and Apple Pencil.'
  },
  {
    id: 9,
    name: 'iPad Pro 12.9" (2022)',
    description: 'The most powerful iPad ever with a stunning display.',
    price: '$1,299',
    bgColor: 'bg-gray-200',
    borderColor: 'border-gray-400',
    priceColor: 'text-gray-800',
    buttonColor: 'bg-gray-800 hover:bg-gray-900',
    imgSrc: 'https://www.apple.com/v/ipad-pro/g/images/meta/ipad-pro-12.9__f5mr7qzme4ua_og.png',
    details: 'The iPad Pro 12.9" (2022) comes with a Liquid Retina XDR display, M2 chip, and support for 5G connectivity.'
  },
  {
    id: 10,
    name: 'iPad Air 4th Gen',
    description: 'Power and versatility in a thin design.',
    price: '$599',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    priceColor: 'text-blue-800',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
    imgSrc: 'https://www.apple.com/v/ipad-air/g/images/meta/ipad-air__d0o9e5g3f28m_og.png',
    details: 'The iPad Air 4th Gen features a Liquid Retina display, A14 Bionic chip, and compatibility with Apple Pencil (2nd generation).'
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
