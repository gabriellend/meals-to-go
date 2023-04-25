import styled from "styled-components";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.size_16};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.space.size_16};
  padding-bottom: ${(props) => props.theme.space.size_16};
  padding-right: ${(props) => props.theme.space.size_24};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.size_04};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const LeftSide = styled.View``;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
