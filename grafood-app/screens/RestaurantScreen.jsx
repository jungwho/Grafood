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

export default function RestaurantScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const restaurant = restaurantList.find((rest) => rest.id === id);

  // 랜덤한 사진을 가져오는 함수
  const getRandomImages = () => {
    let images = [];
    if (restaurant.menu === "파스타") {
      const pastaList = pastaPicList[0]; // pastaPicList의 첫 번째 요소를 사용
      for (let i = 0; i < restaurant.review; i++) {
        const keys = Object.keys(pastaList);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        images.push(pastaList[randomKey]);
      }
    } else if (restaurant.menu === "마라탕") {
      const maraList = maraPicList[0]; // maraPicList의 첫 번째 요소를 사용
      for (let i = 0; i < restaurant.review; i++) {
        const keys = Object.keys(maraList);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        images.push(maraList[randomKey]);
      }
    }
    return images;
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
          >
            <Text
              style={{ color: "#ff3232" }}
              onPress={() =>
                navigation.navigate("ReviewGraph", { id: restaurant.id })
              }
            >
              Review
            </Text>
          </Pressable>
        </View>
      </View>

      {/* 랜덤 이미지 표시 */}
      <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
        <ScrollView style={{ width: "100%" }}>
          {randomImages.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{ width: 400, height: 400, marginBottom: 10 }}
            />
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
