// src/app/result/[makeId]/[year]/fetchModels.js
export const fetchModels = (makeId, year) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        const data = await response.json();
        resolve(data.Results || []);
      } catch (error) {
        reject("Failed to fetch models.");
      }
    });
  };
  