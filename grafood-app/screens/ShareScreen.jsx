import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ShareScreen() {
  return (
    <View style={styles.container}>
      <Text>Share Page!</Text>
    </View>
  );
}

export default ShareScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
