import React from "react";
import { useRoute } from "@react-navigation/native";
import { restaurantList } from "../database/restaurantDB";
import { pastaPicList, maraPicList } from "../database/foodpicDB";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import BackButton from "../component/BackButton";
import TasteSlider from "../component/TasteSlider";

export default function RestaurantScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const restaurant = restaurantList.find((rest) => rest.id === id);

  // Function to get unique random images
  const getRandomImages = () => {
    let images = [];
    let keys;
    let foodPicList;

    if (restaurant.menu === "파스타") {
      foodPicList = pastaPicList[0]; // pastaPicList의 첫 번째 요소를 사용
    } else if (restaurant.menu === "마라탕") {
      foodPicList = maraPicList[0]; // maraPicList의 첫 번째 요소를 사용
    }

    keys = Object.keys(foodPicList);

    // Shuffle keys array to randomize image selection
    keys = shuffleArray(keys);

    // Select unique images until we have enough for restaurant.review
    let count = 0;
    while (images.length < restaurant.review && count < keys.length) {
      const randomKey = keys[count];
      images.push(foodPicList[randomKey]);
      count++;
    }

    return images;
  };

  // Shuffle array function
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const randomImages = getRandomImages();

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
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              styles.button,
            ]}
            onPress={() =>
              navigation.navigate("Location", { id: restaurant.id })
            }
          >
            <Text style={{ color: "#ff3232" }}>Location</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              { opacity: pressed ? 0.5 : 1 },
              styles.button,
            ]}
            onPress={() =>
              navigation.navigate("ReviewGraph", { id: restaurant.id })
            }
          >
            <Text style={{ color: "#ff3232" }}>Review</Text>
          </Pressable>
        </View>
      </View>

      {/* Display random images */}
      <View>
        <ScrollView style={{ marginTop: 20 }}>
          {randomImages.map((image, index) => (
            <View style={{ margin: 10 }} key={index}>
              <Image source={image} style={{ width: 350, height: 300 }} />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(230, 230, 230, 0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TasteSlider
                  label="Spicy"
                  taste={Math.random()}
                  disabled={true}
                />
                <TasteSlider
                  label="Salty"
                  taste={Math.random()}
                  disabled={true}
                />
                <TasteSlider
                  label="sweet"
                  taste={Math.random()}
                  disabled={true}
                />
                <TasteSlider
                  label="Quantity"
                  taste={Math.random()}
                  disabled={true}
                />
              </View>
            </View>
          ))}
        </ScrollView>
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
    paddingTop: 160,
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
});
