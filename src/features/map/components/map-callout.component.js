import React from "react";
import styled from "styled-components";
import { CompactRestaurantInfo } from "../../../components/restaurants/compact-restaurant-info.component";
const MapText = styled.Text``;

export const MapCallout = ({restaurant}) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant} isMap/>
        );
};