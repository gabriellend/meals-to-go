import React, { useContext } from "react";
import styled from "styled-components";
import { Searchbar } from "react-native-paper";

import { Spacer } from "src/components/spacer/spacer.component";
import { SafeArea } from "src/components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { RestaurantsContext } from "src/services/restaurants/restaurants.context";

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.size_16};
`;

const RestaurantFlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="search" />
      </SearchView>
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
    </SafeArea>
  );
};
