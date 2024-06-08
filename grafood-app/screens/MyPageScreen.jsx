import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function MyPageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>My Page!</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("ReviewPlus");
        }}
      >
        <Text>Button</Text>
      </Pressable>
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
