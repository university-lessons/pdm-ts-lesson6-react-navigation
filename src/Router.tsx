import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Details from "./pages/Details";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export enum ScreenNames {
  Home = "Home",
  Details = "Details",
}

ScreenNames.Home;

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={Home} />
        <Stack.Screen name={ScreenNames.Details} component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
