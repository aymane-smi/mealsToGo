import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./app.navigator";
import { AuthentificationContext } from "../../services/authentification/authentification.context";
import { AccountNavigator } from "./account.navigator";

export const Navigation = () => {
    const { user } = useContext(AuthentificationContext);
    return <NavigationContainer>
        {user ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
};