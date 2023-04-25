import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <Info>
        <LeftSide>
          <Title>{name}</Title>
          <Rating>
            {ratingArray.map((val, i) => (
              <SvgXml key={`star ${i + 1}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </LeftSide>
        <RightSide>
          {isOpenNow && !isClosedTemporarily && (
            <SvgXml xml={open} width={40} height={40} />
          )}
          {isClosedTemporarily && !isOpenNow && (
            <ClosedText variant="label">CLOSED{"\n"}TEMPORARILY</ClosedText>
          )}
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </RightSide>
      </Info>
    </RestaurantCard>
  );
};

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.size_16};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${(props) => props.theme.space.size_16};
  padding-bottom: ${(props) => props.theme.space.size_16};
  padding-right: ${(props) => props.theme.space.size_24};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.size_04};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const LeftSide = styled.View``;

const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ClosedText = styled.Text`
  color: ${(props) => props.theme.colors.text.error};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
`;

const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
