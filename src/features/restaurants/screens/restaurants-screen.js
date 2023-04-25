import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space.size_16};
`;

const RestaurantListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.size_16};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => (
  <SafeAreaProvider>
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="search" />
      </SearchView>
      <RestaurantListView>
        <RestaurantInfoCard />
      </RestaurantListView>
    </SafeArea>
  </SafeAreaProvider>
);
