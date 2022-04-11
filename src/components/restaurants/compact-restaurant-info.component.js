import React from "react";
import styled from "styled-components/native";
import { Image, View, Platform } from "react-native";
import { Text } from "../typography/typography.component";
import WebView from "react-native-webview";
import { mockImages } from "../../services/restaurants/mock";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";
//Math.floor(Math.random()*mockImages.length-1 )
console.log(isAndroid);
export const CompactRestaurantInfo = ({restaurant, isMap}) => {
  const ModifiedImage = (isAndroid && isMap) ? CompactWebView : CompactImage;
    return (<Item>
        <ModifiedImage source={{uri: restaurant.photos[0]}} />
        <Text center variant="caption" numberOfLines={3}>
            {restaurant.name}
        </Text>
    </Item>);
};