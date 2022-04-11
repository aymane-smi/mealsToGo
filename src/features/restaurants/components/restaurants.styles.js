import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Image } from "react-native";
import { Text } from "../../../components/typography/typography.component";
export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
export const Rating = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.space[0]} 0;
`;
export const Section = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
export const Open = styled.View`
  padding-top: 5px;
  padding-left: 8px;
  padding-right: 14px;
`;
export const Icon = styled.Image`
  width: 20px;
  height: 20px;
`;
export const SecondContainer = styled.View`
  display: flex;
  flex-direction: row;
`;
