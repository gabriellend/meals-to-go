import React, { useState, useEffect, useMemo, createContext } from "react";

import { restaurantsRequest } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setTimeout(async () => {
      const result = await restaurantsRequest();
      if (!result) {
        setIsLoading(false);
        setError(result);
        return;
      }

      setIsLoading(false);
      setRestaurants(result);
    }, 2000);
  };

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
