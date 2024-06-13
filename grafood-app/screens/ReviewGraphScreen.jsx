import React, { useEffect, useState } from "react";
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
        <BackButton label={restaurant.name} navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BackButton label={restaurant.name} navigation={navigation} />
      <Text style={[styles.title, { marginTop: 30 }]}>Best Menu</Text>
      <View
        style={[
          styles.restaurantContainer,
          {
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 20,
          },
        ]}
      >
        <Text
          style={[styles.popularMenu, { marginBottom: 80, color: "#ff3232" }]}
        >
          1위 {restaurant.pop1st}
        </Text>
        <Text style={[styles.popularMenu, { marginTop: 40 }]}>
          2위 {restaurant.pop2nd}
        </Text>
        <Text style={[styles.popularMenu, { marginTop: 80 }]}>
          3위 {restaurant.pop3rd}
        </Text>
      </View>
      <Text style={styles.title}>Price</Text>
      <View style={styles.restaurantContainer}>
        <View style={styles.moneyContainer}>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              source={require("../assets/images/moneyImage/20000won.png")}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 10 }}>{restaurant.menu}</Text>
          </View>
          <View style={{ width: "50%", alignItems: "center" }}>
            <Image
              source={restaurant.money}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={{ marginTop: 10 }}>{restaurant.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingTop: 20,
  },

  title: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    color: "#ff3232",
    fontSize: 16,
  },
  restaurantContainer: {
    marginHorizontal: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  moneyContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    paddingVertical: 10,
  },
  image: {
    width: "70%",
    height: 80,
  },
  popularMenu: {
    fontSize: 16,
    color: "#666666",
  },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});
