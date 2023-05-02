import camelize from "camelize";

import { locations } from "./location.mock";

export const requestLocation = async (searchTerm) => {
  try {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      await Promise.reject("search term not found");
    }

    const location = await Promise.resolve(locationMock);
    return transformLocation(location);
  } catch (err) {
    console.log("requestLocation error:", err);
    return { error: err };
  }
};

export const transformLocation = ({ results = [] }) => {
  const { geometry } = camelize(results[0]) || {};
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
