import React, { useState, createContext } from "react";

import { requestLocation } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = async (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    const result = await requestLocation(searchKeyword.toLowerCase());
    if (result.error) {
      setIsLoading(false);
      setError(result);
      return;
    }

    setIsLoading(false);
    setLocation(result);
  };

  return (
    <LocationContext.Provider
      value={{ location, isLoading, error, keyword, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
