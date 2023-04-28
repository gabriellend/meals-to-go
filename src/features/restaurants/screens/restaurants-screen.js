import React from "react";
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

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchView>
      <Searchbar placeholder="search" />
    </SearchView>
    <RestaurantFlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
