import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as usePoppins,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";

import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import Navigation from "./src/infrastructure/navigation/index";

import * as firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAbpMyQk4NmFBrqnUHPQEf8JjkFkJb98-k",
  authDomain: "mealstogo-9f96e.firebaseapp.com",
  projectId: "mealstogo-9f96e",
  storageBucket: "mealstogo-9f96e.appspot.com",
  messagingSenderId: "963667461375",
  appId: "1:963667461375:web:f9ae4e4e6d5e581e91b8ca",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [latoLoaded] = useLato({ Lato_400Regular });
  const [poppinsLoaded] = usePoppins({ Poppins_600SemiBold, Poppins_700Bold });

  if (!latoLoaded || !poppinsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
