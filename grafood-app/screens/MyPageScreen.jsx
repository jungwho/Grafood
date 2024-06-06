import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MyPageScreen() {
  return (
    <View style={styles.container}>
      <Text>My Page!</Text>
    </View>
  );
}

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
