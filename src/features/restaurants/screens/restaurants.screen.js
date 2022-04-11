import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { ResautrantsInfoCard } from "../components/restaurants.component";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";
import { FavouriteBar } from "../../../components/favourites/favourite-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourties.context";

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled(View)`
  position: absolute;
  top: 50%;
  left: 45%;
`;
export const ResautrantsScreen = ({ navigation }) => {
  const {restaurants, error, isLoading} = useContext(RestaurantsContext);
  const [isToggled, setToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (<SafeArea>
      {isLoading ? <LoadingContainer>
        <ActivityIndicator animating={true} size={50} color={Colors.blue300} />
      </LoadingContainer>
       : 
        <>
          <Search FavouriteToggle={isToggled} onFavouriteToggle={() => setToggled(!isToggled)} />
          {isToggled && <FavouriteBar restaurants={favourites} onNavigate={navigation.navigate}/>}
          <RestaurantsList
            renderItem={({item}) => (
              <TouchableOpacity onPress={(() => navigation.navigate("RestaurantsDetails", {
                restaurant: item,
              }))}>
                <Spacer position="bottom" size="large" />
                <ResautrantsInfoCard restaurant={item} />
              </TouchableOpacity>
            )}
            data={restaurants}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16}}
          />
        </>
      }
    </SafeArea>);
};
