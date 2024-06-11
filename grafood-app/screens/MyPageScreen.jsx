import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

function MyPageScreen({ navigation }) {
  return <View style={styles.container}></View>;
}

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nickname: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statsSection: {
    alignItems: "center",
  },
  postsCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  postsLabel: {
    fontSize: 14,
    color: "gray",
  },
  editProfileButton: {
    alignSelf: "center",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  editProfileButtonText: {
    fontSize: 16,
  },
  addReviewButton: {
    alignSelf: "center",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#00f",
    borderRadius: 5,
  },
  addReviewButtonText: {
    color: "white",
    fontSize: 16,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  image: {
    width: "30%",
    height: 100,
    margin: 5,
  },
});
