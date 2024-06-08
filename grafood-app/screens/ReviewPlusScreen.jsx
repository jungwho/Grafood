import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

function ReviewPlusScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Select Restaurant</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Select Menu</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Add Photo</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Write Your Review</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#efefef",
  },
  section: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    color: "#00a466",
  },
});
export default ReviewPlusScreen;
