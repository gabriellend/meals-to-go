import React from "react";
import styled from "styled-components";
import { StatusBar } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SafeAreaProvider } from "react-native-safe-area-context";

const SafeAreaStyledView = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

export const SafeArea = ({ children }) => (
  <SafeAreaProvider>
    <SafeAreaStyledView>{children}</SafeAreaStyledView>
  </SafeAreaProvider>
);
