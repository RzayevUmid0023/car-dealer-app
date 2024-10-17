// src/app/result/[makeId]/[year]/page.jsx
'use client';
import { useEffect, useState } from 'react';

const ResultPage = ({ params }) => {
  const { makeId, year } = params; // Destructure params to get makeId and year
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        const data = await response.json();

        if (data.Results) {
          setModels(data.Results);
          console.log(data.Results);
        } else {
          setError("No models found.");
        }
      } catch (error) {
        console.error("Error fetching models:", error);
        setError("Failed to fetch models.");
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [makeId, year]);

  if (loading) {
    return <div className="text-white text-xl text-center w-full h-[100vh] flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-lg">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white">Models for {makeId} - {year}</h1>

      <ul className="bg-gray-800 rounded-lg shadow-lg p-4">
        {models.map((model) => (
          <li key={model.Model_Id} className="border-b border-gray-700 p-2 text-gray-300 hover:bg-gray-700 transition">
            {model.Model_Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultPage;
