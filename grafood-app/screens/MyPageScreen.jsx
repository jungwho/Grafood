import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

function MyPageScreen({ navigation, route }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    if (route.params && route.params.reviews) {
      const newReview = route.params.reviews;
      setReviewList((prevList) => [...prevList, newReview]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      {reviewList.map((el, index) => (
        <View>
          <Text key={index}>{el.spicy}</Text>

          <Image source={{ uri: el.image }} style={styles.image} />
        </View>
      ))}
      <Pressable
        onPress={() => {
          navigation.navigate("ReviewPlus");
        }}
      >
        <Text>Go To Plus</Text>
      </Pressable>
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
});
