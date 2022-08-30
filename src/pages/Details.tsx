import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface DetailsProps {
  route: any;
}

export default function Details({ route }: DetailsProps) {
  const computer = route.params;

  console.log("params:", computer);

  return (
    <View style={styles.container}>
      <Text>Details - buscar no banco tudo de: {JSON.stringify(computer)}</Text>
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
