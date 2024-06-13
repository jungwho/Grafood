import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { shareList } from "../database/shareDB";

function ShareScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={{ width: "100%" }}>
        {shareList.map((el, index) => (
          <Pressable key={index}>
            <View style={styles.listTopContainer}>
              <Text style={{ fontSize: 16, color: "#666666" }}>{el.name}</Text>
            </View>
            {el.image && (
              <Image source={el.image} style={{ width: "100%", height: 350 }} />
            )}
          </Pressable>
        ))}
      </ScrollView>
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  listTopContainer: {
    marginVertical: 20,
  },
});
