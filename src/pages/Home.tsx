import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
import React from "react";
import { ScreenNames } from "../Router";

interface HomeProps {
  navigation: any;
}

export default function Home({ navigation }: HomeProps) {
  const handleNavigate = () => {
    navigation.navigate(ScreenNames.Details);
  };

  const handleNavigateParams = () => {
    navigation.navigate(ScreenNames.Details, {
      id: 123,
      productName: "Computer",
    });
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Go to Details" onPress={handleNavigate} />
      <Button title="Go to Details w/ Params" onPress={handleNavigateParams} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
