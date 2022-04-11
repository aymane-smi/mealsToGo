import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourties.context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);   
    const isFavourite = favourites.some((item) =>{
        return item.placeId === restaurant.placeId
        });
    return (<FavouriteButton onPress={()=> isFavourite ? removeFromFavourites(restaurant) : addToFavourites(restaurant)}>
        <AntDesign name={isFavourite ? "heart" : "hearto"} size={24} color={isFavourite ? "red" : "white"} />
    </FavouriteButton>);
};