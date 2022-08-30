import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Details from "./pages/Details";

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
