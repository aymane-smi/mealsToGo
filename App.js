import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import * as firebase from "firebase";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthentificationContextProvider } from "./src/services/authentification/authentification.context";


const firebaseConfig = {

  apiKey: "AIzaSyAL73oEeBV5hB6dbw0xV2EByYjh_dSXKQA",

  authDomain: "mealstogo-be175.firebaseapp.com",

  projectId: "mealstogo-be175",

  storageBucket: "mealstogo-be175.appspot.com",

  messagingSenderId: "5887316890",

  appId: "1:5887316890:web:c6dbba41c4f9e7cca0a023",

  measurementId: "G-ZZSJ1XJYDN"

};

if(firebase.apps.length === 0);
    firebase.initializeApp(firebaseConfig);
  
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthentificationContextProvider>
        <Navigation />
        </AuthentificationContextProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
