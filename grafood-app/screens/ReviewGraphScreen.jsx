import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { restaurantList } from "../database/restaurantDB";
import BackButton from "../component/BackButton";

export default function ReviewGraphScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const restaurant = restaurantList.find((rest) => rest.id === id);

  if (!restaurant) {
    return (
      <View style={styles.container}>
        <BackButton label="Restaurant Page" navigation={navigation} />
        <Text style={styles.errorText}>해당 레스토랑을 찾을 수 없습니다.</Text>
      </View>
    );
  }

  const restaurantName = restaurant.name;

  return (
    <View style={styles.container}>
      <BackButton label="Restaurant Page" navigation={navigation} />
      <Text style={styles.title}> {restaurantName}의 인기 메뉴!!</Text>
      <View style={styles.restaurantContainer}>
        <Text style={styles.popularMenu}>1위: {restaurant.pop1st}</Text>
        <Text style={styles.popularMenu}>2위: {restaurant.pop2nd}</Text>
        <Text style={styles.popularMenu}>3위: {restaurant.pop3rd}</Text>
      </View>
      <Text style={styles.title}>맛 평균 수치는 어떨까?</Text>
      <View style={styles.restaurantContainer}></View>

      <Text style={styles.title}>평균 가격 vs {restaurantName} 가격</Text>
      <View style={styles.restaurantContainer}>
        <View style={styles.moneyContainer}>
          <Image
            source={require("../assets/images/moneyImage/20000won.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={restaurant.money}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 55,
    position: "absolute",
    top: 0,
    backgroundColor: "#efefef",
    zIndex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: "#00a466",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "lighter",
    marginBottom: 20,
  },
  restaurantContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  image: {
    width: "40%",
    height: 80,
  },
  popularMenu: {
    fontSize: 16,
    color: "#ff7e00",
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
