// src/app/page.js
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const FilterPage = () => {
  const [makes, setMakes] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`);
        const data = await response.json();
        setMakes(data.Results || []); // Ensure to set to an empty array if undefined
      } catch (error) {
        console.error("Error fetching makes:", error);
      }
    };

    fetchMakes();
  }, []);

  return (
    <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Select Vehicle Make and Year</h1>

      <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="make" className="block text-gray-400 mb-2">Vehicle Make:</label>
          <select
            id="make"
            className="border border-gray-700 rounded p-3 w-full bg-gray-700 text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={selectedMake}
            onChange={(e) => setSelectedMake(e.target.value)}
          >
            <option value="" className="bg-gray-800">Select Car Model</option>
            {makes.length > 0 ? (
              makes.map((make) => (
                <option key={make.MakeId} value={make.MakeId} className="bg-gray-800">
                  {make.MakeName}
                </option>
              ))
            ) : (
              <option disabled>Loading makes...</option>
            )}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-400 mb-2">Vehicle Year:</label>
          <select
            id="year"
            className="border border-gray-700 rounded p-3 w-full bg-gray-700 text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="" className="bg-gray-800">Select Year</option>
            {[...Array(currentYear - 2014)].map((_, index) => (
              <option key={currentYear - index} value={currentYear - index} className="bg-gray-800">
                {currentYear - index}
              </option>
            ))}
          </select>
        </div>

        <Link href={`/result/${selectedMake}/${selectedYear}`}>
          <button
            className={`w-full bg-blue-600 text-white rounded p-3 transition duration-200 ease-in-out 
              ${!selectedMake || !selectedYear ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} `}
            disabled={!selectedMake || !selectedYear}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FilterPage;
