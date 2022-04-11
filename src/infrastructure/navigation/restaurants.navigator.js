import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { ResautrantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "./restaurant-details.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return <RestaurantStack.Navigator 
                                      screenOptions={
                                          {...TransitionPresets.ModalSlideFromBottomIOS,
                                            headerShown: false
                                          }
                                      }
           >
        <RestaurantStack.Screen 
            name="restaurants"
            component={ResautrantsScreen}
        />
        <RestaurantStack.Screen 
            name="RestaurantsDetails"
            component={RestaurantDetailScreen}
        />
    </RestaurantStack.Navigator>
};