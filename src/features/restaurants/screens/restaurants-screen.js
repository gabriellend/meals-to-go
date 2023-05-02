import React, { useContext } from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";

import { Search } from "../components/search.component";
import { colors } from "src/infrastructure/theme/colors";
import { Spacer } from "src/components/spacer/spacer.component";
import { SafeArea } from "src/components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "src/services/restaurants/restaurants.context";

const RestaurantFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loader = styled(ActivityIndicator)`
  flex: 1;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading ? (
        <Loader
          animating={isLoading}
          color={colors.brand.primary}
          size="large"
        />
      ) : (
        <>
          <Search />
          <RestaurantFlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
