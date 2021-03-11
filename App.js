import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

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

import Navigation from "./src/infrastructure/navigation/index";

export default function App() {
  const [latoLoaded] = useLato({ Lato_400Regular });
  const [poppinsLoaded] = usePoppins({ Poppins_600SemiBold, Poppins_700Bold });

  if (!latoLoaded || !poppinsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <Navigation />
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
