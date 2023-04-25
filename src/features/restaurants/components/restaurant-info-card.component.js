import React from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
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
          <Text variant="label">{name}</Text>
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
            <Text variant="error">CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </RightSide>
      </Info>
    </RestaurantCard>
  );
};
