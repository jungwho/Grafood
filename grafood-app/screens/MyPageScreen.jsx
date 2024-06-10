import React from "react";
import { View, Text, Pressable, StyleSheet, Image, ScrollView } from "react-native";

function MyPageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* 프로필과 통계를 포함한 헤더 섹션 */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          {/* 프로필 이미지 */}
          <Image
            source={{ uri: 'https://example.com/profile.jpg' }} // 실제 프로필 사진 URL로 변경
            style={styles.profileImage}
          />
          {/* 닉네임 */}
          <Text style={styles.nickname}>seoyeon</Text>
        </View>
        <View style={styles.statsSection}>
          {/* 게시물 수 */}
          <Text style={styles.postsCount}>100</Text> {/* 동적 게시물 수로 변경 */}
          {/* 게시물 레이블 */}
          <Text style={styles.postsLabel}>게시물</Text>
        </View>
      </View>

      {/* 프로필 편집 버튼 */}
      <Pressable
        style={styles.editProfileButton}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </Pressable>

      {/* 리뷰 추가 버튼 */}
      <Pressable
        style={styles.addReviewButton}
        onPress={() => {
          navigation.navigate("ReviewPlus");
        }}
      >
        <Text style={styles.addReviewButtonText}>Add Review</Text>
      </Pressable>

      {/* 스크롤 가능한 이미지 그리드 */}
      <ScrollView contentContainerStyle={styles.imageGrid}>
        {[...Array(30)].map((_, index) => (
          <Image
            key={index}
            source={{ uri: `https://example.com/photo${index}.jpg` }} // 실제 이미지 URL로 변경
            style={styles.image}
          />
        ))}
      </ScrollView>
    </View>
  );
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
