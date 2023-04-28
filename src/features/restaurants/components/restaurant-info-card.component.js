import React from "react";
import { SvgXml } from "react-native-svg";

import star from "assets/star";
import open from "assets/open";
import { Text } from "src/components/typography/text.component";
import { Spacer } from "src/components/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Rating,
  Address,
  LeftSide,
  RightSide,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <LeftSide>
          <Text variant="label">{name}</Text>
          <Rating>
            {ratingArray.map((val, i) => (
              <SvgXml key={`star ${i + 1}`} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <Address>{address}</Address>
        </LeftSide>
        <RightSide>
          {isOpenNow && <SvgXml xml={open} width={40} height={40} />}
          {isClosedTemporarily && (
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="medium">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </RightSide>
      </Info>
    </RestaurantCard>
  );
};
