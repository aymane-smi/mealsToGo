import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, Header } from "@react-navigation/stack";
import { LoginScreen } from "../../features/accounts/screens/login.screen";
import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";
const stack = createStackNavigator();

export const AccountNavigator = () =>{
    return (<stack.Navigator screenOptions={
        {headerShown: false,}
    }>
        <stack.Screen 
            name="Main"
            component={AccountScreen}
        />
        <stack.Screen 
            name="Login"
            component={LoginScreen}
        />
        <stack.Screen 
            name="Register"
            component={RegisterScreen}
        />
    </stack.Navigator>);
};