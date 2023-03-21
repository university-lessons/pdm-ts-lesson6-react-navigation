import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenNames } from "../Router";

interface HomeProps {
  navigation: any;
}

const fakeData = [
  { id: 1, productName: "dell" },
  { id: 2, productName: "lenovo" },
  { id: 3, productName: "acer" },
  { id: 4, productName: "apple" },
  { id: 5, productName: "itautec" },
];

export default function Home({ navigation }: HomeProps) {
  const handleNavigate = () => {
    navigation.navigate(ScreenNames.Details);
  };

  const handleNavigateParams = (computer: any) => {
    navigation.navigate(ScreenNames.Details, computer);
  };

  return (
    <View style={styles.container}>
      <Text>Home</Text>

      <Button title="Go to Details" onPress={handleNavigate} />

      {fakeData.map((c) => (
        <Button title={c.productName} onPress={() => handleNavigateParams(c)} />
      ))}
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
