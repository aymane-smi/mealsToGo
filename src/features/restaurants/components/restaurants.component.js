/* eslint-disable react-native/no-inline-styles */
import React from "react";

import { SvgXml } from "react-native-svg";
import { View } from "react-native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/typography.component";
import { Favourite } from "../../../components/favourites/favourite.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Icon,
  Section,
  Rating,
  SecondContainer,
  Open,
  Address,
} from "./restaurants.styles";
export const ResautrantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    vicinity = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;
  const RatingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
    <RestaurantCard elevation={5} style={{position: "relative"}}>
      <Favourite restaurant={restaurant}/>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {RatingArray.map((item, i) => (
              <SvgXml xml={star} width={20} height={20} key={`star-${placeId}-${i}`} />
            ))}
          </Rating>
          <SecondContainer>
            {isClosedTemporarily && (
              <Text variant="error">is closed temporarily</Text>
            )}
            {isOpenNow && (
              <Open>
                <SvgXml xml={open} width={30} height={30} />
              </Open>
            )}
            <Spacer position="top" size="large" />
            <Icon source={{ uri: icon }} />
          </SecondContainer>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
    </>
  );
};
