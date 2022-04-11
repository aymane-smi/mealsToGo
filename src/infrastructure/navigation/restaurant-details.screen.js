import React, { useState } from "react";
import { ResautrantsInfoCard } from "../../features/restaurants/components/restaurants.component";
import { SafeArea } from "../../components/utility/safe-area.component";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

export const RestaurantDetailScreen = ({route}) => {
    const [breakfastExpanded, setBreakfast] = useState(false);
    const [dinnerExpanded, setDinner] = useState(false);
    const [launchExpanded, setLaunch] = useState(false);
    const [drinkExpanded, setDrink] = useState(false);
    const {restaurant} = route.params;
    return <SafeArea>
        <ResautrantsInfoCard restaurant={restaurant} />
        <ScrollView>
            <List.Accordion title="Break fast"
                            left={(props) => <List.Icon {...props} icon="bread-slice"/>}
                            expanded={breakfastExpanded}
                            onPress={()=>setBreakfast(!breakfastExpanded)}
            >
                <List.Item title="Eggs Benedict"/>
                <List.Item title="Classic Breakfast"/>
            </List.Accordion>


            <List.Accordion title="Launch"
                            left={(props) => <List.Icon {...props} icon="hamburger"/>}
                            expanded={launchExpanded}
                            onPress={()=>setLaunch(!launchExpanded)}
            >
                <List.Item title="Burger w/ Fries"/>
                <List.Item title="Steak Sandwich"/>
                <List.Item title="Mushroom Soup"/>
            </List.Accordion>


            <List.Accordion title="Dinner"
                            left={(props) => <List.Icon {...props} icon="food-variant"/>}
                            expanded={dinnerExpanded}
                            onPress={()=>setDinner(!dinnerExpanded)}
            >
                <List.Item title="Spaghetti Bolognese"/>
                <List.Item title="Veal Cutlet with Chicken Mushroom Rotini"/>
                <List.Item title="Steak Frites"/>
            </List.Accordion>


            <List.Accordion title="Drink"
                            left={(props) => <List.Icon {...props} icon="cup"/>}
                            expanded={drinkExpanded}
                            onPress={()=>setDrink(!drinkExpanded)}
            >
                <List.Item title="Coffee" />
                <List.Item title="Tea" />
                <List.Item title="Coke" />
                <List.Item title="orange juice" />
            </List.Accordion>


        </ScrollView>
    </SafeArea>
};