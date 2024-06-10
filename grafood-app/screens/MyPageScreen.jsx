import React from "react";
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native";

function MyPageScreen({ navigation }) {
  // 사진 배열
  const images = [
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    "https://via.placeholder.com/100",
    
    // 필요한 만큼 URL 추가
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.profilePic}
          />
          <Text style={styles.nickname}>Seoyeon</Text>
          <Pressable
            style={styles.editProfileButton}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
        </View>
        <View style={styles.postsSection}>
          <Text style={styles.postsCount}>10</Text>
          <Text style={styles.postsLabel}>게시물</Text>
          <Pressable
            style={styles.addReviewButton}
            onPress={() => navigation.navigate("ReviewPlus")}
          >
            <Text style={styles.buttonText}>Add Review</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.gallery}>
        <View style={styles.row}>
          {images.map((src, index) => (
            <Image key={index} source={{ uri: src }} style={styles.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  nickname: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  editProfileButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  postsSection: {
    alignItems: "flex-end",
  },
  postsCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  postsLabel: {
    fontSize: 16,
  },
  addReviewButton: {
    backgroundColor: "#28A745",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "30%",
    height: 100,
    marginVertical: 5,
  },
});
