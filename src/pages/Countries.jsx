import React, { useState, useEffect } from "react";

// Updated mock country data with capitals and locations
const mockCountries = [
  {
    id: 1,
    name: "Canada",
    description: "Known for its beautiful landscapes and multicultural cities.",
    capital: "Ottawa",
    location: "North America",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    id: 2,
    name: "Japan",
    description: "An island nation with a rich cultural heritage and advanced technology.",
    capital: "Tokyo",
    location: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
  },
  {
    id: 3,
    name: "Australia",
    description: "Famous for its unique wildlife and stunning beaches.",
    capital: "Canberra",
    location: "Oceania",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/b9/Flag_of_Australia.svg",
  },
  {
    id: 4,
    name: "Germany",
    description: "Known for its engineering prowess and rich history.",
    capital: "Berlin",
    location: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    id: 5,
    name: "Brazil",
    description: "Famous for its vibrant culture and the Amazon rainforest.",
    capital: "Brasília",
    location: "South America",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg",
  },
  {
    id: 6,
    name: "South Africa",
    description: "Known for its diverse cultures and natural beauty.",
    capital: "Pretoria",
    location: "Africa",
    flag: "https://cdn.britannica.com/27/4227-050-00DBD10A/Flag-South-Africa.jpg",
  },
  {
    id: 7,
    name: "India",
    description: "A country with a rich history and diverse cultures.",
    capital: "New Delhi",
    location: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    id: 8,
    name: "France",
    description: "Famous for its art, cuisine, and historical landmarks.",
    capital: "Paris",
    location: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    id: 9,
    name: "Italy",
    description: "Known for its historical sites and delicious cuisine.",
    capital: "Rome",
    location: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
  {
    id: 10,
    name: "China",
    description: "A major global player with a rich history and rapid development.",
    capital: "Beijing",
    location: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/640px-Flag_of_the_People%27s_Republic_of_China.svg.png",
  },
];

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Simulate an API call with mock data
    setCountries(mockCountries);
    // If you were using a real API, you would use axios like this:
    // axios.get('https://api.example.com/countries').then((response) => setCountries(response.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Explore Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <div
            key={country.id}
            className="bg-white rounded-lg shadow-lg p-6"
            onClick={() => alert(`You clicked on ${country.name}`)}
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-2xl font-semibold mb-2">{country.name}</h2>
            <p className="text-gray-700 mb-2"><strong>Capital:</strong> {country.capital}</p>
            <p className="text-gray-700 mb-4"><strong>Location:</strong> {country.location}</p>
            <p className="text-gray-700 mb-4">{country.description}</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;
