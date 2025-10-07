import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    // We'll add API call later (Day 3)
    console.log("Search for:", city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-indigo-300 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-white drop-shadow mb-8">
        Weather App 🌦️
      </h1>

      {/* Search Section */}
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Weather Card Placeholder */}
      <div className="mt-10 w-80 bg-white bg-opacity-80 rounded-xl shadow-lg p-6 text-center">
        <p className="text-gray-600 italic">
          Weather details will appear here 🌤️
        </p>
      </div>
    </div>
  );
}

export default App;