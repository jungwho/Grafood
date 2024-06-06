import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text>Main Page!</Text>
    </View>
  );
}

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
