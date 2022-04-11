import React, {useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screen/map.screen";
import { FavouritesContextProvider } from "../../services/favourites/favourties.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsScreen } from "../../features/settings.js/settings.screen";

const Tab = createBottomTabNavigator();


  const ICONS = {
    Restaurants: "md-restaurant",
    Settings: "md-settings",
    Map: "md-map",
  }
  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarIcon: ({color, size}) => {
      return <Ionicons name={ICONS[route.name]} size={size} color={color} />
    },
  });
export const AppNavigator = () => {
    return (<FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
              <Tab.Navigator screenOptions={screenOptions} >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
              </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>);
};