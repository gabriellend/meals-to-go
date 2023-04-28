import camelize from "camelize";

import { mocks, mockImages } from "./mock";

export const restaurantsRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  try {
    const mock = mocks[location];
    if (!mock) {
      await Promise.reject("unkonwn location");
    }

    const restaurants = await Promise.resolve(mock);
    return transformRestaurants(restaurants);
  } catch (err) {
    console.log("restaurantRequest error:", err);
    return false;
  }
};

const transformRestaurants = ({ results = [] }) => {
  const mappedRestaurants = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours
        ? restaurant.opening_hours.open_now
        : false,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(JSON.stringify(mappedRestaurants, null, 2));
  return camelize(mappedRestaurants);
};
