import React from "react";
import { useRoute } from "@react-navigation/native";
import { restaurantList } from "../database/restaurantDB";
import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import BackButton from "../component/BackButton";

export default function RestaurantScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const restaurant = restaurantList.find((rest) => rest.id === id);
  const photos = [
    { id: "1", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "2", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "3", image: require("../assets/images/restaurantImage/image02.png") },
    { id: "4", image: require("../assets/images/restaurantImage/image02.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BackButton label="Search Page" navigation={navigation} />
        <View style={styles.listTopContainer}>
          <Text style={{ fontSize: 18, color: "#666666" }}>
            {restaurant.name}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#888888", fontSize: 15 }}>
              도보 {restaurant.distance}분
            </Text>
            <Text style={{ marginLeft: 10, color: "#888888", fontSize: 15 }}>
              리뷰 {restaurant.review}개
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("Location", { id: restaurant.id })
            }
          >
            <Text style={{ color: "#ff3232" }}>Location</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={{ color: "#ff3232" }}>Review</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  topContainer: {
    width: "100%",
    paddingTop: 20,
    position: "absolute",
    top: 0,
    backgroundColor: "#efefef",
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  listTopContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 20,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "48%",
    paddingVertical: 5,
    display: "flex",
    alignItems: "center",
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    width: "50%",
    height: 200,
    margin: "0%",
  },
});
