import React from "react";
import { ScrollView, View, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurants/compact-restaurant-info.component";
import { Text } from "../typography/typography.component";

const FavouritesWrapper = styled(View)`
    padding: 10px;
`;

export const FavouriteBar = ({restaurants, onNavigate}) => {
    console.log(restaurants);
    if(!restaurants.length)
        return null;
    return (<FavouritesWrapper>
        <Spacer position="left" size="large">
            <Text variant="caption">
                Favourites:
            </Text>
        </Spacer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {restaurants.map((item) => {
                const key = item.name;
                return (<Spacer key={key} position="left" size="medium">
                    <TouchableOpacity onPress={() => onNavigate("RestaurantsDetails", {
                restaurant: item,
              })}>
                        <CompactRestaurantInfo restaurant={item}/>
                    </TouchableOpacity>
                </Spacer>);
            })}
        </ScrollView>
    </FavouritesWrapper>);
};